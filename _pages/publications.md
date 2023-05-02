---
layout: page
permalink: /publications/
title: Publications
nav: publications
description: 
years: [2023, 2022, 2021, 2016, 2015, 2014]
---

{% for y in page.years %}
  <div class="row m-0 p-0" style="border-top: 1px solid #ddd;">
    <div class="col-sm-11 p-0">
      {% bibliography -f papers -q @*[year={{y}}]* %}
    </div>
    <div class="col-sm-1 align-self-start mt-2 p-0 pr-1">
      <h3 class="bibliography-year">{{y}}</h3>
    </div>
  </div>
{% endfor %}
