"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../../models"));

var BookService =
/*#__PURE__*/
function () {
  function BookService() {
    (0, _classCallCheck2["default"])(this, BookService);
  }

  (0, _createClass2["default"])(BookService, null, [{
    key: "getAllBooks",
    value: function () {
      var _getAllBooks = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].Book.findAll();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function getAllBooks() {
        return _getAllBooks.apply(this, arguments);
      }

      return getAllBooks;
    }()
  }, {
    key: "addBook",
    value: function () {
      var _addBook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(newBook) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].Book.create(newBook);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function addBook(_x) {
        return _addBook.apply(this, arguments);
      }

      return addBook;
    }()
  }, {
    key: "updateBook",
    value: function () {
      var _updateBook2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(id, _updateBook) {
        var bookToUpdate;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _models["default"].Book.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                bookToUpdate = _context3.sent;

                if (!bookToUpdate) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 7;
                return _models["default"].Book.update(_updateBook, {
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                return _context3.abrupt("return", _updateBook);

              case 8:
                return _context3.abrupt("return", null);

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }));

      function updateBook(_x2, _x3) {
        return _updateBook2.apply(this, arguments);
      }

      return updateBook;
    }()
  }, {
    key: "deleteBook",
    value: function () {
      var _deleteBook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(id) {
        var bookToDelete, deletedBook;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _models["default"].Book.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                bookToDelete = _context4.sent;

                if (!bookToDelete) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 7;
                return _models["default"].Book.destroy({
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                deletedBook = _context4.sent;
                return _context4.abrupt("return", deletedBook);

              case 9:
                return _context4.abrupt("return", null);

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 12]]);
      }));

      function deleteBook(_x4) {
        return _deleteBook.apply(this, arguments);
      }

      return deleteBook;
    }()
  }, {
    key: "getBook",
    value: function () {
      var _getBook = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(id) {
        var bookToFind;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _models["default"].Book.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                bookToFind = _context5.sent;

                if (!bookToFind) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return", bookToFind);

              case 6:
                return _context5.abrupt("return", null);

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }));

      function getBook(_x5) {
        return _getBook.apply(this, arguments);
      }

      return getBook;
    }()
  }]);
  return BookService;
}();

var _default = BookService;
exports["default"] = _default;
//# sourceMappingURL=BookService.js.map