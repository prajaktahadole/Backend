//way2

const express = require("express");

const app = express();

app.use(logger); 


app.get("/users", logger, logger, logger, (req, res) => {      ///here logger function is add as an argument , this logger argument only work for this get users function
                                                                // we can add one or more same or differnt middleware inside the function
  return res.send({ route: "/users", role: req.role });
});

app.get("/students", (req, res) => {
  return res.send({ route: "/students", role: req.role });
});

app.get("/admin", (req, res) => {
  return res.send({ route: "/admin", role: req.role });
});


function logger(req, res, next) {
  if (req.path === "/users") {  // what ever u put in req handler i.e req.path it is same as request put in route handlwer i.e on line no 10
    req.role = "user";
  } else if (req.path === "/admin") {
    req.role = "admin";             //basically here doing something to request object and that request object use inside the route handle lly used in real world senario
  } else {
    req.role = "somebody";
  }
  console.log("called");
  next();
}




///////////*********//////

app.get("/products", loggedIn("seller"), (req, res) => {
    return res.send("Yes you can get the product");
  });
  
  function loggedIn(role) {
    return function logger(req, res, next) {
      if (role === "seller") {
        return next();
      }
      return res.send("Not allowed");
    };
  }






app.listen(5000, () => {
  console.log("listening on port 5000");
});