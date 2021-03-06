import React, { FC, Key, useEffect, useState } from "react";
import Navbar, { NavType } from "../header/navbar";
import { EventCard } from "./EventCard/EventCard";
import { useQuery, useSubscription } from "@apollo/client";
import { GET_USER } from "../../graphql/userQueries";
import { useSession } from "next-auth/client";
import { EventsQueryType, GET_EVENT } from "../../graphql/eventQueries";
import { useRouter } from "next/dist/client/router";
import { CircularProgress } from "@material-ui/core";
import { Modal , IconButton} from "../shared_components";
import { EventForm } from "./EventForm/EventForm";

export const UserContext = React.createContext({});

export const DashboardLayout: FC = (): JSX.Element => {
  const router = useRouter();
  const [session, loading] = useSession();

  useEffect(() => {
    if (!loading && !session) router.push("../auth/signin");
  }, [session, loading]);

  const { data: userData } = useQuery(GET_USER, {
    variables: { email: session?.user.email },
  });
  const userID = userData?.RSVP_Users[0]?.id;

  const { data: eventData, loading: eventLoading } = useSubscription(
    GET_EVENT,
    { variables: { host_id: userID } }
  );
 
  console.log(eventData)
  const navigation: NavType = [
    { title: "Dashboard", href: " " },
    { title: "Home", href: "../" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

  return (
    <>
      <UserContext.Provider value={{ userID, session }}>
        <Navbar
          isWhite={false}
          navigation={navigation}
          session={session}
          isLoading={loading}
        />
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0 mt-10">
              <div className="border-4 border-dashed border-gray-200 rounded-lg px-7 pt-10 pb-16 ">
                {!eventLoading && eventData ? (
                  <>
                    <IconButton icon='add' onClick={handleModal} />
                    <Modal handleModal={handleModal} isOpen={isOpen}>
                      <EventForm closeModal={handleModal} />
                    </Modal>
                    {eventData?.RSVP_Events[0] ? (
                      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {eventData.RSVP_Events.map(
                          (event: EventsQueryType, idx: Key) => (
                            <EventCard key={idx} event={event} />
                          )
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-grey mt-10">
                        <p className="text-2xl font-semibold mb-6 ">
                          No Events addded... yet.
                        </p>{" "}
                        <p className="mb-6 text-center">
                          Add Events if you plan to send email invitations or
                          are hosting a private event with an exclusive guest
                          list.
                        </p>{" "}
                        <img
                          src="https://assets.rsvpify.com/0ea52aca-d9a9-417e-bbe8-f9e0f2b720be/images/empty-states/invite-list.svg"
                          alt="Invite List empty state"
                          className="w-1/2"
                        />
                      </div>
                    )}
                  </>
                ) : session ? (
                  <div className="w-full text-center h-40">
                    <CircularProgress size={100} className="mt-10" />{" "}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </main>
      </UserContext.Provider>
    </>
  );
};
