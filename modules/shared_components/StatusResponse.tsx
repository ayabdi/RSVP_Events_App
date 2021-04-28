import { useRouter } from "next/dist/client/router";
import jwt from "jsonwebtoken";
import { useMutation } from "@apollo/client";
import { updateInviteStatus } from "../queries/inviteeQueries";
import { FC} from "react";

interface UpdateInviteStatus {
  id: Number;
  status: String;
}

interface StatsuResponseProps {
    response : String,
    message : String
}


const StatusResponse : FC<StatsuResponseProps> = (props) => {
  const router = useRouter();
  
  const { token } = router.query;
  let decodedToken: any
  let updateData: UpdateInviteStatus | undefined = undefined
 
  const [mutate] = useMutation(updateInviteStatus());


  if (token) {
    try {
      const stringToken: string = token.toString();
      decodedToken = jwt.verify(stringToken, "shhhht");
       updateData = {
        id: decodedToken.invite_id,
        status: props.response,
      };
    
      mutate({
        variables: updateData,
      });

      !updateData.id && router.push('../../')
    } catch (error) {
      console.log(error + "status update failed");
      router.push('../../')
    }
  }
  
  return updateData?.id?(<div>{props.message}</div>) : null
};

export default StatusResponse;
