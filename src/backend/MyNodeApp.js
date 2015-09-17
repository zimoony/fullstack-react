var React = require("react");

var Express = require('./components/Express.js').Express;
var UseCors = require('./components/UseCors.js').UseCors;
var Get = require('./components/Get.js').Get;

var MyNodeApp = React.createClass({
  port: 9090,
  name: "MyNodeApp",

  render: function() {
    return (
      <Express serveStatic="./build/backend/public" port={this.port} name={this.name} onReady={this.handleReady}>
        <UseCors options={{origin: "*"}} />
        <Get pattern={"/hi"} handler={this.handleHi} />
      </Express>
    );
  },

  handleHi: function(req, res, next) {
    res.send("Hi, i am the server running on localhost:" + this.port);
  },

  handleReady: function() {
    console.log("MyNodeApp ready!!!");
  }
});

exports.MyNodeApp = MyNodeApp;


/*var express = require('express');
var cors = require('cors');

var port = "9090";
var name = "MyNodeApp";

var MyNodeApp = express();

//Middleware
MyNodeApp.use(cors({origin: "*"}));

//MethodHandlers
MyNodeApp.get('/hi', function handleHi(req, res, next) {
  res.send("Hi, i am the server running on localhost:" + port);
});

//Start listening...
MyNodeApp.listen(port, function handleReady() {
  console.log("MyNodeApp ready!!!");
});*/