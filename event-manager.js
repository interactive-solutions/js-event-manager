/**
 * @author Erik Norgren <erik.norgren@interactivesolutions.se>
 *
 * @copyright Interactive Solutions
 */
"use strict";
/**
 * Different callback types
 */
var CallbackType;
(function (CallbackType) {
    CallbackType[CallbackType["ONCE"] = 0] = "ONCE";
    CallbackType[CallbackType["CONTINUOUS"] = 1] = "CONTINUOUS";
})(CallbackType || (CallbackType = {}));
/**
 * Wraps a callback function and associates it with a callback type and id
 */
var Callback = (function () {
    function Callback(_id, _callback, _type) {
        this._id = _id;
        this._callback = _callback;
        this._type = _type;
    }
    Object.defineProperty(Callback.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Callback.prototype, "callback", {
        get: function () {
            return this._callback;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Callback.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    return Callback;
}());
/**
 * Event manager
 */
var EventManager = (function () {
    function EventManager() {
        this.counter = 0;
        this.events = {};
    }
    EventManager.prototype.attach = function (event, callback) {
        if (this.events[event] === undefined) {
            this.events[event] = [];
        }
        var id = this.counter;
        this.events[event][id] = new Callback(id, callback, CallbackType.CONTINUOUS);
        // If everything worked without errors, increment counter
        this.counter++;
        return id;
    };
    EventManager.prototype.once = function (event, callback) {
        if (this.events[event] === undefined) {
            this.events[event] = [];
        }
        var id = this.counter;
        this.events[event][id] = new Callback(id, callback, CallbackType.ONCE);
        // If everything worked without errors, increment counter
        this.counter++;
        return id;
    };
    EventManager.prototype.detach = function (event, id) {
        delete this.events[event][id];
    };
    EventManager.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var callbacks = this.events[event];
        for (var id in callbacks) {
            if (!callbacks.hasOwnProperty(id)) {
                continue;
            }
            var callback = callbacks[id];
            callback.callback.apply(callback, args);
            if (callback.type === CallbackType.ONCE) {
                this.detach(event, callback.id);
            }
        }
    };
    return EventManager;
}());
exports.EventManager = EventManager;
