import { gql } from "graphql-request";
import { graphQLClient } from "../../lib/auth/user";
import { Layout } from "../../modules/layout/Index";
import { initializeApollo } from "../../lib/apollo";
import { getSession } from "next-auth/client";


export async function getServerSideProps(context: any) {
  const apolloClient = await initializeApollo();
  const session = await getSession(context);

  const id = context.req.url.toString().split("/")[2];
  const GET_Events = gql`
     query MyQuery {
      RSVP_Events_by_pk(id: ${id}) {
        id
        event_name
         User {
           email
         }
       }
     }
   `;

  const data = await graphQLClient.request(GET_Events);

  var isAuthorisedUser: boolean = false;
  if (session?.user.email === data?.RSVP_Events_by_pk?.User.email)
    isAuthorisedUser = true;
  
  let event: Object | null = null
  if (data?.RSVP_Events_by_pk) event = data?.RSVP_Events_by_pk
  
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      session: await getSession(context),
      isAuthorisedUser,
      event
    },
  };
}


export default Layout;
