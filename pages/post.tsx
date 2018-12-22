import { withRouter } from "next/router";
import { getMdxList } from "../utils/getMdxList";

const getMdx = (title: string) => {
  const mdxList = getMdxList();
  const result = mdxList.filter((mdx: any) => mdx.title === title);
  console.log(result);
  return result[0];
};

const Content = withRouter((props) => {
  const { router } = props;
  const mdx = getMdx(router.query.title);
  console.log(mdx);
  return (
    <div>
      <mdx.Component />
    </div>
  );
});

export default Content;
