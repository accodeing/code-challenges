"use strict";

const Koa = require("koa");
const Router = require("@koa/router");
const render = require("koa-ejs");
const path = require("path");

const app = new Koa();
const router = new Router();
const bodyParser = require("koa-bodyparser");
const { koaBody } = require("koa-body");
app.use(bodyParser());

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
  return ctx.render("index", {
    todos: todos,
  });
});

router.post("koa-example", "/", (ctx) => {
  const todo = {
    task: ctx.request.body.task,
    done: false,
  };
  todos.push(todo);

  return ctx.render("todoInserted", {
    todo,
  });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(1234);
