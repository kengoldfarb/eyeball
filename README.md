# Eyeball - A Commit History and Code Review Dashboard
<div style="float: right; position: relative; top: 18px;"><img src="http://farm2.staticflickr.com/1204/5135321260_d1794237ec_m.jpg" /></div>

A commit history and code review dashboard using geddyjs, socket.io, and github webhooks

Currently for github projects only

**WARNING: EXPERIMENTAL**

This is still a highly experimental project.  Use at your own risk.

## Installation
1. Install [node.js and npm](http://nodejs.org/download/)
2. Install [Geddy.js](http://geddyjs.org): ```sudo npm install -g geddy```
3. Install [MongoDB](http://docs.mongodb.org/manual/installation/)

## Running the app
From your source directory, if you want to start the app with:

```
geddy -e production -w 1
```

If you just run ```geddy``` it will use the 'development' configuration by default which will run at http://localhost:4014

* Currently this should be run with ONLY 1 WORKER PROCESS.  If you run it with more than 1 you may encounter issues w/ the socket.io connetion
* While this app uses socket.io, it currently **does not** use Websockets.  This is because nginx does not yet support them.  You may have luck getting it to work outside of nginx.  In this case you can edit the transport methods used in ```

## Setting up Github webooks
1. Go to your repo on github.com
2. Choose 'Settings->Service Hooks->Webhook URLs'
3. Enter http://YourServerUrl.com:PORT/commits/githubCallback

* Now, anytime you commit to that repo, you should see a callback come into the server and an event pushed to the front-end via socket.io

## Tests
Unit testing is not yet implemented.  There is a test in test/commit.js that will simulate a github callback to the url of your choice, but that's more for debugging than anything.

To run tests (from the project directory):
```
geddy jake test
```

## Config
There are some config files in the config/ directory including:

* Sample Nginx config
* Script showing the commands used to generate the Geddy models

## Security
### Use at your own risk
There are absolutely no guarantees that anything in this repo is secure.  Security is up to you.  You should look at locking down Mongo, Nginx, etc. before ever using this in a production environment.

### IP addresses used by github for callbacks
https://help.github.com/articles/what-ip-addresses-does-github-use-that-i-should-whitelist

## License
Pretty much...do whatever you want with it:

[GNU General Public License Version 3](http://www.gnu.org/licenses/gpl.html)

## Other Notes
* Eyeball image comes from Flickr: [http://www.flickr.com/photos/bdu/5135321260/in/set-72157625161682985/](http://www.flickr.com/photos/bdu/5135321260/in/set-72157625161682985/)