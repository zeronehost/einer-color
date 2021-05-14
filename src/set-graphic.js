// import {
//   forEachRight,
//   firstKey
// } from "./utils";

/**
 * @constant 控制字段
 */
 const CSI = "\x1b[";

 /**
  * 设置终端显示样式
  * @param {string} code 样式值
  * @returns {string}
  */
 const sgr = (code) => `${CSI}${code}m`;
 
 sgr.CSI = CSI;
 
 /**
  * @constant 样式
  */
 sgr.mods = Object.assign(
   // 样式
   {
     blod: { _blod: [1, 22] }, // 加粗
     italic: { _italic: [3, 23] }, // 斜体
     underline: { _inderline: [4, 24] }, // 下划线
     blink: { _blink: [5, 25] }, // 闪烁
     inverse: { _inverse: [7, 27] }, // 反色
     strike: { _strike: [9, 29] },
   },
   // 颜色
   [
     "black",
     "red",
     "green",
     "yellow",
     "blue",
     "magenta",
     "cyan",
     "white",
   ].reduce((obj, color, i) => {
     // foreground color
     obj[color] = { _fg: [30 + i, 39] };
     obj[`${color}Bright`] = { _fg: [90 + i, 39] };
     // background color
     obj[`bg${color.replace(/^([a-z])/, (_, s) => s.toUpperCase())}`] = {
       _bg: [40 + i, 49],
     };
     obj[`bg${color.replace(/^([a-z])/, (_, s) => s.toUpperCase())}Bright`] = {
       _bg: [100 + i, 49],
     };
 
     return obj;
   }, {})
 );
 
 // sgr.openers = {};
 // sgr.closers = {};
 
 
 
 // // eslint-disable-next-line no-unused-vars
 // Object.entries(sgr.mods).forEach(([_, mod]) => {
 //   const modPair = mod[firstKey(mod)];
 
 //   sgr.openers[modPair[0]] = modPair;
 //   sgr.closers[modPair[1]] = modPair;
 // });
 
 // sgr.openStyle = (openedMods, code) => {
 //   openedMods.push(sgr.openers[code]);
 // };
 // sgr.closeStyle = (openedMods, code) => {
 //   forEachRight.call(openedMods, (modPair, index) => {
 //     modPair[1] === code && openedMods.splice(index, 1);
 //   });
 // };
 
 // sgr.prepend = (currentMods) => currentMods.map((modPair) => sgr(modPair[0]));
 
 // sgr.complete = (openedMods, closerCodes) => {
 //   closerCodes.forEach((code) => sgr.closeStyle(openedMods, code));
 //   openedMods = openedMods.reverse().map((modPair) => modPair[1]);
 
 //   // TODO
 //   // openedMods =
 // console.log(openedMods);
 //   return openedMods.map(sgr);
 // };
 
 sgr.hasCSI = (str) => str.includes(CSI);
 
 // sgr.extractCode = (csi) => Number(csi.slice(2, -1));
 
 export default sgr;
 