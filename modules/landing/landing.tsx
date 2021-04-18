import { useSession } from "next-auth/client";
import React, {useEffect} from "react";
import Navbar from "../header/navbar";
import { Hero } from "./hero";

export const Landing = () => {
  const[session] = useSession()
  const navigation = [
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
  useEffect(() => {
      navigation.push({title:'Dashboard', href: '/dashboard'})
      return () => {
          
      }
  }, [session])
  return (
    <>
      <Navbar isWhite={true} navigation={navigation} />
      <Hero />
    </>
  );
};
