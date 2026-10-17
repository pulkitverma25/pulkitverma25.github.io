// Interactive behavior for the conference deadlines page: live countdowns,
// open/closed status, tag + text filtering, and soonest-deadline sorting.

const URGENT_MS = 7 * 24 * 60 * 60 * 1000;

function formatCountdown(ms) {
  if (ms <= 0) return 'Closed';
  const minutes = Math.floor(ms / 60000);
  const days = Math.floor(minutes / (60 * 24));
  const hours = Math.floor((minutes % (60 * 24)) / 60);
  if (days > 0) return `${days}d ${hours}h left`;
  const mins = minutes % 60;
  if (hours > 0) return `${hours}h ${mins}m left`;
  return `${Math.max(mins, 0)}m left`;
}

function allPassedNoTbd(rows, now) {
  const dated = rows.filter((row) => row.dataset.deadline);
  const hasTbd = rows.some((row) => !row.dataset.deadline);
  return dated.length > 0 && !hasTbd && dated.every((row) => Date.parse(row.dataset.deadline) - now <= 0);
}

function updateTrackCollapse(track, now) {
  const submissionRows = Array.from(track.querySelectorAll('.conf-deadline-row[data-kind="submission"]'));
  const decisionRows = Array.from(track.querySelectorAll('.conf-deadline-row[data-kind="decision"]'));

  const submissionClosed = allPassedNoTbd(submissionRows, now);
  const notificationsSent = allPassedNoTbd(decisionRows, now);

  const closedBanner = track.querySelector('[data-role="submission-closed"]');
  const notifiedBanner = track.querySelector('[data-role="notifications-sent"]');

  submissionRows.forEach((row) => { row.hidden = submissionClosed || notificationsSent; });
  decisionRows.forEach((row) => { row.hidden = notificationsSent; });
  if (closedBanner) closedBanner.hidden = !(submissionClosed && !notificationsSent);
  if (notifiedBanner) notifiedBanner.hidden = !notificationsSent;
}

// Picks which deadline rows to surface per track for compact list-view
// display: every still-open submission deadline (so Abstract + Paper both
// show while both are upcoming, not just the soonest one); if none of those
// are upcoming, the upcoming decision instead; and failing that, the single
// most recently passed row, so a closed track still shows something.
function markNextDeadline(track, now) {
  const submissionRows = Array.from(
    track.querySelectorAll('.conf-deadline-row[data-kind="submission"][data-deadline]')
  ).filter((row) => !row.hidden);
  const decisionRows = Array.from(
    track.querySelectorAll('.conf-deadline-row[data-kind="decision"][data-deadline]')
  ).filter((row) => !row.hidden);
  const allRows = submissionRows.concat(decisionRows);
  allRows.forEach((row) => row.classList.remove('is-next-deadline'));

  const isUpcoming = (row) => Date.parse(row.dataset.deadline) - now > 0;

  const upcomingSubmission = submissionRows.filter(isUpcoming);
  if (upcomingSubmission.length > 0) {
    upcomingSubmission.forEach((row) => row.classList.add('is-next-deadline'));
    return;
  }

  const upcomingDecision = decisionRows.filter(isUpcoming);
  if (upcomingDecision.length > 0) {
    upcomingDecision.forEach((row) => row.classList.add('is-next-deadline'));
    return;
  }

  let latest = null;
  let latestTime = -Infinity;
  allRows.forEach((row) => {
    const t = Date.parse(row.dataset.deadline);
    if (Number.isNaN(t)) return;
    if (t > latestTime) {
      latestTime = t;
      latest = row;
    }
  });
  if (latest) latest.classList.add('is-next-deadline');
}

function updateCard(card, now) {
  const allRows = card.querySelectorAll('.conf-deadline-row[data-deadline]');
  const submissionRows = card.querySelectorAll('.conf-deadline-row[data-kind="submission"][data-deadline]');
  let soonestFuture = Infinity;
  let latestAny = -Infinity;

  allRows.forEach((row) => {
    const t = Date.parse(row.dataset.deadline);
    if (Number.isNaN(t)) return;
    const countdownEl = row.querySelector('.conf-countdown');
    const diff = t - now;
    row.classList.toggle('is-passed', diff <= 0);
    if (countdownEl) {
      countdownEl.textContent = formatCountdown(diff);
      countdownEl.classList.toggle('is-urgent', diff > 0 && diff <= URGENT_MS);
      countdownEl.classList.toggle('is-open', diff > URGENT_MS);
    }
  });

  submissionRows.forEach((row) => {
    const t = Date.parse(row.dataset.deadline);
    if (Number.isNaN(t)) return;
    latestAny = Math.max(latestAny, t);
    const diff = t - now;
    if (diff > 0) soonestFuture = Math.min(soonestFuture, t);
  });

  card.querySelectorAll('.conf-track').forEach((track) => {
    updateTrackCollapse(track, now);
    markNextDeadline(track, now);
  });

  const badge = card.querySelector('[data-role="status"]');
  const hasUpcoming = soonestFuture !== Infinity;
  const hasAnyDated = submissionRows.length > 0;
  const sortKey = hasUpcoming ? soonestFuture : (latestAny === -Infinity ? Infinity : latestAny + 1e13);
  card.dataset.sortKey = String(sortKey);

  if (badge) {
    badge.classList.remove('status-open', 'status-urgent', 'status-closed');
    if (hasUpcoming && soonestFuture - now <= URGENT_MS) {
      badge.textContent = 'Closing soon';
      badge.classList.add('status-urgent');
    } else if (hasUpcoming) {
      badge.textContent = 'Open';
      badge.classList.add('status-open');
    } else if (!hasAnyDated) {
      badge.textContent = 'TBD';
      badge.classList.add('status-closed');
    } else {
      badge.textContent = 'Closed';
      badge.classList.add('status-closed');
    }
  }
}

function applyFilters(grid, query, activeTags) {
  const cards = grid.querySelectorAll('.conf-card');
  let visibleCount = 0;
  cards.forEach((card) => {
    const matchesQuery = !query || card.dataset.search.includes(query);
    const cardTags = (card.dataset.tags || '').split(',').filter(Boolean);
    const matchesTags = activeTags.size === 0 || cardTags.some((t) => activeTags.has(t));
    const visible = matchesQuery && matchesTags;
    card.classList.toggle('is-filtered-out', !visible);
    if (visible) visibleCount += 1;
  });
  return visibleCount;
}

function rankCards(grid) {
  let rank = 0;
  grid.querySelectorAll('.conf-card').forEach((card) => {
    const rankEl = card.querySelector('[data-role="rank"]');
    if (card.classList.contains('is-filtered-out')) {
      if (rankEl) rankEl.textContent = '';
      return;
    }
    rank += 1;
    if (rankEl) rankEl.textContent = String(rank);
  });
}

function sortCards(grid, mode) {
  const cards = Array.from(grid.querySelectorAll('.conf-card'));
  cards.sort((a, b) => {
    if (mode === 'name') {
      return a.dataset.search.localeCompare(b.dataset.search);
    }
    if (mode === 'confdate') {
      const da = Date.parse(a.dataset.start);
      const db = Date.parse(b.dataset.start);
      return (Number.isNaN(da) ? Infinity : da) - (Number.isNaN(db) ? Infinity : db);
    }
    return parseFloat(a.dataset.sortKey) - parseFloat(b.dataset.sortKey);
  });
  cards.forEach((card) => grid.appendChild(card));
}

function init() {
  const grid = document.getElementById('conf-grid');
  if (!grid) return;

  const searchInput = document.getElementById('conf-search');
  const tagButtons = Array.from(document.querySelectorAll('.conf-tag-btn'));
  const sortSelect = document.getElementById('conf-sort');
  const emptyState = document.getElementById('conf-empty-state');
  const activeTags = new Set();

  function refreshTimers() {
    const now = Date.now();
    grid.querySelectorAll('.conf-card').forEach((card) => updateCard(card, now));
  }

  function refreshFilters() {
    const query = (searchInput?.value || '').trim().toLowerCase();
    const visibleCount = applyFilters(grid, query, activeTags);
    if (emptyState) emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    rankCards(grid);
  }

  function refreshSort() {
    sortCards(grid, sortSelect?.value || 'deadline');
    rankCards(grid);
  }

  refreshTimers();
  refreshSort();
  refreshFilters();

  setInterval(() => {
    refreshTimers();
    if (sortSelect?.value === 'deadline') refreshSort();
  }, 60000);

  searchInput?.addEventListener('input', refreshFilters);

  tagButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;
      if (activeTags.has(tag)) {
        activeTags.delete(tag);
        btn.classList.remove('is-active');
      } else {
        activeTags.add(tag);
        btn.classList.add('is-active');
      }
      refreshFilters();
    });
  });

  sortSelect?.addEventListener('change', refreshSort);

  const viewButtons = Array.from(document.querySelectorAll('.conf-view-btn'));
  function setView(view) {
    grid.classList.toggle('view-list', view === 'list');
    viewButtons.forEach((btn) => {
      const active = btn.dataset.view === view;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try {
      localStorage.setItem('conf-view', view);
    } catch (e) {
      // private browsing / blocked storage: view just won't persist
    }
  }

  let initialView = 'cards';
  try {
    initialView = localStorage.getItem('conf-view') || 'cards';
  } catch (e) {
    // ignore
  }
  setView(initialView);

  viewButtons.forEach((btn) => {
    btn.addEventListener('click', () => setView(btn.dataset.view));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
