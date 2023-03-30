module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],  
    plugins: [
      require.resolve("expo-router/babel"),
      "nativewind/babel",
      ["module-resolver", {
        "alias": {
          "@Components": "./src/components",
          "@Assets": "./assets",
          "@Images": "./src/images"
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".webp",
          ".png",
          ".jpg",
          ".jpeg"
        ]
      }],
    ],
  };
};