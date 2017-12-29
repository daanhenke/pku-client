"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Engine = undefined;

var _EventEmitter = require("../Misc/EventEmitter");

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Engine = exports.Engine = function Engine() {
    _classCallCheck(this, Engine);

    this.eventEmitter = new _EventEmitter2.default();
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResourceLoader = exports.ResourceLoader = function ResourceLoader() {
  _classCallCheck(this, ResourceLoader);
};
"use strict";

var _Engine = require("../Engine/Engine");

window.engine = new _Engine.Engine();
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        this.listeners = {};
    }

    _createClass(EventEmitter, [{
        key: "on",
        value: function on(name, callback) {
            if (!this.listeners.hasOwnProperty(name)) this.listeners[name] = [];
            this.listeners[name].push(callback);
            return this.listeners.indexOf(callback);
        }
    }, {
        key: "emit",
        value: function emit(name, eventData) {
            if (!this.listeners.hasOwnProperty(name)) return false;

            for (var i in this.listeners[name]) {
                this.listeners[name][i](eventData);
            }

            return true;
        }
    }]);

    return EventEmitter;
}();

exports.default = EventEmitter;
//# sourceMappingURL=client.js.map
