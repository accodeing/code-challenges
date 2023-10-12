"use strict"

const Koa = require("koa")
const Router = require("@koa/router")
const serve = require("koa-static");
const render = require("koa-ejs")
const bodyParser = require("koa-bodyparser");
const path = require("path")

const app = new Koa()
const router = new Router()

let todos = []

todos.push({
  id: 1,
  task: "Rake the yard.",
  done: false,
})

todos.push({
  id: 2,
  task: "Buy milk.",
  done: true,
})

render(app, {
  root: path.join(__dirname, "views"),
  layout: false,
  viewExt: "html",
  cache: false,
  debug: true,
})

router.get("koa-example", "/", (ctx) => {
  return ctx.render("index", { todos });
});

router.patch("/todos/:id/done", (ctx) => {
  const id = parseInt(ctx.params.id)
  const index = todos.findIndex(todo => todo.id === id)

  if (index !== -1) {
    const todo = todos[index]
    todo.done = !todo.done
    todos[index] = todo
  }

  return ctx.render("todos", { todos })
})

router.post("koa-example", "/todos", (ctx) => {
  const data = ctx.request.body
  const todo = {
    ...data,
    done: false,
    id: todos.length + 1,
  }

  todos.push(todo)

  console.log("----")
  console.log(todos)
  console.log("----")

  return ctx.render("todos", { todos })
})

app.use(bodyParser())

app.use(serve(path.join(__dirname, "/public")))

app.use(router.routes()).use(router.allowedMethods())

app.listen(1234)
