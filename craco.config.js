const MomentTimezoneDataPlugin = require("moment-timezone-data-webpack-plugin");
const currentYear = new Date().getFullYear();

module.exports = {
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
