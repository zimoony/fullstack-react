fullstack-react
=====================

## Warning! This is very experimental! Definitely for discussions only - please do not use this in production ;)

I love React! The way it abstracts components, its ability to compose them and its simplicity when using it via JSX! Well defined React components provide a simple API via props for configuration. 

Thinking in terms of UI, with React we can easily compose an user interface using JSX. Now, what about having the same approach when we want to build a server architecture - NOT UI?

In React, a component acts like a function returning UI via the render method. Why not having a JSX component returning a certain service or functionality? A server side component also has a similar lifecycle and a certain state. When the state changes it might result in a different behavior of the service.

#### Example

So, what about defining server side Express component using "The React Style" - or better JSX, like this:

```xml
 <Express port="9090" name="MyServer" serveStatic="./public" />
```

or even a more complicated structure composing child components defining used middleware and other handy things, like:

```xml
 <Express port="9090" name="MyServer" serveStatic="./public">
    <UseCompression options={{level: 1}} />
    <UseMorgan format="combined" options={{immediate: true}} />
    <UseCors options={{origin: '*'}} />
    <Get pattern="/rest/:collection/:id" handler={ function(req,res,next) { /*do something...*/ } } />
    ...
 </Express>
```

### Intention

With this approach we could end up in a kind of fullstack React development experience. Think not only of Express, it could be anything like it. 
  
### Normal vs. JSX 

Comparing the 'normal' and the 'react' or 'JSX' way we have something like this:

#### without JSX
```javascript
var express = require('express');
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
});
```
 
This code we know, right? Our express server gets middleware attached to it. We handle gets, posts, deletes etc. with a bunch of inline written handler functions.

#### with JSX
```javascript
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
```
Using JSX we have the same server architecture described in 4 lines of code. Middleware and method handlers a now defined as child components of the main Express component.

### Pros and Cons
 
In my opinion the JSX way is much clearer when it comes to read or design an server architicture. Your are kind of forced to separate handler functions in two areas as we are used to when designing UI with React.
 
Of course the drawback is that we need wrapper components for certain functionality. But actually it is very easy to do that since they just push forward props as parameters. 

### Outlook

This idea might be a bit weird in the first place, but think about it! A pool of components either being front-end components (using the existing "render" method) or back-end components (using a "serve" method, since rendering is not really needed).

It could be very easy to code a certain functionality and provide it as a React class in which props are used to configure it. 

I would love to discuss with you this approach and a way to extend/fork react in order to have a "serve" method! Maybe additional lifecyle methods like componentWillStart, componentDidStart, componentWillStop, componentDidStop etc. A way how to handle state changes etc.  

### Resources

I used gaearon's react-hot-boilerplate in order to start things quickly
* [react-hot-boilerplate on Github](https://github.com/gaearon/react-hot-boilerplate)
