//import gql from "graphql-tag";


import { gql , DocumentNode} from '@apollo/client';

export type UserType ={
  name :string,
  email: string,
  id? : number,
  number? : number
}



export  const GET_USER : DocumentNode = gql`
    query MyQuery($email: String!) {
        RSVP_Users(where: {email: {_eq: $email}}) {
          id
        }
      }
      `;



