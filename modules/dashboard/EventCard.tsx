import { FC , useState} from "react"
import { EventsType } from "../../lib/queries/eventQueries"
import { countAttending, countNotAttending, countPending } from "../functions/aggregates"


interface EventCardProps {
    event : EventsType
}

export const EventCard :FC<EventCardProps> = (props): JSX.Element => { {

  
        const pending = countPending(props.event.Invitees)
        const attending = countAttending(props.event.Invitees)
        const notAttending = countNotAttending(props.event.Invitees)
   
    return (
        <div className="mt-12 grid gap-6 max-w-lg mx-auto md:grid-cols-2 lg:grid-cols-3 md:max-w-none">
                  <div className="relative w-full h-full group cursor-pointer">
                    <div className="relative pb-80 rounded-xl overflow-hidden" style={{backgroundColor: 'rgb(241, 89, 74)'}}>
                      <img
                        src="https://rsvpify-v3.s3.amazonaws.com/events/92/wall/images/507/C3aOSfzevRQKLN7S.png"
                        alt=""
                        className="absolute inset-0 h-full w-full shadow-md object-cover opacity-75 group-hover:shadow-xl group-hover:opacity-100"
                      />
                    </div>
                    <div className="relative px-4 -mt-24">
                      <div className="bg-white rounded-xl px-5 py-4 shadow-lg group-hover:shadow-2xl">
                        <div className="text-lg text-center">{props?.event?.event_name}</div>
                        <div className="mt-4 mb-2">
                          <div className="flex bg-gray-400 h-2 rounded-md overflow-hidden">
                            <div className="bg-green"></div>
                            <div className="bg-yellow"></div>
                            <div className="bg-red"></div>
                          </div>
                          <div className="items-start py-3 grid grid-cols-3 gap-4">
                            <div className="justify-center col-4">
                              <div className="flex flex-col items-center text-green-500">
                                <div className="font-medium text-2xl">{attending}</div>{" "}
                                <div className="text-center uppercase tracking-wide text-xs text-gray-600">
                                  Attending
                                </div>
                              </div>
                            </div>{" "}
                            <div className="justify-center">
                              <div className="flex flex-col items-center text-yellow-500">
                                <div className="font-medium text-2xl">{pending}</div>{" "}
                                <div className="text-center uppercase tracking-wide text-xs text-gray-600">
                                  Pending
                                </div>
                              </div>
                            </div>{" "}
                            <div className="justify-center">
                              <div className="flex flex-col items-center text-red-500">
                                <div className="font-medium text-2xl">{notAttending}</div>{" "}
                                <div className="text-center uppercase tracking-wide text-xs text-gray-600">
                                  Not attending
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                     
                      </div>
                    </div>
                  </div>
                </div>
    )
}}