var request = require("supertest");
var app = require("../index.js");

it("respond with hello world", done => {
  request(app)
    .get("/")
    .expect("hello world", done);
});
