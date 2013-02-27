{% extends layout %}
{% block content %}
<div class="hero-unit">
  <h2 class="id">{{ commit.id }}</h2>
  <a href="/commits/{{params.id}}/edit" class="btn pull-right">Edit this commit</a>
</div>

<h2>Commit Properties</h2>
{% for prop in commit %}
<div class="row list-item">
  <div class="span4">
    <h3>{{loop.key}}</h3>
  </div>
  <div class="span8">
    <h3><i class="icon-list-alt"></i><span class="">{{ prop }}</span></h3>
  </div>
</div>
{% endfor %}

{% endblock %}