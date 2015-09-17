var React = require("react");
var MyNodeApp = require("./MyNodeApp.js").MyNodeApp;

var ReactServerApp = React.createFactory(MyNodeApp);

//Hack in order to execute the render chain - should be implicit
React.renderToString(ReactServerApp({ onReady: function onReady() {
  console.log("MyNodeApp ready!!!");
}}));


