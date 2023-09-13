const express = require('express');
const asyncHandler = require('express-async-handler');
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); //Import routes for "catalog" area of site



const app = express();

app.use(express.json());
//declare your routes/ middlewares here
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/catalog", catalogRouter); // Add catalog routes to middleware chain.


module.exports = app