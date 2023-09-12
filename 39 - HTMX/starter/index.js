"use strict";

const Koa = require("koa");
const Router = require("@koa/router");
const render = require("koa-ejs");
const path = require("path");

const app = new Koa();
const router = new Router();

let todos = [];

todos.push({
  task: "Rake the yard.",
  done: false,
});

render(app, {
  root: path.join(__dirname, "views"),
  layout: "index",
  viewExt: "html",
  cache: false,
  debug: true,
});

router.get("koa-example", "/", (ctx) => {
  return ctx.render("index", {
    todos: todos,
  });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(1234);
