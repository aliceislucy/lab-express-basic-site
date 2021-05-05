const express = require("express");
const hbs = require("hbs");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.get("/", (request, response) => {
  response.render("home.hbs", {
    title: "",
    name: "Dolly",
    lastName: "Parton",
    occupation: []
  });
});

app.get("/about", (request, response) => {
  response.render("about.hbs", {
    title: "about",
    awards: ["Top Vocal Group", "Entertainer of the Year", "Top Female Vocalist", "Single Record of the Year", "Top Vocal Duet", "Album of the Year", "Cliff Stone Pioneer Award", "Jim Reeves International Award", "Country Star of the Year", "Best Bluegrass Album", "Country Award"],
    
  });
});

app.get("/work", (request, response) => {
  response.render("work.hbs", {
    title : "work",

  });
});

app.listen(3000);
