import { gql } from "apollo-server-micro";

const modelElement = gql`
 
type Element {

    id: String
    name: String
    price: Int
    amount: Int
    responsability: Responsability
    responsabilityId: String
    
}
input ElementUpdateable{
    name: String
    price: Int
    amount: Int
    responsability: String

}
input ElementCreatable{
    name: String
    price: Int
    amount: Int
    responsability: String
}
type Query {
    getElements: [Element]
    getElement(id : String): Element
  }
type Mutation {
    updateElement(id : String, data: ElementUpdateable): Element
    createElement(data: ElementCreatable): Element
}
`;

export { modelElement };
