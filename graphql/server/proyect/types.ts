import { gql } from "apollo-server-micro";

const modelProyect = gql`
 
type Proyect {

    id: String!  
    name: String!    
    budget: Int!  
    team: [Team]   
    responsability: [Responsability]
    teamId: String!
    
}
input ProyectUpdateable{
    name: String
    budget: Int
    team: [String] 
    responsability: [String]
}

input ProyectCreatable{
    name: String
    budget: Int
    team: [String] 
    responsability: [String]
}

type Query {
    getProyects: [Proyect]
    getProyect(id : String): Proyect
  }
type Mutation {
    updateProyect(id : String, data: ProyectUpdateable): Proyect
    createProyect(data: ProyectCreatable): Proyect

}
`;

export { modelProyect };
