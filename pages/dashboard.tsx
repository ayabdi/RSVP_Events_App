import Header from "../modules/header/header";
import Footer from "../modules/footer/footer";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from ".";
const dashboard = ({session} : InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
      <>
        <Header session = {session}/>
        <main></main>
        <Footer />
      </>
    );
  };
  
  export default dashboard;