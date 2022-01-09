import { DocumentNode } from "graphql";
import gql from "graphql-tag";
import { InviteeObjectType } from "./inviteeQueries";
import { UserType } from "./userQueries";

export type EventsQueryType = {
  id?: number;
  event_name: string;
  event_date: Date;
  duration: string;
  event_desc: string;
  event_type: string;
  country: string;
  address: string;
  host_id?: Number;
  city?: string;
  state?: string;
  zip?: string;
  name?: string;
  email?: string;
  User?: UserType;
  Invitees?: InviteeObjectType[];
  __typename? : string;
  created_at?: Date
};

export const GET_Events: DocumentNode = gql`
  query MyQuery {
    RSVP_Events {
      event_name
    }
  }
`;

export const GET_EVENT_BY_ID: DocumentNode = gql`
  subscription MyQuery($id: Int) {
    RSVP_Events(where: { id: { _eq: $id } }) {
      event_name
      event_type
      host_id
      id
      event_date
      event_desc
      duration
      address
      country
      zip
      city
      state
      created_at
      Invitees {
        name
        status
        email_address
        date_invited
      }
      User {
        name
        email
      }
    }
  }
`;

export const INSERT_EVENT: DocumentNode = gql`
  mutation MyMutation(
    $event_date: timestamp
    $event_name: String
    $event_type: String
    $event_desc: String
    $host_id: numeric
    $name: String
    $email: String
    $country: String
    $duration: String
    $address: String
    $zip: String
    $city: String
    $state: String
  ) {
    insert_RSVP_Events(
      objects: {
        User: {
          data: { id: $host_id, name: $name, email: $email }
          on_conflict: { constraint: Users_email_key, update_columns: id }
        }
        event_name: $event_name
        event_type: $event_type
        event_desc: $event_desc
        event_date: $event_date
        duration: $duration
        country: $country
        address: $address
        city: $city
        zip: $zip
        state: $state
      }
    ) {
      returning {
        event_name
        host_id
      }
    }
  }
`;

export const GET_EVENT = gql`
  subscription MyQuery($host_id: numeric) {
    RSVP_Events(where: { host_id: { _eq: $host_id } }) {
      event_name
      host_id
      id
      created_at
      Invitees {
        status
      }
    }
  }
`;

export const UPDATE_EVENT = gql`
  mutation MyMutation(
    $id: Int!
    $event_date: timestamp
    $event_name: String!
    $event_type: String!
    $event_desc: String!
    $duration: String
    $country: String!
    $address: String!
    $zip: String!
    $city: String!
    $state: String!
  ) {
    update_RSVP_Events_by_pk(
      pk_columns: { id: $id }
      _set: {
        event_name: $event_name
        event_type: $event_type
        event_desc: $event_desc
        event_date: $event_date
        duration: $duration
        country: $country
        address: $address
        city: $city
        zip: $zip
        state: $state
      }
    ) {
      event_name
    }
  }
`;

export const DELETE_EVENT = gql`
  mutation MyMutation($id: Int!) {
    delete_RSVP_Events_by_pk(id: $id) {
      event_name
    }
  }
`;
