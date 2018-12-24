import Link from "next/link";
import { getMdxList } from "../utils/getMdxList";

const component = () => (
  <div>
    {getMdxList().map((post: any) => {
      return (
        <div>
          <Link
            as={`/detail/${post.url}`}
            href={{ pathname: "/post", query: { title: post.title } }}
          >
            <h2>{post.title}</h2>
          </Link>
          {post.Component}
        </div>
      );
    })}
  </div>
);

export default component;
