import Link from 'next/link'

import {useQuery} from '@apollo/client'

import {getAllEvents} from './controllers/EventController'

import {initializeApollo, ResolverContext, getHeaders} from '../lib/apollo'



const Index = () => {

  const {loading, data} = useQuery(getAllEvents())
  console.log(data)
 

  return (
    <div>
      You're signed in as  and you're  Go to the{' '} Age 
      <Link href="/about">
        <a>about</a>
      </Link>{' '}
      page.
      <div>
        <input
          type="text"
          placeholder="your new name..."
          // onChange={(e) => setNewName(e.target.value)}
        />
        <input type="button" value="change"  />
      </div>
    </div>
  )
}
export async function getServerSideProps(context:any){
  const headers = getHeaders(context)
  const apolloClient = await initializeApollo(headers)
  return {
    props: {
    initialApolloState: apolloClient.cache.extract(),

    }
  }
}



export default Index
