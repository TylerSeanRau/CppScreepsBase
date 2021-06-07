'use strict';

const wasm_loader = require('wasm_loader')

/// Module by XXX.js and XXX.wasm files
const mod = wasm_loader('loop_js', 'loop');

global.Game = Game;
global.Memory = Memory;
global.RawMemory = RawMemory;
global.PathFinder = PathFinder;
global.cMOVE = MOVE;

module.exports.loop = function(){
    let t = Game.cpu.getUsed();
    mod.ccall('loop');
    let dt = Game.cpu.getUsed() - t;
    console.log(`Preload = ${t} CPU`);
    console.log(`Loop = ${dt} CPU`);
}
