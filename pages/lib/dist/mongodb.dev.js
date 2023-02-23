"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectToDatabase = connectToDatabase;

var _mongodb = require("mongodb");

var uri = process.env.MONGODB_URI;

function connectToDatabase() {
  var client, db;
  return regeneratorRuntime.async(function connectToDatabase$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_mongodb.MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }));

        case 2:
          client = _context.sent;
          db = client.db();
          return _context.abrupt("return", {
            db: db,
            client: client
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}