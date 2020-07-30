const MomentTimezoneDataPlugin = require("moment-timezone-data-webpack-plugin");
const currentYear = new Date().getFullYear();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  // webpack: (config) => {
  //   config.plugins.push(
  //     new MomentTimezoneDataPlugin({
  //       matchCountries: "PL",
  //       startYear: currentYear,
  //       endYear: currentYear + 2,
  //     })
  //   );
  //   // Important: return the modified config
  //   return config;
  // },
  webpack: {
    plugins: [
      new MomentTimezoneDataPlugin({
        matchCountries: "PL",
        startYear: currentYear,
        endYear: currentYear + 2,
      }),
    ],
  },
};
