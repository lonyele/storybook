module.exports = async ({ config }) => {
  config.module.rules[0].include.push(/node_modules(?:\/|\\)lit-element|lit-html/);
  // config.module.rules[0].exclude.push(/node_moules\/(?!(lit-html|@polymer)\/).*/);
  return config;
};
