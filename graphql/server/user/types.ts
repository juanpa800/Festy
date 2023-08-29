import { gql } from "apollo-server-micro";

const modelUser = gql`
enum Enum_role {
    administrador
    integrante
  } 
type User {
    id: String!
    name: String!
    email: String!
    image: String!
    role: Enum_role!
    # responsability: [Responsability]
    # team: [Team]
}
input UserUpdateable{
    name: String
    role: Enum_role
}
type Query {
    getUsers: [User]
    getUser(id : String): User
  }
type Mutation {
    updateUser(id : String, data: UserUpdateable): User 
}
`;

export { modelUser };
