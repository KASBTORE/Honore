"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nextIronSession = require("next-iron-session");

function handler(req, res) {
  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req.session.set('user', {
            name: 'John'
          });
          _context.next = 3;
          return regeneratorRuntime.awrap(req.session.save());

        case 3:
          res.send('Session created');

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

var _default = (0, _nextIronSession.withIronSession)(handler, {
  password: 'your-password',
  cookieName: 'your-cookie-name',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
});

exports["default"] = _default;