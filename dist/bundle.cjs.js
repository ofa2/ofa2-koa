'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Koa = _interopDefault(require('koa'));

function index () {
  this.Koa = Koa;
  this.app = new Koa();
}

module.exports = index;
//# sourceMappingURL=bundle.cjs.js.map
