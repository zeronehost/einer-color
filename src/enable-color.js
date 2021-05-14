export const enableColor =
  !("NO_COLOR" in process.env) &&
  (("FORCE_COLOR" in process.env && process.env.FORCE_COLOR === "true") ||
    process.platform === "win32" ||
    (process.stdout !== null &&
      process.stdout.isTTY &&
      process.env.TERM &&
      process.env.TERM !== "dumb"));

// export const enableColor256 = enableColor && process.stdout.hasColors(256);
