module.exports = {
  plugins: [
    require("postcss-custom-media"),
    require("postcss-preset-env")({
      stage: 0,
    }),
  ],
};