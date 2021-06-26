/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNoto = /* GraphQL */ `
  mutation CreateNoto(
    $input: CreateNotoInput!
    $condition: ModelNotoConditionInput
  ) {
    createNoto(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNoto = /* GraphQL */ `
  mutation UpdateNoto(
    $input: UpdateNotoInput!
    $condition: ModelNotoConditionInput
  ) {
    updateNoto(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNoto = /* GraphQL */ `
  mutation DeleteNoto(
    $input: DeleteNotoInput!
    $condition: ModelNotoConditionInput
  ) {
    deleteNoto(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
