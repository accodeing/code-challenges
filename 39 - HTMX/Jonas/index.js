"use strict";

const Koa = require("koa");
const Router = require("@koa/router");
const serve = require("koa-static");
const render = require("koa-ejs");
const bodyParser = require("koa-bodyparser");
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
  layout: false,
  viewExt: "html",
  cache: false,
  debug: true,
});

router.get("koa-example", "/", (ctx) => {
  return ctx.render("index", { todos });
});

router.get("koa-example", "/todos", (ctx) => {
  return ctx.render("todos", { todos });
});

router.post("koa-example", "/todos", (ctx) => {
  todos.push({
    ...ctx.request.body,
  });
  console.log("----");
  console.log(todos);
  console.log("----");
  return ctx.render("todos", { todos });
});

app.use(bodyParser());

app.use(serve(path.join(__dirname, "/public")));

app.use(router.routes()).use(router.allowedMethods());

app.listen(1234);
