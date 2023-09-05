import { gql } from "apollo-server-micro";

const modelTeam = gql`
 
type Team {
    id: String!
    name: String!
    user: [String]
    project: [Proyect]
    
}
input TeamUpdateable{
    name: String
    user: [String]

}

input TeamCreatable{
    name: String
    user: String
    proyect: String
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
