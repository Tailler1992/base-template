/** @type {import("postcss").PluginCreator} */



const pxRegex = /"[^"]+"|'[^']+'|url([^)]+)|(\d*.?\d+)px/ig;

const replacePxWithVw = (str) => {
  let replacedStr = str;
  if (replacedStr.includes("px")) {

    const pixels = parseFloat(replacedStr);
    const vw = parseFloat((pixels / 1920 * 100).toFixed(2)) + "vw";

    // console.log(vw);

    replacedStr = replacedStr.replace(pxRegex, vw);
  }
  return replacedStr;
};

const replacePxWithVwHD = (str) => {
  let replacedStr = str;
  const regex = /([0-9.]+)px/g;

  let converted = replacedStr.replace(regex, function(match, p1) {
    return ((parseFloat(p1) / 1366 * 100)).toFixed(2) + 'vw';
  });

  converted = converted.replace(/px/g, 'vw');
  return converted;
};

const replacePxWithVwTablet = (str) => {
  let replacedStr = str;
  const regex = /([0-9.]+)px/g;

  let converted = replacedStr.replace(regex, function(match, p1) {
    return ((parseFloat(p1) / 991 * 100)).toFixed(2) + 'vw';
  });

  converted = converted.replace(/px/g, 'vw');
  return converted;
};

const replacePxWithVwMobile = (str) => {
  let replacedStr = str;
  const regex = /([0-9.]+)px/g;

  let converted = replacedStr.replace(regex, function(match, p1) {
    return ((parseFloat(p1) / 576 * 100)).toFixed(2) + 'vw';
  });

  converted = converted.replace(/px/g, 'vw');
  return converted;
};

const plugin = (opts = {}) => {
  return {
    postcssPlugin: "to-red",

    // селектор с объявлением внутри. Например input, button {}
    Rule(rule) {
      //console.log(rule.toString())
    },


    // Declaration: {
    //   color: decl => {
    //     // All `color` declarations
    //   },
    //   '*': decl => {
    //     decl.value = replacePxWithVw(decl.value)
    //   }
    // },

    AtRule: {
      media: atRule => {
        if (atRule.name === "media") {
          // console.log(atRule.params);
        }
      },
    },


    // пара ключ-значение, подобная color: black
    Declaration(decl) {
      //decl.value = replacePxWithVw(decl.value)
    },

    Once(root) {
      root.walkAtRules("media", (rule) => {

        // Проверяем каждое правило media на наличие конкретного медиа-запроса
        if (rule.params.indexOf("--viewport-hd") !== -1) {
          console.log("Медиа-запрос hd использован", rule.params);

          rule.walkDecls(decl => {
            console.log(decl.value);

            decl.value = replacePxWithVwHD(decl.value);
          });
        }
        if (rule.params.indexOf("--viewport-tablet") !== -1) {
          console.log("Медиа-запрос tablet использован", rule.params);

          rule.walkDecls(decl => {
            console.log(decl.value);

            decl.value = replacePxWithVwTablet(decl.value);
          });
        }
        if (rule.params.indexOf("--viewport-mobile") !== -1) {
          console.log("Медиа-запрос mobile использован", rule.params);

          rule.walkDecls(decl => {
            console.log(decl.value);

            decl.value = replacePxWithVwMobile(decl.value);
          });
        }
      });
    },
  };
};


plugin.postcss = true;

export default plugin;
