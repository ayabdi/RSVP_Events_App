//import gql from "graphql-tag";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = "https://rare-viper-70.hasura.app/v1/graphql";
const graphQLClient = new GraphQLClient(endpoint);

graphQLClient.setHeaders({
  "content-type": "application.json",
  "x-hasura-admin-secret": `${process.env.HASURA_GRAPHQL_ADMIN_SECRET}`,
});

export const createUser = async (sub: Number, email: String, name: String) => {
  const CREATE_USER = gql`
    mutation MyMutation($id: numeric, $email: String!, $name: String!) {
      insert_RSVP_Users_one(object: { id: $id, email: $email, name: $name }) {
        id
        email
        name
      }
    }
  `;
  const variables = {
    id: sub,
    email,
    name,
  };
  try {
    const data = await graphQLClient.request(CREATE_USER, variables);
    console.log(JSON.stringify(data) + +"user created");
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getUser = async (id: Number) => {
  const GET_USER = gql`
    query MyQuery {
        RSVP_Users(where: {id: {_eq: ${id}}}) {
          id
        }
      }
      `;
  const data = await graphQLClient.request(GET_USER);

  return data.RSVP_Users[0]
};

export const deleteUser = () => {
  const DELETE_USER = gql``;
};
export const updateUser = () => {
  const UPDATE_USER = gql``;
};
