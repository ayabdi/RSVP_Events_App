import React, { FC, Key } from "react";
import Link from "next/link";
import Navbar, { NavType } from "../header/navbar";
import { EventCard } from "./EventCard";
import { useQuery, useSubscription } from "@apollo/client";
import { getUser } from "../queries/userQueries";
import { useSession } from "next-auth/client";
import { EventsQueryType, getEventsByUser } from "../queries/eventQueries";
import { CreateButton } from "./CreateButton";
import { useRouter } from "next/dist/client/router";
import { CircularProgress } from "@material-ui/core";

export const dashboardLayout: FC = (): JSX.Element => {
  const [session, loading] = useSession();
  const { data: userData } = useQuery(getUser(session && session?.user.email));
  const { data: eventData } = useSubscription(
    getEventsByUser(userData && userData.RSVP_Users[0]?.id)
  );

  const navigation: NavType = [
    { title: "Dashboard", href: " " },
    { title: "Home", href: "../" },
  ];

  return (
    <>
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
              {eventData ? (
                <>
                  <CreateButton session={session} />
                  <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {eventData
                      ? eventData.RSVP_Events.map(
                          (event: EventsQueryType, idx: Key) => (
                            <EventCard key={idx} event={event} />
                          )
                        )
                      : null}
                  </div>{" "}
                </>
              ) : (
                <div className="w-full text-center h-40">
               
                  <CircularProgress size={100} className="mt-10" />{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
