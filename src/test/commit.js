var assert = require('assert'),
	tests,
	Commit = geddy.model.Commit;//,
	// CommitsController = geddy.controller.Commits;

var testData = { method: 'POST',
  controller: 'Commits',
  action: 'githubCallback',
  payload: '{"hook_callpath":"new","pusher":{"name":"kengoldfarb","email":"ken@kengoldfarb.com"},"repository":{"name":"test-repo","size":112,"has_wiki":true,"created_at":"2013-01-15T21:57:22-08:00","private":false,"watchers":0,"url":"https://github.com/kengoldfarb/test-repo","fork":false,"id":7640181,"pushed_at":"2013-01-16T00:22:43-08:00","open_issues":0,"has_downloads":true,"has_issues":true,"stargazers":0,"description":"testing stuff","forks":0,"owner":{"name":"kengoldfarb","email":"ken@kengoldfarb.com"}},"forced":false,"head_commit":{"added":[],"modified":["README.md"],"timestamp":"2013-01-16T00:22:35-08:00","removed":[],"author":{"name":"Ken","username":"kengoldfarb","email":"kgoldfarb@cpbgroup.com"},"url":"https://github.com/kengoldfarb/test-repo/commit/ee53daa4e1898262929a9e83de0d4d119dac5c70","id":"ee53daa4e1898262929a9e83de0d4d119dac5c70","distinct":true,"message":"test","committer":{"name":"Ken","username":"kengoldfarb","email":"kgoldfarb@cpbgroup.com"}},"after":"ee53daa4e1898262929a9e83de0d4d119dac5c70","deleted":false,"ref":"refs/heads/master","commits":[{"added":[],"modified":["README.md"],"timestamp":"2013-01-16T00:22:35-08:00","removed":[],"author":{"name":"Ken","username":"kengoldfarb","email":"kgoldfarb@cpbgroup.com"},"url":"https://github.com/kengoldfarb/test-repo/commit/ee53daa4e1898262929a9e83de0d4d119dac5c70","id":"ee53daa4e1898262929a9e83de0d4d119dac5c70","distinct":true,"message":"test","committer":{"name":"Ken","username":"kengoldfarb","email":"kgoldfarb@cpbgroup.com"}}],"before":"46f6ea6ade4e9196597c0b29cbaa4d7193a667b4","compare":"https://github.com/kengoldfarb/test-repo/compare/46f6ea6ade4e...ee53daa4e189","created":false}' };

var thePayload = {"hook_callpath":"new","pusher":{"name":"kengoldfarb","email":"ken@kengoldfarb.com"},"repository":{"name":"test-repo","size":112,"has_wiki":true,"created_at":"2013-01-15T21:57:22-08:00","private":false,"watchers":0,"url":"https://github.com/kengoldfarb/test-repo","fork":false,"id":7640181,"pushed_at":"2013-01-16T00:22:43-08:00","open_issues":0,"has_downloads":true,"has_issues":true,"stargazers":0,"description":"testing stuff","forks":0,"owner":{"name":"kengoldfarb","email":"ken@kengoldfarb.com"}},"forced":false,"head_commit":{"added":[],"modified":["README.md"],"timestamp":"2013-01-16T00:22:35-08:00","removed":[],"author":{"name":"Ken","username":"kengoldfarb","email":"kgoldfarb@cpbgroup.com"},"url":"https://github.com/kengoldfarb/test-repo/commit/ee53daa4e1898262929a9e83de0d4d119dac5c70","id":"ee53daa4e1898262929a9e83de0d4d119dac5c70","distinct":true,"message":"test","committer":{"name":"Ken","username":"kengoldfarb","email":"kgoldfarb@cpbgroup.com"}},"after":"ee53daa4e1898262929a9e83de0d4d119dac5c70","deleted":false,"ref":"refs/heads/master","commits":[{"added":[],"modified":["README.md"],"timestamp":"2013-01-16T00:22:35-08:00","removed":[],"author":{"name":"Ken","username":"kengoldfarb","email":"kgoldfarb@cpbgroup.com"},"url":"https://github.com/kengoldfarb/test-repo/commit/ee53daa4e1898262929a9e83de0d4d119dac5c70","id":"ee53daa4e1898262929a9e83de0d4d119dac5c70","distinct":true,"message":"test","committer":{"name":"Ken","username":"kengoldfarb","email":"kgoldfarb@cpbgroup.com"}}],"before":"46f6ea6ade4e9196597c0b29cbaa4d7193a667b4","compare":"https://github.com/kengoldfarb/test-repo/compare/46f6ea6ade4e...ee53daa4e189","created":false};  

tests = {
	'Testing some random stuff...': function() {
		var request = require('request');
		// request.post('http://localhost:4014/commits/githubCallback', testData);
		// var commits = geddy.helpers.GithubJsonHelper.jsonToCommits(testData);
		// console.log(commits);
		// request.post('http://localhost:4014/commits/githubCallback', {form:{commits:commits}});


    // request.post('http://localhost:4014/commits/githubCallback', {form:{payload:JSON.stringify(thePayload)}});
		
		return;
		// assert.equal(true, false);
		for(var i in geddy){
			console.log(i);
		}

		var commitsController = require('../app/controllers/commits.js');

		console.log(commitsController);
		var req = {},
			resp = {},
			params = {
				'a': 'test'
			};

		var result = commitsController.githubCallback(req, resp, params);
		console.log('RESULT:');
		console.log(result);
	}

};

module.exports = tests;