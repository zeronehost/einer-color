import { isString, isFunction, isObject } from "einer-type";

const isValue = (value) => value !== void 0 && value !== null;

export const forEachRight = (arr, callback) => {
  try {
    arr.reverse().forEach(callback);
    arr.reverse();
  } catch (error) {
    arr.reverse();
    throw error;
  }
};

export const firstKey = (obj) => {
  if (isObject(obj)) {
    for (const k in obj) {
      if (Object.hasOwnProperty.call(obj, k)) return k;
    }
  }
  return null;
};

export const d = (dscr, value, options) => {
  let opts, c, e, w;
  if (value === undefined || !isString(dscr)) {
    opts = value;
    value = dscr;
    dscr = null;
  } else {
    opts = options;
  }
  if (isValue(dscr)) {
    c = (dscr || "").includes("c") || true;
    e = (dscr || "").includes("e");
    w = (dscr || "").includes("w");
  } else {
    c = w = true;
    e = false;
  }
  const desc = { value: value, configurable: c, enumerable: e, writable: w };
  return !opts ? desc : Object.assign(/*Object.create(null)*/ {}, opts, desc);
};

export const d_gs = (dscr, get, set, options) => {
  let c, e, opts;
  !isString(dscr)
    ? ([opts, set, get, dscr] = [set, get, dscr, null])
    : (opts = options);
  if (!isValue(get)) {
    get = undefined;
  } else if (!isFunction(get)) {
    opts = get;
    get = set = undefined;
  } else if (!isValue(set)) {
    set = undefined;
  } else if (!isFunction(set)) {
    opts = set;
    set = undefined;
  }
  isValue(dscr)
    ? ((c = (dscr || "").includes("c")), (e = (dscr || "").includes("e")))
    : ((c = true), (e = false));
  const desc = { get, set, configurable: c, enumerable: e };
  return !opts ? desc : Object.assign(/*Object.create(null)*/ {}, opts, desc);
};
