/** @type {import("postcss").PluginCreator} */



const pxRegex = /"[^"]+"|'[^']+'|url([^)]+)|(\d*.?\d+)px/ig;

const plugin = (opts = {}) => {
  return {
    postcssPlugin: 'to-red',
    Rule (rule) {
      console.log(rule.toString())
    },
    Declaration (decl) {
      console.log(decl.toString())
      decl.value = 'red'
    }
  }
};

plugin.postcss = true;

export default plugin
