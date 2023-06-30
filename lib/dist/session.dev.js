"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withSession;

var _nextIronSession = require("next-iron-session");

function withSession(handler) {
  return (0, _nextIronSession.withIronSession)(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: 'cookie-name',
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      maxAge: 60 * 60 * 24 * 30,
      // 30 days 
      secure: process.env.NODE_ENV === 'production' ? true : false
    }
  });
}