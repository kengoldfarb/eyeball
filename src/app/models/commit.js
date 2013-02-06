var Commit = function () {
  this.defineProperties({
    id: {type: 'string'},
    _id: {type: 'string'},

    // Data from just callback
    githubId: {type: 'string'},
    url: {type: 'string'},
    message: {type: 'string'},
    timestamp: {type: 'datetime'},
    added: {type: 'array'},
    before: {type: 'string'},
    after: {type: 'string'},
    ref: {type: 'string'},

    // From api calls
    stats: {type: 'object'},
    url: {type: 'string'},
    sha: {type: 'string'},
    comments_url: {type: 'object'},
    committer: {type: 'object'},
    author: {type: 'object'},
    parents: {type: 'array'},
    commit: {type: 'object'},
    files: {type: 'array'}
  });
};

Commit = geddy.model.register('Commit', Commit);

