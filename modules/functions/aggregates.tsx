import { EventsType } from "../../lib/queries/eventQueries";
import { InviteeObject } from "../../lib/queries/inviteeQueries";


export const countPending = (events : InviteeObject[]) => {
    var count = 0
    events.map((e) => {
        if (e.status === 'sent') {
           count++
        }
    })
    return count
}

export const countAttending= (events : InviteeObject[]) => {
    var count = 0
    events.map((e) => {
        if (e.status === 'attending') {
           count++
        }
    })
    return count
}
export const countNotAttending = (events : InviteeObject[]) => {
    var count = 0
    events.map((e) => {
        if (e.status === 'not') {
           count++
        }
    })
    return count
}