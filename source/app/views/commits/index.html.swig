{% extends layout %}
{% block content %}
<div class="hero-unit">
  <h2>All Commits</h2>
  <a href="/commits/add" class="btn pull-right">Create a new Commit</a>
</div>

{% if commits %}
<div id="commits-list">
{% for commit in commits %}
  <div class="row list-item" id="commit-{{ commit.id }}">
    <div class="span8">
      <h3><a href="/commits/{{commit.id}}" class="btn pull-right">{{commit.id}}</a></h3>
    </div>
    <div class="span4">
      <h3><i class="icon-list-alt"></i>{{commit.id}}</h3>
    </div>
  </div>
{% endfor %}
{% endif %}
</div>
{% endblock %}