const MomentTimezoneDataPlugin = require("moment-timezone-data-webpack-plugin");
const currentYear = new Date().getFullYear();

module.exports = {
  env: {
    // API_URL: "http://localhost:3001/api/",
    // API_URL: "https://ec-api-a.herokuapp.com/api/",
    API_URL: process.env.API_URL,
  },
  webpack: (
    config
    // ,
    // {
    // buildId,
    // dev,
    // isServer,
    // defaultLoaders,
    // webpack,
    // }
  ) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(
      new MomentTimezoneDataPlugin({
        matchCountries: "PL",
        startYear: currentYear,
        endYear: currentYear + 2,
      })
    );

    // Important: return the modified config
    return config;
  },
};
