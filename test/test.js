var request = require("supertest");
var app = require("../index.js");

describe("GET /", () => {
  it("respond with hey world", done => {
    request(app)
      .get("/")
      .expect("hey world")
      .end(done);
  });
});
