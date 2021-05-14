import { enableColor } from "./enable-color";
import { d, d_gs } from "./utils";

import sgr from "./set-graphic";
import reset from "./reset";

const getEndRe = (code) => new RegExp(`\x1b\\[${code}m`, "g");

const render = function (...args) {
  let msg = args.join(" ");
  const hasAnsi = sgr.hasCSI(msg);
  let start = "",
    end = "";
  const conf = render._color;
  Object.entries(conf).forEach(([key, mod]) => {
    end = sgr(mod[1]) + end;
    start += sgr(mod[0]);
    if (hasAnsi) {
      msg = msg.replace(
        getEndRe(mod[1]),
        ["_fg", "_bg"].indexOf(key) ? sgr(mod[0]) : ""
      );
    }
  });
  return enableColor ? `${start}${msg}${end}` : msg;
};

const proto = Object.create(
  Function.prototype,
  Object.assign(
    Object.fromEntries(
      Object.entries(sgr.mods).map(function ([key, mod]) {
        return [
          key,
          d_gs(function () {
            return Object.defineProperty(
              getFn(),
              "_color",
              d(Object.assign({}, this._color, mod))
            );
          }),
        ];
      })
    )
  )
);

function getFn() {
  return Object.setPrototypeOf(render, proto);
}

export default Object.defineProperties(getFn(), {
  _color: d("", {}),
  reset: d("", () => reset),
});