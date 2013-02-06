var GithubHelper = function() {
    var request = require('request'),
        util    = require('util'),
        GitHubApi = require("github"),
        debug   = false,
        self    = this,
        github  = null,
        async   = require('async');

    this.log = function(msg){
        if(this.debug){
            console.log('*** DEBUG *** ' + msg);
        }
    }

    this.init = function() {
        self.github = new GitHubApi({
            // required
            version: "3.0.0",
            // optional
            timeout: 5000
        });

        if(geddy.config.github.useAuthentication){
            github.authenticate({
                type: "basic",
                username: geddy.config.github.username,
                password: geddy.config.github.password
            });
        }
    }

    this.getCommitInfo = function(params, callback){
        self.github.repos.getCommit({
            user: params.user,
            repo: params.repo,
            sha: params.sha
        }, function(err, data){
            if(err){
                callback(err);
            }
            var commit = geddy.model.Commit.create(data);
            callback(null, commit);
        });
    }

    this.callbackJsonToCommits = function(json, saveToDb, callback) {
        var self = this,
            functionsParallel = new Array();

        if(json !== undefined && json.commits !== undefined){
          for(var i=0, len=json.commits.length; i < len; i++){

            // Set up what we're going to execute
            functionsParallel.push(function(callback){
                var ghCommit = json.commits[i];
                // Get commit info from api
                this.getCommitInfo({
                    user: json.author.name,
                    repo: json.repository.name,
                    sha: ghCommit.id
                }, function(err, commit){
                    if(err){

                    }
                    commit.githubId = ghCommit.id;
                    commit.before = json.before;
                    commit.after = json.after;
                    commit.ref = json.ref;
                    commit.repository = json.repository;
                    commit.url = json.url;
                    // newCommits.push(commit);
                    if(saveToDb){
                        commit.save();
                    }
                    callback(null, commit);
                });
            });

            // var ghCommit = json.commits[i];
            // // Get commit info from api
            // this.getCommitInfo({
            //     user: json.author.name,
            //     repo: json.repository.name,
            //     sha: ghCommit.id
            // }, function(err, commit){
            //     if(err){

            //     }
            //     commit.githubId = ghCommit.id;
            //     commit.before = json.before;
            //     commit.after = json.after;
            //     commit.ref = json.ref;
            //     commit.repository = json.repository;
            //     commit.url = json.url;
            //     // newCommits.push(commit);
            //     commit.save();
            // });

          }
        }
        // Execute them all in parallel
        async.parallel(functionsParallel, function(err, output){
            console.log('Async callback');
            console.log(err);
            console.log(output);
        }, callback);
      }
};

GithubHelper.instance = null;

GithubHelper.getInstance = function() {
    if(this.instance === null){
        this.instance = new GithubHelper();
    }
    this.instance.init();
    return this.instance;
}

module.exports = GithubHelper.getInstance();