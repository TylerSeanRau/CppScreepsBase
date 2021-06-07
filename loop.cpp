/* file loop.cpp */

#include <emscripten.h>
#include <emscripten/bind.h>
#include <emscripten/val.h>

#include <cstdio>

extern "C" void loop(void)
{
  std::printf("life\n");

  emscripten::val Game = emscripten::val::global("Game");
  emscripten::val Memory = emscripten::val::global("Memory");
  emscripten::val RawMemory = emscripten::val::global("RawMemory");
  emscripten::val PathFinder = emscripten::val::global("PathFinder");

  if(Memory["something"].as<bool>())
    Memory.set("something", Memory["something"].as<int>() + 1);
  else
    Memory.set("something", 1);

  emscripten::val parts = emscripten::val::array();
  parts.set(0, emscripten::val::global("cMOVE"));
  Memory.set("parts", parts);
  Game.spawns.Spawn1.spawnCreep([MOVE], 'asdf');
  int ret = Game["spawns"]["Spawn1"].call<int>("spawnCreep", parts, std::string{"jim"});
  std::printf("%d\n", ret);
}
