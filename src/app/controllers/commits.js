var Commits = function() {
    this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

    this.index = function(req, resp, params) {
      var self = this;

      geddy.model.Commit.all(function(err, commits) {
        self.respond({
          params: params,
          commits: commits
        });
      });
    };

    this.githubCallback = function(req, resp, params) {
      var self = this;
      // console.log(req);
      // console.log(resp);
      // console.log(params);
      var payload = JSON.parse(params.payload);
      // console.log(payload);
      var commits = geddy.helpers.GithubJsonHelper.jsonToCommits(payload, geddy.config.saveModelsToDb);

      console.log(commits);
      geddy.io.sockets.emit('data', commits);
      this.respond('well that worked | ' + new Date().toString(), {'format': 'txt'});
    }

    this.add = function(req, resp, params) {
      this.respond({
        params: params
      });
    };

    this.create = function(req, resp, params) {
      var self = this,
        commit = geddy.model.Commit.create(params);

      commit.save(function(err, data) {
        if(err) {
          params.errors = err;
          self.transfer('add');
        } else {
          self.redirect({
            controller: self.name
          });
        }
      });

      

      // Save the .diff file to disk
      // var fs = require('fs');
      // var fullFilePath = geddy.config.staticFilePath + '/' + commit.before + '_' + commit.githubId + '.diff';
      // fs.writeFile(fullFilePath, "Hey there!", function(err) {
      //     if(err) {
      //         console.log(err);
      //     } else {
      //         console.log("The file was saved!");
      //     }
      // }); 
    };

    this.show = function(req, resp, params) {
      var self = this;

      geddy.model.Commit.first(params.id, function(err, commit) {
        self.respond({
          params: params,
          commit: commit.toObj()
        });
      });
    };

    this.edit = function(req, resp, params) {
      var self = this;

      geddy.model.Commit.first(params.id, function(err, commit) {
        self.respond({
          params: params,
          commit: commit
        });
      });
    };

    this.update = function(req, resp, params) {
      var self = this;

      geddy.model.Commit.first(params.id, function(err, commit) {
        commit.updateProperties(params);

        commit.save(function(err, data) {
          if(err) {
            params.errors = err;
            self.transfer('edit');
          } else {
            self.redirect({
              controller: self.name
            });
          }
        });
      });
    };

    this.destroy = function(req, resp, params) {
      var self = this;

      geddy.model.Commit.remove(params.id, function(err) {
        if(err) {
          params.errors = err;
          self.transfer('edit');
        } else {
          self.redirect({
            controller: self.name
          });
        }
      });
    };

  };

exports.Commits = Commits;