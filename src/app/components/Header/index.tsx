import styled from "styled-components"

type ListItemProps = {
  title: string
}

const ListItem = (props: ListItemProps) => <List>{props.title}</List>

const Header = () => {
  return (
    <Container>
      <HeaderUl>
        <ListItem title="Home" />
        <ListItem title="About" />
        <ListItem title="Tag" />
        <ListItem title="Activity" />
      </HeaderUl>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`

const List = styled.li`
  margin: 0 10px;
`

const HeaderUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`

export default Header
