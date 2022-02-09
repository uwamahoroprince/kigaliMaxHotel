const express = require("express");
const res = require("express/lib/response");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/blog", (req, res) => {
  res.render("blog");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/booking-system", (req, res) => {
  res.render("booking-system");
});
app.get("/gallery", (req, res) => {
  res.render("gallery");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/left-sidebar", (req, res) => {
  res.render("left-sidebar");
});
app.get("/rooms-col-1", (req, res) => {
  res.render("rooms-col-1");
});
app.get("/rooms-col-2", (req, res) => {
  res.render("rooms-col-2");
});
app.get("/rooms-col-3", (req, res) => {
  res.render("rooms-col-3");
});
app.get("/rooms-col-4", (req, res) => {
  res.render("rooms-col-4");
});
app.get("/rooms-single", (req, res) => {
  res.render("rooms-single");
});
app.get("/fullwidth", (req, res) => {
  res.render("fullwidth");
});
app.get("/404", (req, res) => {
  res.render("404");
});
app.get("/blog-single", (req, res) => {
  res.render("blog-single");
});
dotenv.config({ path: "./config/config.env" });
app.listen(process.env.PORT || 3000, () => {
  console.log("app running");
});
