import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchUserInfo from "../utils/fetchUserinfo";
import { Results } from "../Result/Results";
import { ReloadIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import fetchUserDetails from "../utils/fetchUserDetails";

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
    fetchUserDetails,
    enabled: isSubmitted && !!userState,
  });

  const detailedResults = useQuery({
    queryKey: ["userDetails", userState],
    queryFn: () => fetchUserDetails(userState),
    enabled: !!userState,
  });

  return (
    <div className="flex  my-10 w-full justify-center">
      <Card className="flex flex-col justify-center items-center max-w-[500px] w-[500px]">
        <CardHeader>
          <CardTitle className="text-3xl">Fetch your Leetcode Data</CardTitle>
        </CardHeader>
        <CardContent className="flex space-x-2">
          <Input
            type="username"
            placeholder="username"
            className="text-dark-gray text-base font-bold font-mono"
            onChange={handleUserData}
          />
          {!results.isLoading ? (
            <Button type="Submit" onClick={reviewData}>
              Submit
            </Button>
          ) : (
            <Button disabled>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
