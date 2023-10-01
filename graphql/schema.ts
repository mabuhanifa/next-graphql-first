export const typeDefs = `#graphql

    type Novel{
        id: ID!
        title: String
        image: String
        createdAt: String
        updatedAt: String
        author: [Author]
    }

    type Author{
        id: ID!
        name: String
        novelID:String
    }

    type Query {
        novel(id:ID!): Novel 
        novels: [Novel]
    }

    type Mutation {
        addNovel(title: String, image: String): Novel
    }
`;
