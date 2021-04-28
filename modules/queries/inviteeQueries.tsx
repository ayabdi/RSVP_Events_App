
import gql from "graphql-tag";
import { EventsQueryType } from "./eventQueries";

export type InviteeObjectType = {
  id?: Number;
  date_invited?: Date,
  name: string;
  email_address: string;
  phone : string,
  status: string;
  event_id: Number;
  Event? : EventsQueryType
};

export const getInviteesByEventId = (id : Number | undefined) => {
    const GET_INVITEES = gql`
    subscription MySubscription {
        RSVP_Invitees(where: {event_id: {_eq: ${id}}}) {
          name
          id
          event_id
          email_address
          date_invited
          status
          Event {
            id
            event_name
          }
        }
      }
    `
    return GET_INVITEES
}
export const insertInvitee = () => {
  const INSERT_INVITEE = gql`
    mutation MyMutation(
      $event_id: Int!
      $name: String!
      $status: String!
      $phone : String
      $email_address: String!
    ) {
      insert_RSVP_Invitees_one(
        object: {
          event_id: $event_id
          name: $name
          status: $status
          phone : $phone
          email_address: $email_address
        }
        on_conflict: {
          where: { Event: { id: { _eq: $event_id } } }
          update_columns: event_id
          constraint: Invitees_pkey
        }
      ) {
        id
        Event {
            event_name
          }
      }
    }
  `;
  return INSERT_INVITEE;
};

export const deleteInvite = () => {
    const DELETE_INVITE = gql`
    mutation MyMutation($id:Int!) {
     delete_RSVP_Invitees_by_pk(id: $id) {
       name
     }
   }
    `
    return DELETE_INVITE
 }
 export const updateInviteStatus = () => {
    const UPDATE_STATUS = gql`
    mutation MyMutation($id:Int!, $status : String!) {
        update_RSVP_Invitees_by_pk(pk_columns: {id: $id}, _set: {status: $status}) {
          status
          id
        }
      }
    `
    return UPDATE_STATUS
}