const assert = require("assert");

const clc = require("..");

assert.strictEqual(clc.black("einer-color"), "\x1B[30meiner-color\x1B[39m");
assert.strictEqual(clc.red("einer-color"), "\x1B[31meiner-color\x1B[39m");
assert.strictEqual(clc.green("einer-color"), "\x1B[32meiner-color\x1B[39m");
assert.strictEqual(clc.yellow("einer-color"), "\x1B[33meiner-color\x1B[39m");
assert.strictEqual(clc.blue("einer-color"), "\x1B[34meiner-color\x1B[39m");
assert.strictEqual(clc.magenta("einer-color"), "\x1B[35meiner-color\x1B[39m");
assert.strictEqual(clc.cyan("einer-color"), "\x1B[36meiner-color\x1B[39m");
assert.strictEqual(clc.white("einer-color"), "\x1B[37meiner-color\x1B[39m");

assert.strictEqual(clc.bgBlack("einer-color"), "\x1B[37m\x1B[40meiner-color\x1B[49m\x1B[39m");
assert.strictEqual(clc.bgRed("einer-color"), "\x1B[37m\x1B[41meiner-color\x1B[49m\x1B[39m");
assert.strictEqual(clc.bgGreen("einer-color"), "\x1B[37m\x1B[42meiner-color\x1B[49m\x1B[39m");
assert.strictEqual(clc.bgYellow("einer-color"), "\x1B[37m\x1B[43meiner-color\x1B[49m\x1B[39m");
assert.strictEqual(clc.bgBlue("einer-color"), "\x1B[37m\x1B[44meiner-color\x1B[49m\x1B[39m");
assert.strictEqual(clc.bgMagenta("einer-color"), "\x1B[37m\x1B[45meiner-color\x1B[49m\x1B[39m");
assert.strictEqual(clc.bgCyan("einer-color"), "\x1B[37m\x1B[46meiner-color\x1B[49m\x1B[39m");
assert.strictEqual(clc.bgWhite("einer-color"), "\x1B[37m\x1B[47meiner-color\x1B[49m\x1B[39m");

