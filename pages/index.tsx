import Link from "next/link";
import { getMdxList } from "../utils/getMdxList";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

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
          <Title>My page</Title>
        </div>
      );
    })}
  </div>
);

export default component;
