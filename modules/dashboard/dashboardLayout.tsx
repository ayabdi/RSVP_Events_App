import React, { FC, Key } from "react";

import Navbar, { NavType } from "../header/navbar";
import { EventCard } from "./EventCard";
import { useQuery } from "@apollo/client";
import { getUser } from "../../lib/queries/userQueries";
import { useSession } from "next-auth/client";
import { EventsType, getEventsByUser } from "../../lib/queries/eventQueries";

export const dashboardLayout: FC = (props): JSX.Element => {
  const [session, loading] = useSession();
  const { data: userData } = useQuery(getUser(session && session?.user.email));
  const { data: eventData} = useQuery(
    getEventsByUser(userData && userData.RSVP_Users[0].id)
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
        
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg ">
              {eventData
                ? eventData.RSVP_Events.map((event : EventsType, idx : Key) => (
                    <EventCard key= {idx} event={event} />
                  ))
                : null}
            </div>
          </div>
      
        </div>
      </main>
    </>
  );
};
