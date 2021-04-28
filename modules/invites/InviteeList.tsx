import { useSubscription } from "@apollo/client";
import { CircularProgress } from "@material-ui/core";
import { format } from "date-fns";
import { FC, Key } from "react";
import { getInviteesByEventId } from "../queries/inviteeQueries";
import { Button } from "./AddInviteButton";
import { DeleteButton } from "./DeleteButton";

interface InviteeListProps {
  event_id: number;
}
export const InviteeList: FC<InviteeListProps> = (props): JSX.Element => {
  const titles = ["Name", "Date Invited", "Status", " "];

  const { data, loading } = useSubscription(
    getInviteesByEventId(props.event_id)
  );
  console.log(data);

  const eventData = data?.RSVP_Invitees[0]?.Event;
  return (
    <div className="flex flex-col  justify-around ml-60 md:ml-72 xl:ml-96">
      <div className="flex flex-col w-full ml-0 ">
        <header className=" fixed md:flex inset-x-0 ml-0 md:ml-64 px-8 items-center bg-white shadow h-20 -z-50">
          {eventData && (
            <h1 className="flex items-center font-semibold text-gray-800 text-xl ml-8">
              {eventData.event_name} {">"} Invite List
            </h1>
          )}
        </header>
        <div className="my-40 ">
          <div className="py-2  inline-block md:w-full xl:w-4/5 sm:px-6 md:px-8">
            <div className=" flex justify-end w-full">
              {eventData && <Button event_id={eventData.id} />}
            </div>

            {loading ? (
              <div className="w-full text-center h-40 mt-36 mb-60 -ml-20">
                <CircularProgress size={110} className="" />{" "}
              </div>
            ) : data.RSVP_Invitees[0]?.name ? (
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 ">
                    <tr>
                      {titles.map((title, itemIdx) => (
                        <th
                          key={itemIdx}
                          scope="col"
                          className="px-6 py-3 w-1/5 ml-4 text-left text-xs lg:text-sm font-medium text-gray-500 uppercase tracking-wider"
                        >
                          <div className={itemIdx === 0 ? "ml-4" : undefined}>
                            {title}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data?.RSVP_Invitees?.map((invitee: any, itemIdx: Key) => (
                      <tr key={itemIdx}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {invitee?.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {invitee.email_address}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            { format(new Date(invitee.date_invited), 'dd/MM/yyyy')}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-left  whitespace-nowrap">
                          <span
                            className={`px-5 py-1 inline-flex text-xs   lg:text-sm leading-5 font-semibold rounded-full ${
                              invitee.status === "sent"
                                ? "bg-yellow-100 text-yellow-800 uppercase"
                                : invitee.status === "attending"
                                ? "bg-green-100 text-green-800 uppercase"
                                : "bg-red-100 text-red-800 uppercase"
                            } `}
                          >
                            {invitee.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 flex whitespace-nowrap text-right text-sm font-medium mt-2">
                          <DeleteButton invitee_id={invitee.id} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <>
                <div className="flex flex-col items-center justify-center text-grey mt-10">
                  <p className="text-2xl font-semibold mb-6 ">
                    No invitees added... yet.
                  </p>{" "}
                  <p className="mb-6 text-center">
                    Add invitees if you plan to send email invitations or are
                    hosting a private event with an exclusive guest list.
                  </p>{" "}
                  <img
                    src="https://assets.rsvpify.com/0ea52aca-d9a9-417e-bbe8-f9e0f2b720be/images/empty-states/invite-list.svg"
                    alt="Invite List empty state"
                    className="w-1/2"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
