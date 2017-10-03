import createHistory from 'history/createBrowserHistory';

class HistoryManager {
  constructor() {
    this.history = createHistory();
    this.routeListeners = {};
    this.routeToPush = '';
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}-${s4()}-${s4()}`;
  }

  addRouteListener(callbackObjects) {
    const id = this.guid();
    this.routeListeners[id] = callbackObjects;
  }

  removeRouteListener(id) {
    this.routeListeners[id] = null;
  }

  removeCurrentRoute() {
    const keys = Object.keys(this.routeListeners);
    for (let i = 0; i < keys.length; i++) {
      const listener = this.routeListeners[keys[i]];
      if (typeof listener.removeCurrentRoute === 'function') {
        listener.removeCurrentRoute();
      }
    }
  }

  finishRouteTransition() {
    this.history.push(this.routeToPush);
    const keys = Object.keys(this.routeListeners);
    for (let i = 0; i < keys.length; i++) {
      const listener = this.routeListeners[keys[i]];
      if (typeof listener.finishRouteTransition === 'function') {
        listener.pushRoute();
      }
    }
    this.routeToPush = '';
  }

  pushRoute(route) {
    this.routeToPush = route;
    const keys = Object.keys(this.routeListeners);
    for (let i = 0; i < keys.length; i++) {
      const listener = this.routeListeners[keys[i]];
      if (typeof listener.pushRoute === 'function') {
        listener.pushRoute();
      }
    }
  }
}

export default new HistoryManager();
