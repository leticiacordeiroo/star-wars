import { gql } from "@apollo/client";

export const GET_PERSON = gql`
  query GetPerson {
    allPeople(first: 30) {
    people{
      id
      name
      birthYear
      gender
      mass
      species {
        id
        name
      }
      filmConnection {
        totalCount
        films {
          id
          title
        }
      }
    }
    }
  }
`;