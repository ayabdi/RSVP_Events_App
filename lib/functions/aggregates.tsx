
import { InviteeObjectType } from "../../graphql/inviteeQueries";



export const countPending = (events : InviteeObjectType[]) => {
    var count = 0
    events.map((e) => {
        if (e.status === 'sent') {
           count++
        }
    })
    return count
}

export const countAttending= (events : InviteeObjectType[]) => {
    var count = 0
    events.map((e) => {
        if (e.status === 'attending') {
           count++
        }
    })
    return count
}
export const countNotAttending = (events : InviteeObjectType[]) => {
    var count = 0
    events.map((e) => {
        if (e.status === 'not attending') {
           count++
        }
    })
    return count
}