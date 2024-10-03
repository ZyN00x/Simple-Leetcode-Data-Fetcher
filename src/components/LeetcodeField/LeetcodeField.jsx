import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchUserInfo from "../utils/fetchUserinfo";
import { Results } from "../Result/Results";
export const LeetcodeField = () => {
  const [userState, setUserData] = useState("");
  const [isSubmitted, setSubmit] = useState(false);

  //------------------ Debugging functions------------------------------//
  const reviewData = () => {
    console.log(`The user input  is : ${userState}`);
    setSubmit(true);
  };
  //------------------------------------------------//

  const handleUserData = (event) => {
    setUserData(event.target.value);
    setSubmit(false);
  };

  const results = useQuery({
    queryKey: ["UserData", userState],
    queryFn: fetchUserInfo,
    enabled: isSubmitted && !!userState,
  });

  return (
    <>
      <p>test</p>
    </>
  );
};
