

import { initializeApollo } from "../lib/apollo";

import {getSession, providers} from "next-auth/client";
import {Landing} from '../modules/landing/landing'
import { InferGetServerSidePropsType } from "next";



export async function getServerSideProps(context: any) {
  
  const apolloClient = await initializeApollo();
  const provider = await providers()
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      session: await getSession(context),
      
    },
  };
}
const Index = ({session } : InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(session?.user)
  return (
    
    <>
     <Landing/>
    </>
  );
};

export default Index;
