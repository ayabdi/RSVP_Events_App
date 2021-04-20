import { DocumentNode } from "graphql";
import gql from "graphql-tag";
import { InviteeObject } from "./inviteeQueries";


export type EventsType = {
  event_name : String,
  event_date : Date,
  event_type : String,
  host_id: Number,
  Invitees : InviteeObject[]
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
  mutation MyMutation($event_date: date, $event_name: String!, $event_type : String! , $host_id: numeric! , $name: String!, $email: String!){
    insert_RSVP_Events(objects: {User: {data: {id: $host_id, name: $name, email: $email}, on_conflict: {constraint: Users_email_key, update_columns: id}}, event_name: $event_name, event_type: $event_type, event_date: $event_date}) {
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
    query MyQuery{
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

