import { getDate, format } from "date-fns"
import { FC } from "react"
import { EventsQueryType } from "../queries/eventQueries"
import { SidebarNav } from "./SidebarNav"

interface InviteeListProps{
  event : EventsQueryType
}
export const InviteeList : FC<InviteeListProps> = (props): JSX.Element =>{
    return (
      <div className ='flex flex-col  justify-around ml-60 md:ml-72 xl:ml-96'>
     
      <div className="flex flex-col w-full ml-0 ">
      <header className=" fixed md:flex inset-x-0 ml-0 md:ml-64 px-8 items-center bg-white shadow h-20 -z-50">
      <h1 className='flex items-center font-semibold text-gray-800 text-xl ml-8'>{props.event.event_name} {">"} Invite List</h1>
      </header>
      <div className="my-40 ">
        <div className="py-2  inline-block md:w-full xl:w-4/5 sm:px-6 md:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 w-1/5 text-left text-xs lg:text-sm font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  w-1/5 text-left text-xs lg:text-sm font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date Invited
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  w-1/5 text-left text-xs lg:text-sm font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
              
                  <th scope="col" className="relative px-6 py-3  w-1/5">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {props.event.Invitees?.map((invitee) => (
                  <tr key={invitee.email_address}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                    
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{invitee.name}</div>
                          <div className="text-sm text-gray-500">{invitee.email_address}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{format(invitee.date_invited, 'DD/MM/YYYY')}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-5 py-1 inline-flex text-xs lg:text-sm leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 uppercase">
                        {invitee.status}
                      </span>
                    </td>
                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium ">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}
