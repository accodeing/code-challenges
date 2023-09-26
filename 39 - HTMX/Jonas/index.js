"use strict";

const fs = require("fs").promises;
const Koa = require("koa");
const Router = require("@koa/router");
const serve = require("koa-static");
const render = require("koa-ejs");
const bodyParser = require("koa-bodyparser");
const path = require("path");

const app = new Koa();
const router = new Router();

async function readTodosFromFile() {
  try {
    const data = await fs.readFile("todos.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading todos:", err);
    return [];
  }
}

async function writeTodosToFile(todos) {
  try {
    await fs.writeFile("todos.json", JSON.stringify(todos, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing todos:", err);
  }
}

let todos;

const order_todos = () => {
  const done = todos.filter((todo) => todo.done);
  const ramaining = todos.filter((todo) => !todo.done);
  todos = [...ramaining, ...done];
};

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

router.post("koa-example", "/todos/:index", async (ctx) => {
  todos[ctx.params.index].done = !todos[ctx.params.index].done;

  order_todos();

  await writeTodosToFile(todos);

  return ctx.render("todos", { todos });
});

router.post("koa-example", "/todos", async (ctx) => {
  todos.push({
    ...ctx.request.body,
    done: false,
  });

  order_todos();

  await writeTodosToFile(todos);

  return ctx.render("todos", { todos });
});

app.use(bodyParser());

app.use(serve(path.join(__dirname, "/public")));

app.use(router.routes()).use(router.allowedMethods());

async function main() {
  todos = await readTodosFromFile();

  console.log("Server starting on http://localhost:1234");

  app.listen(1234);
}

main();
