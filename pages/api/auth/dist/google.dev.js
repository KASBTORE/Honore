"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _google = _interopRequireDefault(require("next-auth/providers/google"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var modifiedGoogleProvider = (0, _google["default"])({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.SECRET_ID,
  authorize: function authorize(credentials, req) {
    var user, api, apiUser, modifiedUser;
    return regeneratorRuntime.async(function authorize$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_google["default"].authorize(credentials, req));

          case 2:
            user = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(fetch("http://localhost:4000/user", {
              method: 'POST',
              body: JSON.stringify({
                username: user.name,
                email: user.email,
                password: "?Dh3444440"
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            }));

          case 5:
            api = _context.sent;
            _context.next = 8;
            return regeneratorRuntime.awrap(api.json());

          case 8:
            apiUser = _context.sent;
            modifiedUser = _objectSpread({}, user, {
              name: apiUser.user.username,
              id: apiUser.user._id
            });
            console.log("this is the modified user from the modified google provider", modifiedUser);
            return _context.abrupt("return", modifiedUser);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    });
  }
});
var _default = modifiedGoogleProvider;
exports["default"] = _default;