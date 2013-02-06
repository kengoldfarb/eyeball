var config = {
    detailedErrors: true, 
    debug: true, 
    hostname: 'localhost', 
    port: 4014, 
    clientFullHostname: 'http://localhost:4014',
    saveModelsToDb: true,
    model: {
        defaultAdapter: 'mongo'
    }, 
    db: {
        mongo: {
            dbname: 'commitdashboard',
            port: 27017,
            host: 'localhost'
        }
    },
    sessions: {
        store: 'memory'
        , 
        key: 'sid'
        , 
        expiry: 14 * 24 * 60 * 60
    },
    github: {
        useAuthentication: false, // Whether or not to authenticate with github.  Only necessary for private repos
        username: 'your_github_username',
        password: 'your_github_password'
    }
};

module.exports = config;