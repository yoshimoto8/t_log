import React from "react";
import Link from "next/link";

const postFileNames =
  preval`
module.exports = require("fs").readdirSync("./posts")
` || [];

const posts = postFileNames.map((name) => {
  const {
    default: Component,
    meta: { title }
  } = require("../posts/" + name);

  return {
    Component,
    title
  };
});

export default () => (
  <div>
    <Link href="/about">
      <a>About</a>
    </Link>
    {posts.map((post) => (
      <>
        <h2>{post.title}</h2>
        <post.Component />
      </>
    ))}
  </div>
);
