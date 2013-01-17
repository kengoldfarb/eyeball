var GithubJsonHelper = {
  'jsonToCommits': function(json, saveToDb) {
    var self = this;
    var newCommits = new Array();
    if(json !== undefined && json.commits !== undefined){
      for(var i=0, len=json.commits.length; i < len; i++){
        var ghCommit = json.commits[i];

        // console.log('****' + i + '****');
        var commit = geddy.model.Commit.create(ghCommit);
        // console.log(commit.before + '********************************************');
        commit.githubId = ghCommit.id;
        commit.before = json.before;
        commit.after = json.after;
        commit.ref = json.ref;
        commit.repository = json.repository;
        // console.log(commit);
        // return;
        
        // Get .diff file
        var request = require('request');
        var theUrl = commit.url + '.diff';;
        console.log(theUrl);
        request.get({url: theUrl}, function(error, response, body) {
            console.log('IN CALLBACK');
            if(!error && response.statusCode == 200 && body !== undefined){
              console.log(body);
              commit.diff = body;
            }

            // save model
            if(saveToDb === true){
                commit.save();
            }
        });
        newCommits.push(commit);
      }
    }
    // console.log(newCommits);
    return newCommits;
  }
};

geddy.helpers = geddy.helpers || {};
Module = geddy.helpers.GithubJsonHelper = GithubJsonHelper;