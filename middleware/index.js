//way1

const express = require("express");  //it exicute line by line1

const app = express();              //exicute line2

app.use(logger);                     //exicute line3
// logger()-calling funtion, logger- passing function it will give object inside the function
// use tell us logger is the middleware
//here no need to call this logger function, this use function automatically run/calls the function
// basically use run it like a middleware  otherwise it will not work like a middleware
 

app.get("/users", (req, res) => {       //line5 if method and route match it send the response else go to the next student and check (video 40 min)
    return res.send({ route: "/users"});
  });


app.get("/students", (req, res) => {        //line6
  return res.send({ route: "/students"});
});


function logger(req, res, next) {      // //exicute line4
    console.log("before route handler");            

  next();   // next function go back to the next line after logger function call i.e line5, it told middleware code is over
}

app.listen(5000, () => {
  console.log("listening on port 5000");
});




