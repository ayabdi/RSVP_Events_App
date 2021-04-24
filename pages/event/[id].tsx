import { gql } from "graphql-request";
import { graphQLClient } from "../../lib/auth/user";
import { EventLayout } from "../../modules/event/EventLayout";
import { EventsQueryType } from "../../modules/queries/eventQueries";

export const getStaticPaths = async () => {
  const GET_Events = gql`
    query MyQuery {
      RSVP_Events {
        id
      }
    }
  `;
  const data = await graphQLClient.request(GET_Events);

  const paths = data.RSVP_Events.map((event: EventsQueryType) => {
    return {
      params: { id: event.id?.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context : any) => {
  const id = context.params.id;
  const GET_Events = gql`
    query MyQuery {
        RSVP_Events(where: {id: {_eq: ${id}}}) {
            event_name
            event_type
            host_id
            id
            event_date
            event_desc
            duration
            zip
            city
            state
            country
            address
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
  const data = await graphQLClient.request(GET_Events);
  const event :EventsQueryType = data.RSVP_Events[0]
  
  return {
    props:  {event} 
  };
};


export default EventLayout;
