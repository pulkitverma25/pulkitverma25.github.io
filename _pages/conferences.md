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
    <table align="center" border="1" cellpadding="8" cellspacing="2">
      <tbody>
        <tr>
            <td style="width:34%;text-align: center;font-size:18px;"><strong>Conference Name</strong></td>
            <td style="width:16%;text-align: center;font-size:18px;"><strong>Location</strong></td>
            <td style="width:26%;text-align: center;font-size:18px;"><strong>Deadline</strong></td>
            <td style="width:24%;text-align: center;font-size:18px;"><strong>Dates</strong></td>
        </tr>
        {% assign sorted_conferences = site.conferences | sort: "num" %}
        {% for conference in sorted_conferences %}
          <tr>
            <td style="width:34%;"><a href="{{ conference.website }}" target="_blank"><strong>{{ conference.shortname }}</strong><strong>: </strong>&nbsp;{{ conference.name }}</a></td>
            <td style="width:16%;">{{ conference.location }}</td>
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