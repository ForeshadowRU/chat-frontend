const reqSvgs = require.context("!@svgr/webpack!assets", true, /\.svg$/);

export const SvgFactory = reqSvgs.keys().reduce((images, path) => {
  const key = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
  images[key] = reqSvgs(path).default;
  return images;
}, {});
