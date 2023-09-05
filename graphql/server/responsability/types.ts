import { gql } from "apollo-server-micro";

const modelResponsability = gql`
 
type Responsability {

    id: String
    user: User
    userId: String
    element: [Element]
    proyect: Proyect
    proyectId: String
    
}
input ResponsabilityUpdateable{
    user: String
    element: [String]
}

input ResponsabilityCreatable{
    user: String
    element: String
    proyect: String
}

type Query {
    getResponsabilities: [Responsability]
    getResponsability(id : String): Responsability
  }
type Mutation {
    updateResponsability(id : String, data: ResponsabilityUpdateable): Responsability
    createResponsability(data: ResponsabilityCreatable): Responsability

}
`;

export { modelResponsability };
