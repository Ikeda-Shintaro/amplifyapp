/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNoto = /* GraphQL */ `
  query GetNoto($id: ID!) {
    getNoto(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotos = /* GraphQL */ `
  query ListNotos(
    $filter: ModelNotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
