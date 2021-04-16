//import gql from "graphql-tag";
import { DocumentNode } from "graphql";

import gql from "graphql-tag";



export const getUser = (email: String) => {
  const GET_USER : DocumentNode = gql`
    query MyQuery {
        RSVP_Users(where: {email: {_eq: "${email}"}}) {
          id
          name
          email
        }
      }
      `;


  return GET_USER
};

export const deleteUser = () => {
  const DELETE_USER = gql``;
};
export const updateUser = () => {
  const UPDATE_USER = gql``;
};
