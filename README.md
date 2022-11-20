# Local-Remote Project

A template for creating a sophisticated web app with two minimal local files (html and js), which utilize a remote application providing most of the behavior.

# Why

This type of project is very useful in instances where only a small amount of behavior needs to be exposed locally. For example, introductory projects for students learning CS. By exposing just a minimal HTML file and a JS file that provides some specific behavior, exercises can be created which provide interesting behavior but expose only two files. This is very useful for young students who can easily become confused sorting through the full set of files that would make up a sophisticated project. Furthermore, because only two small files (html and js) are exposed locally, projects created using this approach can easily be run using online coding environments like Stackblitz, JSFiddle, REPLIT, or CodePen.

For example see the [face-decoration](https://github.com/albertpatterson/face-decoration) code, or [try it on Stackblitz](https://stackblitz.com/edit/web-platform-ntaf41?file=code.js)

# How to Use

1. Clone this repo
1. Update the following properties in package.json
   - "remoteUrl" set to the url at which the remote app will be deployed (can be done later)
   - "localTitle" set to the title of the local app
1. Run `npm start` to run the dev server
1. Create an initial version of the user's code in local/src/code.js
1. Define how requests (from the remote application) are processed in local/src/process_data.js

   - Processing of the requests should utilize the user's code from step #2
   - Requests will be of type `MessageEvent<T>` and will have a "data" property of type T containing the data from the remote app

1. Code the remote app in the remote/src folder

   - The remote app should utilize the sendRequest funtion in remote/src/util/requests to communicate with the local app

1. Run `npm run build` to build both the local and remote apps
1. Deploy the remote app.
