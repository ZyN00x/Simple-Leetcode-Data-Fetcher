import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Results = ({ userinfo, userDetails }) => {
  return (
    <Card className="w-fit">
      <CardHeader>
        <div className="flex justify-center">
          {userinfo ? (
            <Avatar className="m-4">
              <AvatarImage src={userinfo.avatar || ""} alt="avatar" />
            </Avatar>
          ) : (
            <p></p>
          )}
          <div className="flex flex-col justify-center">
            <Badge className="text-lg m-7 h-5 italic w-fit">
              {userinfo?.name}
            </Badge>

            <Badge className="text-sm h-5 w-fit bg-purple-300">
              <pre>current ranking {userDetails?.ranking}</pre>
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-row w-[700px] justify-around">
        <Badge className="bg-blue-300 ">
          Total Solved
          <span className="font-bold font-mono mx-1 text-blue-800">
            {userDetails?.totalSolved}
          </span>
        </Badge>

        <Badge className="bg-green-300">
          Easy Solved
          <span className="font-bold font-mono mx-1 text-green-800">
            {userDetails?.easySolved}
          </span>
        </Badge>

        <Badge className="bg-orange-300">
          Medium Solved
          <span className="font-bold font-mono mx-1 text-orange-800">
            {userDetails?.mediumSolved}
          </span>
        </Badge>

        <Badge className="bg-red-300">
          Hard Solved
          <span className="font-bold font-mono mx-1 text-red-800">
            {userDetails?.hardSolved}
          </span>
        </Badge>
      </CardContent>
    </Card>
  );
};
export default Results;
