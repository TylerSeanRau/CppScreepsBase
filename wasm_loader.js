/*
  * This file was copied from https://github.com/screepers/cppreeps and they
  * retain the copyright under that repo's MIT License.
  *
  * MIT License
  *
  * Copyright (c) 2017
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy
  * of this software and associated documentation files (the "Software"), to deal
  * in the Software without restriction, including without limitation the rights
  * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  * copies of the Software, and to permit persons to whom the Software is
  * furnished to do so, subject to the following conditions:
  *
  * The above copyright notice and this permission notice shall be included in all
  * copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  * OUT OF OR IN CONNECTION
*/

'use strict';

module.exports = ((mod_js, mod_wasm, opts) => {
    
    const mod_file = require(mod_js);
    const bin_file = require(mod_wasm);
    
    opts = opts || {};
    
    opts.ENVIRONMENT = 'SHELL';
    
    opts.wasmBinary = bin_file;
    opts.print      = opts.print    || ((text) => console.log(`[STDOUT]: ${text}`));
    opts.printErr   = opts.printErr || ((text) => console.log(`[STDERR]: ${text}`));
    opts.onAbort    = opts.onAbort  || (() => console.log(`[ABORT]: WASM Aborted!`));
    
    // == don't call main()
    if(typeof opts.noInitialRun === "undefined")
        opts.noInitialRun = true;
    
    // == don't terminate after returning from main()
    if(typeof opts.noExitRuntime === "undefined")
        opts.noExitRuntime = true;
    
    return mod_file(opts);
});
