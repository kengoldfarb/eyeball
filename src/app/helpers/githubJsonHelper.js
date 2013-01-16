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
        if(saveToDb === true){
            commit.save();
        }
        newCommits.push(commit);
      }
    }
    // console.log(newCommits);
    return newCommits;
  }
};

geddy.helpers = geddy.helpers || {};
Module = geddy.helpers.GithubJsonHelper = GithubJsonHelper;