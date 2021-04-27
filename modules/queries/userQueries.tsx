//import gql from "graphql-tag";
import { DocumentNode } from "graphql";

import gql from "graphql-tag";

export type UserType ={
  name :string,
  email: string,
  id? : number,
  number? : number
}


export const getUser = (email: String | null | undefined) => {
  const GET_USER : DocumentNode = gql`
    query MyQuery {
        RSVP_Users(where: {email: {_eq: "${email}"}}) {
          id
        }
      }
      `;


  return GET_USER
};

