import postcssNested from "postcss-nested";
import myPlugin from "./postcss/postcss-plugin.js";
import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [
    postcssNested(),
    postcssPresetEnv({
      stage: 1,
    }),
    myPlugin(),
  ],
};

// export default {
//   plugins: {
//     "postcss-nested": {},
//     "postcss-pixel-to-viewport": {
//       viewportUnit: "vw",
//       viewportWidth: 1920,
//       mediaQuery: true,
//     },
//     "postcss-preset-env": {
//       stage: 1,
//     },
//   }
// };
