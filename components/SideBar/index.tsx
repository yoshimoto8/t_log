type ListItemProps = {
  title: string;
};

const ListItem = (props: ListItemProps) => <li>{props.title}</li>;

const SideBar = () => {
  return (
    <div>
      <ul>
        <ListItem title="Home" />
        <ListItem title="About me" />
        <ListItem title="Tag" />
        <ListItem title="Activity" />
      </ul>
    </div>
  );
};

export default SideBar;
