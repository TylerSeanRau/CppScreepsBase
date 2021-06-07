all: loop.wasm loop_js.js

loop.wasm loop_js.js:
	em++                                \
    --std=c++17                     \
    --bind                          \
    -s WASM=1                       \
    -s MODULARIZE=1                 \
    -s ALLOW_MEMORY_GROWTH=1        \
    -s WASM_ASYNC_COMPILATION=0     \
    -s BINARYEN_ASYNC_COMPILATION=0 \
    -s EXPORTED_FUNCTIONS='["_loop"]' \
    -s "EXPORTED_RUNTIME_METHODS=['ccall']" \
    -s ENVIRONMENT=shell            \
    -Iinclude -Ilib                 \
    -O3 -Wall -pedantic             \
    	loop.cpp                			\
    -o loop.js && mv loop.js loop_js.js
