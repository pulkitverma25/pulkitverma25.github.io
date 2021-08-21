---
layout: page
permalink: /
title: About
nav: About
---

<div class="col mt-4">
    <header class="post-header">
    <h1 class="post-title">
      <strong>Pulkit</strong> Verma</h1>
    <h5>Ph.D. Student @ <a href="http://aair-lab.github.io/" target="_blank">AAIR LAB</a>, <a href="https://www.asu.edu/" target="\_blank">ASU</a></h5>
  </header>
</div>

<div class="container">
  <div class="row">
    <!-- <div class="col-xs-12 col-sm-3 col-sm-push-9"> -->
<!--       <img class="profile-img float-right mr-2" src="{{ 'pulkit_verma.jpg' | prepend: '/assets/img/' | prepend: site.baseurl }}">
 --><!--     </div> -->
    <div class="col-12 text-justify">
      <img class="profile-img float-right mr-2" src="{{ 'pulkit_verma.jpg' | prepend: '/assets/img/' | prepend: site.baseurl }}">
      <p>I am a Ph.D. student in the <a href="https://scai.engineering.asu.edu/" target="_blank">School of Computing and Augmented Intelligence</a> at <a href="https://www.asu.edu/" target="_blank">Arizona State University</a>, working with <a href="http://siddharthsrivastava.net" target="_blank">Prof. Siddharth Srivastava</a>. I am also affiliated with UC Berkeley's <a href="https://humancompatible.ai/" target="_blank">Center for Human-Compatible Artificial Intelligence</a>, and ASU's <a href="https://globalsecurity.asu.edu/center-human-artificial-intelligence-and-robot-teaming" target="_blank">Center for Human, Artificial Intelligence, and Robot Teaming</a>. I have completed M.Tech. from <a href="http://www.iitg.ac.in/cse/" target="_blank">Department of Computer Science &amp; Engineering</a> at <a href="http://www.iitg.ac.in/" target="_blank">IIT Guwahati</a>, advised by <a href="http://www.iitg.ernet.in/pkdas/" target="_blank">Prof. Pradip K. Das</a>.</p>
      <p>My primary interests lie in AI safety, AI planning, action-model learning, and analysis of abstractions. My research focuses on safe and reliable behavior of AI agents. I am currently investigating the minimal set of requirements in an AI system that would enable a user to assess and understand the limits of its safe operability.</p>
      <p>In the past, I have worked in the areas of bio-inspired robotics, speech processing, and internet of things.</p>
    </div>
  </div>
</div>

<!-- News -->
<div class="news mt-3 p-0">
  <h1 class="title mb-4 p-0">News</h1>
  {% assign news = site.news | reverse %}
  {% for item in news limit: site.news_limit %}
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


<div class="social">
  <center>
  <span class="contacticon center">
    {% if site.email %}<a href="mailto:{{ site.email | encode_email }}"><i class="fas fa-envelope"></i></a>{% endif %}
    {% if site.scholar_userid %}<a href="https://scholar.google.com/citations?user={{ site.scholar_userid }}" target="_blank" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>{% endif %}
    {% if site.github_username %}<a href="https://github.com/{{ site.github_username }}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>{% endif %}
    {% if site.dblp_username %}<a href="https://dblp.uni-trier.de/pers/hd/v/{{ site.dblp_username }}" target="_blank" title="DBLP"><i class="ai ai-dblp"></i></a>{% endif %}
    {% if site.orcid_id %}<a href="https://orcid.org/{{ site.orcid_id }}" target="_blank" title="ORCID"><i class="ai ai-orcid"></i></a>{% endif %}
    {% if site.publons_id %}<a href="https://publons.com/a/{{ site.publons_id }}/" target="_blank" title="Publons"><i class="ai ai-publons"></i></a>{% endif %}
    {% if site.research_gate_profile %}<a href="https://www.researchgate.net/profile/{{site.research_gate_profile}}/" target="_blank" title="ResearchGate"><i class="ai ai-researchgate"></i></a>{% endif %}
    {% if site.linkedin_username %}<a href="https://www.linkedin.com/in/{{ site.linkedin_username }}" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>{% endif %}
    {% if site.twitter_username %}<a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a>{% endif %}
    {% if site.strava_userid %}<a href="https://www.strava.com/athletes/{{ site.strava_userid }}" target="_blank" title="Strava"><i class="fab fa-strava"></i></a>{% endif %}
    {% if site.medium_username %}<a href="https://medium.com/@{{ site.medium_username }}" target="_blank" title="Medium"><i class="fab fa-medium"></i></a>{% endif %}
    {% if site.quora_username %}<a href="https://www.quora.com/profile/{{ site.quora_username }}" target="_blank" title="Quora"><i class="fab fa-quora"></i></a>{% endif %}
    {% if site.blogger_url %}<a href="{{ site.blogger_url }}" target="_blank" title="Blogger"><i class="fab fa-blogger-b"></i></a>{% endif %}
  </span>
</center>
</div>
