import { FC, useState, useEffect } from "react";
import { EventDetails } from "../event/EventDetails/EventDetails";
import { InviteeList } from "../invites/InviteList/InviteeList";
import { SidebarNav } from "../event/SideBar/SidebarNav";
import { useRouter } from "next/dist/client/router";


interface LayoutProps{
    event : any,
    isAuthorisedUser : boolean
}
export const Layout: FC<LayoutProps> = (props): JSX.Element => {
  const [navCount, setNavCount] = useState(2);
  const router = useRouter();
  
  useEffect(() => {
    if (!props.isAuthorisedUser) router.push('/404')
  }, [])

  return (
    <>
      {props.isAuthorisedUser ? (
        <>
          <SidebarNav navCount={navCount} setNavCount={setNavCount} />
          {navCount === 2 && props.event?.id ? (
            <EventDetails event_id={props.event.id} router={router} />
          ) : navCount === 3 ? (
            <InviteeList event={props.event} />
          ) : null}
        </>
      ) : null}
    </>
  );
};
