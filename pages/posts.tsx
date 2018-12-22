import { withRouter } from "next/router";

const Content = (props: any) => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
);

const Page = withRouter((props: any) => <Content />);

export default Page;
