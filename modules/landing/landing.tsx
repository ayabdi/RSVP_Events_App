import { useSession } from "next-auth/client";
import React, { useEffect } from "react";
import Navbar, { NavType } from "../header/navbar";
import { Hero } from "./hero";

export const Landing = () => {
  const [session, loading] = useSession();
  const navigation : NavType= [
    {
      title: "Home",
      href: "#",
    },

    {
      title: "About",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
  ];

  if (session) navigation.push({ title: "Dashboard", href: "/dashboard" });
  

  return (
    <>
      <Navbar
        isWhite={true}
        navigation={navigation}
        session={session}
        isLoading={loading}
      />
      <Hero />
    </>
  );
};
