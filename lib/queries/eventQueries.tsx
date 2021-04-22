import { DocumentNode } from "graphql";
import gql from "graphql-tag";
import { InviteeObject } from "./inviteeQueries";


export type EventsQueryType = {
  event_name : string,
  event_date : Date,
  event_type : string,
  country : string,
  address : string,
  host_id: Number,
  city? :string,
  state? : string,
  zip? : string,
  name? : string,
  email?: string,
  Invitees? : InviteeObject[]
}


export const getAllEvents = () => {
  const GET_Events : DocumentNode = gql`
    query MyQuery {
      RSVP_Events {
        event_name
      }
    }
  `;
  return GET_Events;
};

export const insertEvent = () => {
  const INSERT_EVENT : DocumentNode = gql`
  mutation MyMutation($event_date: date, $event_name: String!, $event_type : String! , $host_id: numeric! , $name: String!, $email: String!, $country : String!, $address : String! , $zip : String! , $city : String! , $state : String!){
    insert_RSVP_Events(objects: {User: {data: {id: $host_id, name: $name, email: $email}, on_conflict: {constraint: Users_email_key, update_columns: id}}, event_name: $event_name, event_type: $event_type, event_date: $event_date, country : $country, address:$address , city:$city , zip:$zip, state:$state}) {
      returning {
        event_name
        host_id
      }
    }
  }`;
  return INSERT_EVENT;
};
export const getEventsByUser = (hostID : Number) => {
    const GET_EVENT = gql`
    subscription MyQuery{
      RSVP_Events(where: {host_id: {_eq: ${hostID}}}) {
        event_name
        event_type
        host_id
        id
        event_date
        created_at
        Invitees {
          status
        }
      }
    }
    `;
    return GET_EVENT
}

