
import gql from "graphql-tag";

export const getAllEvents = () => {
  const GET_Events = gql`
    query MyQuery {
      RSVP_Events {
        event_name
      }
    }
  `;
  return GET_Events;
};

const getEvent = () => {

}
