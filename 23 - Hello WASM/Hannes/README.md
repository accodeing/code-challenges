# Hello WASM
This code is halfway finished. You can run the `hello.html` page and get the "Hello world!" output there. But I have not managed to import the `wasm` file into my own html file.

## Compile
You need the emsdk to compile this program. I followed the instructions on https://webassembly.org/getting-started/developers-guide/. Then I run the `source` command in the terminal that I wanted to compile in, so something like `source /path-to-sdk/emsdk_env.sh --build=Release`.

## Run
`emrun --no_browser --port 8080 hello.html`. For `emrun`, se instructions in "Compile" above.

## Links
Found this page which was helpful in resolving the problem with buffers larger than 4 KB: https://developers.google.com/web/updates/2018/04/loading-wasm
