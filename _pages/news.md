---
layout: page
permalink: /news/
---

<div class="row m-0" style="width: 100%;">
  <div class="col-sm-12 p-0">
    <h1>News</h1>
  </div>
</div>

<!-- News -->
<div class="news mt-3 p-0">
  {% assign news = site.news | reverse %}
  {% for item in news limit: site.news_all_limit %}
    <div class="row p-0">
      <div class="col-sm-2 p-0">
        <span class="badge danger-color-dark font-weight-bold text-uppercase align-middle date ml-3">
          {{ item.date | date: "%b %-d, %Y" }}
        </span>
      </div>
      <div class="col-sm-10 mt-2 mt-sm-0 ml-3 ml-md-0 p-0 font-weight-light text">
        <p>{{ item.content | remove: '<p>' | remove: '</p>' | emojify }}</p>
      </div>
    </div>
  {% endfor %}
</div>