module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  sassOptions: {
    additionalData: `$basePath: "${process.env.NEXT_PUBLIC_BASE_PATH || ''}";`,
  },
  images: {
    loader: "imgix",
    path: "",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};