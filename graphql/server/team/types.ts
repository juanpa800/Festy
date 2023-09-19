import { gql } from "apollo-server-micro";

const modelTeam = gql`
 
type Team {
    id: String!
    name: String!
    user: [User]
    userId: [String]
    proyect: [Proyect]
    proyectId: [String]
}

input TeamUpdateable{
    name: String
    userId: [String]
    proyectId: [String]
}

input TeamCreatable{
    name: String
}

type Query {
    getTeams: [Team]
    getTeam(id : String): Team
  }
type Mutation {
    updateTeam(id : String, data: TeamUpdateable): Team
    createTeam(data: TeamCreatable): Team

}
`;

export { modelTeam };
