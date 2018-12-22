import Link from "next/link";

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

const component1 = () => (
  <div>
    {posts.map((post: any) => (
      <Link as={`/detail/${post.url}`} href={`/post?titile=${post.url}`}>
        <h2>{post.title}</h2>
      </Link>
    ))}
  </div>
);

// const component = () => (
//   <div>
//     {posts.map((post: any) => (
//       <>
//         <h2>{post.title}</h2>
//         <post.Component />
//       </>
//     ))}
//   </div>
// );

export default component1;
