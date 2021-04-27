import { initializeApollo } from "../lib/apollo";
import {getSession} from "next-auth/client";
import {Landing} from '../modules/landing/landing'


export async function getServerSideProps(context: any) {
  
  const apolloClient = await initializeApollo();
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      session: await getSession(context),
      
    },
  };
}


export default Landing;
