import Link from 'next/link'

import {useQuery} from '@apollo/client'

import {getAllEvents} from './api/controllers/EventController'

import {initializeApollo} from '../lib/apollo'

import { useSession, getSession } from 'next-auth/client'

import Header from '../modules/header/header'
import Footer from '../modules/footer/footer'

const Index = () => {

  // const {loading, data} = useQuery(getAllEvents())
  // console.log(data)
  const [ session, loading ] = useSession()

  return (
    <>
    <Header/>
    <main>
 
    </main>
    <Footer/>
    </>
  )
}
export async function getServerSideProps(context:any){

  const apolloClient = await initializeApollo()
  return {
    props: {
    initialApolloState: apolloClient.cache.extract(),
    session: await getSession(context)
    }
  }
}



export default Index
