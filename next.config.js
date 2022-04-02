// pass the modules you would like to see transpiled
// const withTM = require("next-transpile-modules")([
//   "@mui/material",
//   "@mui/system"
// ]);

module.exports = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    // Enables the styled-components SWC transform
    styledComponents: true,
  }
};

