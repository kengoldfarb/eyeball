{% extends layout %}
{% block content %}
<div class="hero-unit">
  <form id="commit-form" class="form-horizontal" action="/commits" method="POST">
    <fieldset>
      <legend>Create a new Commit</legend>
      {% if params.errors %}
      <div class="control-group">
        <ul>
        {% for err in params.errors %}
          <li>{{err}}</li>
        {% endfor %}
        </ul>
      </div>
      {% endif %}

                              <div class="control-group">
        <label for="githubId" class="control-label">githubId</label>
        <div class="controls">
                      <input type="text" class="span6" name="githubId" value="{{commit.githubId}}" />
                    </div>
      </div>
                        <div class="control-group">
        <label for="url" class="control-label">url</label>
        <div class="controls">
                      <input type="text" class="span6" name="url" value="{{commit.url}}" />
                    </div>
      </div>
                        <div class="control-group">
        <label for="author" class="control-label">author</label>
        <div class="controls">
                object
              </div>
      </div>
                        <div class="control-group">
        <label for="message" class="control-label">message</label>
        <div class="controls">
                      <input type="text" class="span6" name="message" value="{{commit.message}}" />
                    </div>
      </div>
                        <div class="control-group">
        <label for="timestamp" class="control-label">timestamp</label>
        <div class="controls">
                <input type="datetime" class="span3" name="timestamp" value="{{commit.timestamp}}" />
              </div>
      </div>
                        <div class="control-group">
        <label for="added" class="control-label">added</label>
        <div class="controls">
                array
              </div>
      </div>
                        <div class="control-group">
        <label for="before" class="control-label">before</label>
        <div class="controls">
                      <input type="text" class="span6" name="before" value="{{commit.before}}" />
                    </div>
      </div>
                        <div class="control-group">
        <label for="after" class="control-label">after</label>
        <div class="controls">
                      <input type="text" class="span6" name="after" value="{{commit.after}}" />
                    </div>
      </div>
                        <div class="control-group">
        <label for="ref" class="control-label">ref</label>
        <div class="controls">
                      <input type="text" class="span6" name="ref" value="{{commit.ref}}" />
                    </div>
      </div>
                        <div class="control-group">
        <label for="repository" class="control-label">repository</label>
        <div class="controls">
                object
              </div>
      </div>
            
      <div class="form-actions">
        <input type="submit" class="btn btn-primary" value="Add" />
      </div>
    </fieldset>
  </form>
</div>
{% endblock %}