

import { initializeApollo } from "../lib/apollo";

import {getSession, providers} from "next-auth/client";

import Header from "../modules/header/header";
import Footer from "../modules/footer/footer";
import { InferGetServerSidePropsType } from "next";



export async function getServerSideProps(context: any) {
  
  const apolloClient = await initializeApollo();
  const provider = await providers()
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      session: await getSession(context),
      provider
    },
  };
}
const Index = ({session , provider} : InferGetServerSidePropsType<typeof getServerSideProps>) => {
 console.log(provider)
  return (
    <>
      <Header session = {session}/>
      <main></main>
      <Footer />
    </>
  );
};

export default Index;
