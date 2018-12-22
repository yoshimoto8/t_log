export const getMdxList = () => {
  const postFileNames =
    //@ts-ignore
    preval`
module.exports = require("fs").readdirSync("./posts")
` || [];

  const posts = postFileNames.map((fileName: any) => {
    const {
      default: Component,
      meta: { url },
      meta: { title }
    } = require("../posts/" + fileName);

    return {
      Component,
      title,
      url
    };
  });

  return posts;
};
