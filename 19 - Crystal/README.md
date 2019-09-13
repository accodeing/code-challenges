# The crystal challenge

Take the HTTP server example from https://crystal-lang.org/reference/overview/http_server.html get it into a multi step Alpine linux image that builds a statically linked executable in the first step and then sets up the resulting executable as the HTTP server in the second step.

The resulting image should respond to calls in some HTTP port and return the "Hello World" message from the example.
