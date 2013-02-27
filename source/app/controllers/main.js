/*
 * Geddy JavaScript Web development framework
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

var Main = function () {
  // Example of getting info on a commit
  this.index = function (req, resp, params) {
    this.respond(params, {
      format: 'html'
    , template: 'app/views/main/index'
    });
    return;


  	var self = this,
  		github = require('../helpers/github_helper'),
      patchToHtml = require('../helpers/patch_to_html');

      patchToHtml.convert('@@ -1,9 +1,15 @@\n testing....\n-...\n+change 1\n \n-yay\n+change 2\n \n changed a line\n \n       \n-added this line\n\\ No newline at end of file\n+added this line\n+\n+add 1\n+\n+add 2\n+\n+add 3\n\\ No newline at end of file');
      // var Convert = require('ansi-to-html');


      self.respond('hello', {
        format: 'txt'
      });

  // var convert = new Convert()
  //@@ -3,6 +3,7 @@ testing....\n \n yay\n \n-testing some more...\n+changed a line\n \n-      \n\\ No newline at end of file\n+      \n+added this line\n\\ No newline at end of file
  // @@ -1,9 +1,15 @@\n testing....\n-...\n+change 1\n \n-yay\n+change 2\n \n changed a line\n \n       \n-added this line\n\\ No newline at end of file\n+added this line\n+\n+add 1\n+\n+add 2\n+\n+add 3\n\\ No newline at end of file
  // console.log(convert.toHtml('@@ -5,4 +5,4 @@ yay\n \n testing some more...\n \n-     \n\\ No newline at end of file\n+      \n\\ No newline at end of file'));

    // var exec = require('child_process').exec;
    // //./ansi2html.sh '@@ -5,4 +5,4 @@ yay\n \n testing some more...\n \n-     \n\\ No newline at end of file\n+      \n\\ No newline at end of file'
    // exec('bash scripts/ansi2html.sh ' + '"@@ -5,4 +5,4 @@ yay\n \n testing some more...\n \n-     \n\\ No newline at end of file\n+      \n\\ No newline at end of file"', function(error, stdout, stderr) {
    //   console.log(stdout);
    // });

  	var params = {
	  	user: 'kengoldfarb',
	    repo: 'eyeball',
	    sha: 'e1a4edbb1eead350a5a8a81560ae5865af945ca4'
	};
  	github.getCommitInfo(params, function(err, commit){
  		if(err){
  			self.respond('ERROR!', {
		      format: 'txt'
		    });
  		}

  		// console.log('All done!');
  		// console.log(commit);

  		self.respond('hello', {
	      format: 'txt'
	    });
  	});
  };
};

exports.Main = Main;


