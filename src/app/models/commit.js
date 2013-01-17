var Commit = function () {
/*
added: Array[0]
after: "ee53daa4e1898262929a9e83de0d4d119dac5c70"
author: Object
before: "46f6ea6ade4e9196597c0b29cbaa4d7193a667b4"
createdAt: "2013-01-16T09:03:45.279Z"
githubId: "ee53daa4e1898262929a9e83de0d4d119dac5c70"
id: "ee53daa4e1898262929a9e83de0d4d119dac5c70"
message: "test"
ref: "refs/heads/master"
repository: Object
timestamp: "2013-02-18T08:22:35.000Z"
type: "Commit"
url: "https://github.com/kengoldfarb/test-repo/commit/ee53daa4e1898262929a9e83de0d4d119dac5c70"
*/

  this.defineProperties({
    id: {type: 'string'},
    _id: {type: 'string'},
    githubId: {type: 'string'},
    url: {type: 'string'},
    author: {type: 'object'},
    message: {type: 'string'},
    timestamp: {type: 'datetime'},
    added: {type: 'array'},
    before: {type: 'string'},
    after: {type: 'string'},
    ref: {type: 'string'},
    repository: {type: 'object'},
    diff: {type: 'string'},
  });

  /*
  this.property('login', 'string', {required: true});
  this.property('password', 'string', {required: true});
  this.property('lastName', 'string');
  this.property('firstName', 'string');

  this.validatesPresent('login');
  this.validatesFormat('login', /[a-z]+/, {message: 'Subdivisions!'});
  this.validatesLength('login', {min: 3});
  // Use with the name of the other parameter to compare with
  this.validatesConfirmed('password', 'confirmPassword');
  // Use with any function that returns a Boolean
  this.validatesWithFunction('password', function (s) {
      return s.length > 0;
  });

  // Can define methods for instances like this
  this.someMethod = function () {
    // Do some stuff
  };
  */

};

/*
// Can also define them on the prototype
Commit.prototype.someOtherMethod = function () {
  // Do some other stuff
};
// Can also define static methods and properties
Commit.someStaticMethod = function () {
  // Do some other stuff
};
Commit.someStaticProperty = 'YYZ';
*/

Commit = geddy.model.register('Commit', Commit);

