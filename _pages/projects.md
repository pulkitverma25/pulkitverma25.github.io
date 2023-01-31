---
layout: page
title: Projects
nav: projects
permalink: /projects/
description: Some of the research projects I've worked on (Last Updated in 2021)
---

<div class="container-fluid p-0 text-justify">
  <div id="projects" class="row mt-2 pt-3" style="overflow: visible !important;">
    {% assign sorted_projects = site.projects | sort: "importance" | reverse %}
    {% for project in sorted_projects %}
      {% if project.type=='research' %}
      <div class="project-card">
        {% if project.redirect %}
          <a href="{{ project.redirect }}" target="_blank">
        {% else %}
          <a href="{{ project.url | prepend: site.baseurl }}">
        {% endif %}
          <div class="card">
            <img class="card-img-top" src="{{ project.img | prepend: site.baseurl }}" alt="project thumbnail">
            <div class="card-body">
              <h5 class="card-title text-lowercase">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <div class="row ml-1 mr-1 p-0">
                {% if project.wordpress %}
                  <div class="wordpress-icon" data-toggle="tooltip" title="Blog Post">
                    <div class="icon">
                      <a href="{{ project.wordpress }}" target="_blank"><i class="fab fa-wordpress-simple wp-icon"></i></a>
                    </div>
                  </div>
                {% endif %}
                {% if project.github %}
                  {% assign github_id = project.title | append: project.github | replace: '/', '-' | replace: ' ', '-' %}
                  <div class="github-icon">
                    <div class="icon" data-toggle="tooltip" title="Code Repository">
                      <a href="https://github.com/{{ project.github }}" target="_blank"><i class="fab fa-github gh-icon"></i></a>
                    </div>
                    <span class="stars" data-toggle="tooltip" title="GitHub Stars">
                      <i class="fas fa-star"></i>
                      <span id="{{ github_id }}-stars"></span>
                    </span>
                  </div>
                {% endif %}
              </div>
            </div>
          </div>
        </a>
      </div>
      {% endif %}
    {% endfor %}
  </div>
</div>

<br>
<div class="row m-0" style="width: 100%;">
  <div class="col-sm-12 p-0">
    <h1>Course Projects</h1>
    <h6 class="mb-4">Some of the course projects I've worked on (Last Updated in 2019)</h6>
  </div>
</div>

<div class="container-fluid p-0 text-justify">
  <div id="projects" class="row mt-2 pt-3" style="overflow: visible !important;">
    {% assign sorted_projects = site.projects | sort: "importance" | reverse %}
    {% for project in sorted_projects %}
      {% if project.type=='academic' %}
      <div class="project-card">
        {% if project.redirect %}
          <a href="{{ project.redirect }}" target="_blank">
        {% else %}
          <a href="{{ project.url | prepend: site.baseurl }}">
        {% endif %}
          <div class="card">
            <img class="card-img-top" src="{{ project.img | prepend: site.baseurl }}" alt="project thumbnail">
            <div class="card-body">
              <h5 class="card-title text-lowercase">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <div class="row ml-1 mr-1 p-0">
                {% if project.wordpress %}
                  <div class="wordpress-icon" data-toggle="tooltip" title="Blog Post">
                    <div class="icon">
                      <a href="{{ project.wordpress }}" target="_blank"><i class="fab fa-wordpress-simple wp-icon"></i></a>
                    </div>
                  </div>
                {% endif %}
                {% if project.github %}
                  {% assign github_id = project.title | append: project.github | replace: '/', '-' | replace: ' ', '-' %}
                  <div class="github-icon">
                    <div class="icon" data-toggle="tooltip" title="Code Repository">
                      <a href="https://github.com/{{ project.github }}" target="_blank"><i class="fab fa-github gh-icon"></i></a>
                    </div>
                    <span class="stars" data-toggle="tooltip" title="GitHub Stars">
                      <i class="fas fa-star"></i>
                      <span id="{{ github_id }}-stars"></span>
                    </span>
                  </div>
                {% endif %}
              </div>
            </div>
          </div>
        </a>
      </div>
      {% endif %}
    {% endfor %}
  </div>
</div>