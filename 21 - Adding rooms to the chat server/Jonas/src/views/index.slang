doctype html
html lang="en" dir="ltr"
  head
    meta charset="utf-8"
    meta name="viewport" content="width=device-width,initial-scale=1.0"
    title Awesome chat!
    link href="main.css" rel="stylesheet" type="text/css"
  body
    h1 Awesome chat!
    section#login
      form
        input#name placeholder="username..."
        input type="submit" value="Login"
    section#chat style="display:none"
      section#rooms
        ul
      section#tabs
        ul
      form
        input#msg placeholder="message..."
        input type="submit" value="Send"
    script src="main.js"
