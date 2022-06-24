const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

const ejs = require("ejs");

app.set("view engine", "ejs");

var item = "";

var items = ["Buy Food","Cook Food","Eat Food"];

var witems = [];

app.listen(1000,function()
{
    console.log("Listening to the port 1000");
})

app.get("/",function(req,res)
{
    const options = {
        weekday: "long",
        year : "numeric",
        month : "long",
        dayt : "numeric"
      };
      const day = new Date();
    var today = day.toLocaleDateString("en-US", options);
    res.render("list",{kindOfDay : today, newitems : items});
})
app.post("/",function(req,res)
{
    item = req.body.item;
    items.push(item);
    res.redirect("/");
})
app.get("/work",function(req,res)
{
    res.render("work",{workitems : witems});
})

app.post("/work",function(req,res)
{
    var witem = req.body.witem;
    witems.push(witem);
    res.redirect("/work");
})