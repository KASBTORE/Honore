"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = signin;

var _react = require("next-auth/react");

var _mongodb = require("../../lib/mongodb");

function signin(req, res) {
  var _req$body, email, password, _ref, db, user, result;

  return regeneratorRuntime.async(function signin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(req.method);

          if (!(req.method !== 'POST')) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            error: 'Invalid method',
            method: req.method
          }));

        case 3:
          _req$body = req.body, email = _req$body.email, password = _req$body.password; // Fetch user data from MongoDB

          _context.next = 6;
          return regeneratorRuntime.awrap((0, _mongodb.connectToDatabase)());

        case 6:
          _ref = _context.sent;
          db = _ref.db;
          _context.next = 10;
          return regeneratorRuntime.awrap(db.collection('users').findOne({
            email: email
          }));

        case 10:
          user = _context.sent;

          if (!(!user || user.password !== password)) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", res.status(401).json({
            error: 'Invalid credentials'
          }));

        case 13:
          _context.next = 15;
          return regeneratorRuntime.awrap((0, _react.signIn)('credentials', {
            email: email
          }));

        case 15:
          result = _context.sent;
          console.log(result);
          console.log("default");
          return _context.abrupt("return", res.status(200).json(result));

        case 19:
        case "end":
          return _context.stop();
      }
    }
  });
}