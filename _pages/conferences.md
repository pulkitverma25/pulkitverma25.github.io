---
layout: page
permalink: /conferences/
title: Conferences
description: Future AI, ML, Planning, Robotics, and HRI conferences that I keep track of.

---


<div class="card mt-2">
  <div class="p-3">
    <div class="table-responsive">
    <table class="table table-striped table-borderless" style="border: 0px;" align="left" cellpadding="4" bordercellspacing="1">
        <thead style="background-color:var(--global-theme-color);">
        <tr>
            <th class="colorfy" style="width:34%;text-align: left;font-size:18px;">Conference Name</th>
            <th class="colorfy" style="width:17%;text-align: left;font-size:18px;">Venue</th>
            <th class="colorfy" style="width:25%;text-align: left;font-size:18px;">Deadline</th>
            <th class="colorfy" style="width:24%;text-align: left;font-size:18px;">Dates</th>
        </tr>
        </thead>
        <tbody>
        {% assign sorted_conferences = site.conferences | sort: "num" %}
        {% for conference in sorted_conferences %}
          <tr>
            <td style="width:34%;"><a href="{{ conference.website }}" target="_blank"><strong>{{ conference.shortname }}</strong><strong>: </strong>{{ conference.name }}</a></td>
            <td style="width:17%;">{{ conference.location }}</td>
            <td style="width:25%;text-align: left;">
              {% if conference.abstractdeadline %}
                <strong>Abstract</strong>: 
                {% if conference.adp %}
                  <del>{{ conference.abstractdeadline }}</del> 
                {% else %}
                  {{ conference.abstractdeadline }}
                {% endif %}
                &nbsp; <br> 
              {% endif %}
              <strong>Paper</strong>: 
              {% if conference.pdp %}
                <del>{{ conference.paperdeadline }}</del>
              {% else %}
                {{ conference.paperdeadline }}
              {% endif %}
            </td>
            <td style="width:24%;">
            {% if conference.dp %}
              <del> {{ conference.dates }}</del>
            {% else %}
              {{ conference.dates }}
            {% endif %}
            </td>
          </tr>
        {% endfor %}
      </tbody>
    </table>
    </div>
  </div>
</div>