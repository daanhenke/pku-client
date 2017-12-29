export default class EventEmitter {
    constructor() {
        this.listeners = {};
    }

    on(name, callback) {
        if (!this.listeners.hasOwnProperty(name))
            this.listeners[name] = [];
        this.listeners[name].push(callback);
        return this.listeners.indexOf(callback);
    }

    emit(name, eventData) {
        if (!this.listeners.hasOwnProperty(name))
            return false;

        for (let i in this.listeners[name]) {
            this.listeners[name][i](eventData);
        }

        return true;
    }
}