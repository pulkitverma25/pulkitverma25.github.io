---
layout: page
permalink: /conferences/
---

<div class="row m-0" style="width: 100%;">
  <div class="col-sm-12 p-0">
    <h1>Conferences</h1>
    <h5 class="mb-4">Future AI, ML, Planning, and Robotics conferences that I keep track of.</h5>
  </div>
</div>

<div class="card mt-2">
  <div class="p-3">
    <div class="table-responsive">
    <table class="table table-striped table-borderless" style="border: 0px;" align="left" cellpadding="4" bordercellspacing="1">
        <thead style="background-color:#b71c1c; color:#ffffff">
        <tr>
            <th style="width:34%;text-align: left;font-size:18px;"><strong>Conference Name</strong></th>
            <th style="width:14%;text-align: left;font-size:18px;"><strong>Venue</strong></th>
            <th style="width:26%;text-align: left;font-size:18px;"><strong>Deadline</strong></th>
            <th style="width:26%;text-align: left;font-size:18px;"><strong>Dates</strong></th>
        </tr>
        </thead>
        <tbody>
        {% assign sorted_conferences = site.conferences | sort: "num" %}
        {% for conference in sorted_conferences %}
          <tr>
            <td style="width:34%;"><a style="color:#b71c1c" href="{{ conference.website }}" target="_blank"><strong>{{ conference.shortname }}</strong><strong>: </strong>{{ conference.name }}</a></td>
            <td style="width:14%;">{{ conference.location }}</td>
            <td style="width:26%;text-align: left;">
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
            <td style="width:26%;">
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