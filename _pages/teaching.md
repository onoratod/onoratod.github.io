---
layout: plain
permalink: /teaching/
title: teaching
description:
nav: true
rating_scale: 5
---

{% assign courses = site.data.teaching %}
<div class="publications teaching">

<h2 class="year">Teaching Assistant</h2>
<p>&nbsp;</p>

<ol class="bibliography">
{% for c in courses %}
  <li>
    <div class="row">
      <div class="col-12">
        <div class="title">
          {{ c.course }}{% if c.number %} <span class="course-number">({{ c.number }})</span>{% endif %}
        </div>
        <div class="author">
          {{ c.role }} for Professor {{ c.professor }} <span class="course-sep">&bull;</span> {{ c.terms | join: ", " }}
        </div>
        <div class="periodical">
          <em>{{ c.level }}, Columbia University</em> <span class="course-rating"><span class="course-sep">&bull;</span> Evaluation: {{ c.rating | default: "X.X" }}/{{ page.rating_scale }} (average)</span>
        </div>
        {% if c.evaluations %}
        <div class="links">
          <a href="{{ c.evaluations | prepend: '/assets/pdf/teaching/' | relative_url }}" class="btn btn-sm z-depth-0" role="button" target="_blank">Evaluations</a>
        </div>
        {% endif %}
      </div>
    </div>
  </li>
{% endfor %}
</ol>

</div>
