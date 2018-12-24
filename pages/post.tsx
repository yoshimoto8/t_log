import { withRouter } from "next/router";
import { getMdxList } from "../utils/getMdxList";

const getMdx = (title: string) => {
  const mdxList = getMdxList();
  const result = mdxList.filter((mdx: any) => mdx.title === title);
  //もし一致しない場合の条件分岐を付け足す
  return result[0];
};

const Content = withRouter((props) => {
  const { router } = props;
  //@ts-ignore
  const mdx = getMdx(router.query.title);
  return (
    <div>
      <mdx.Component />
    </div>
  );
});

export default Content;
