import Koa from 'koa';

export default function () {
  this.Koa = Koa;
  this.app = new Koa();
}
