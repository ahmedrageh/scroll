import React, { Component } from "react";
import { Link, Element } from "react-scroll";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  flex-wrap: nowrap !important;
  overflow-x: hidden;
  overflow-y: hidden;
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0 0 8px 3px rgb(0 0 0 / 20%);
  align-items: center;
`;

const ListItems = styled.div`
  width: auto;
  white-space: nowrap;
  padding: 10px;
`;

const Item = styled(Link)`
  color: #696969;
  text-transform: uppercase;
  padding: 0 3px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  :hover {
    color: #6f3130;
    text-decoration: none;
  }
`;

const Container = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const Content = styled.div`
  height: 50vh;
`;

const CategoryName = styled.div`
  color: #6f3130;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;
`;

const categories = [
  { id: 1, name: "Services" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Services" },
  { id: 4, name: "Training" },
  { id: 5, name: "Support" },
  { id: 6, name: "Research and Development" },
  { id: 7, name: "Training" },
  { id: 8, name: "Human Resources" },
  { id: 9, name: "Services" },
  { id: 10, name: "Legal" },
  { id: 11, name: "Sales" },
  { id: 12, name: "Legal" },
  { id: 13, name: "Accounting" },
  { id: 14, name: "Business Development" },
  { id: 15, name: "Accounting" },
  { id: 16, name: "Services" },
  { id: 17, name: "Training" },
  { id: 18, name: "Research and Development" },
  { id: 19, name: "Human Resources" },
  { id: 20, name: "Legal" },
  { id: 21, name: "Research and Development" },
  { id: 22, name: "Human Resources" },
  { id: 23, name: "Services" },
  { id: 24, name: "Research and Development" },
  { id: 25, name: "Research and Development" },
  { id: 26, name: "Accounting" },
  { id: 27, name: "Product Management" },
  { id: 28, name: "Human Resources" },
  { id: 29, name: "Legal" },
  { id: 30, name: "Legal" },
  { id: 31, name: "nlj" }
];

//const Teste = () => {
//const inputRef = useState([]);
// inputRef.current = [];
//const addRef = (ref) => {
//  console.log(ref);
// if (!inputRef.current.includes(ref)) {
///   inputRef.current.push(ref);
//  }
// console.log(inputRef);
//};

// categories.map(category => {
//   [category.id] = createRef();
// });
//
// const scrollToCategory = id => {
//   [id].current.scrollIntoView({inline: "center"})
// }

export default class App extends Component {
  constructor(props) {
    super(props);
    categories.map((category) => {
      this[category.id] = React.createRef();
    });
  }

  scrollToCategory = (id) => {
    this[id].current.scrollIntoView({ inline: "center" });
  };

  render() {
    return (
      <>
        <Nav>
          {categories.map((category) => (
            <ListItems key={category.id} ref={this[category.id]}>
              <Item
                activeClass="activeCategoryLink"
                className={category.id}
                to={category.id.toString()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-90}
                onSetActive={() => this.scrollToCategory(category.id)}
              >
                {category.name}
              </Item>
            </ListItems>
          ))}
        </Nav>
        <Container>
          {categories.map((category) => (
            <Element
              name={category.id.toString()}
              className={category.id}
              key={"display" + category.id}
            >
              <Content>
                <CategoryName>{category.name}</CategoryName>
              </Content>
            </Element>
          ))}
        </Container>
      </>
    );
  }
}
//export default Teste;
