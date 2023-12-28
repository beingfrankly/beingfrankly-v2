// @ts-nocheck
module.exports = {
  plugins: [
    require("autoprefixer"),
    require("cssnano")({ preset: "advanced" }),
    require("postcss-reporter"),
  ],
};
