import mickesProfilePic from "./assets/micke.png";
import thomasProfilePic from "./assets/thomas.png";
import defaultProfilePic from "./assets/default.jpg";
import karrosProfilePicture from "./assets/karro.png";
import maxProfilePicture from "./assets/max.png";
import jockesProfilePicture from "./assets/jocke.png";
import victorsProfilePicture from "./assets/victor.png";

const mockUsers = [
  { nickname: "Thomas", profilePicture: thomasProfilePic, id: "1" },
  { nickname: "Micke", profilePicture: mickesProfilePic, id: "2" },
  { nickname: "Max", profilePicture: maxProfilePicture, id: "3" },
  { nickname: "Karro", profilePicture: karrosProfilePicture, id: "4" },
  { nickname: "Jocke", profilePicture: jockesProfilePicture, id: "5" },
  { nickname: "Victor", profilePicture: victorsProfilePicture, id: "5" },
];

type User = {
  nickname: string;
  profilePicture: string;
  id: string;
};

const Leaderboard = () => {
  return (
    <section className="max-w-sm mx-auto">
      <h2 className="text-left text-xl">Leaderboard</h2>

      <table className="table-auto border-separate border-spacing-2">
        <thead>
          <tr>
            <th></th>
            <th className="text-center">Current</th>
            <th className="text-center">Finished</th>
            <th className="text-center">Possible</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map((user) => (
            <LeaderboardUser key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

const LeaderboardUser = ({ user }: { user: User }) => {
  const imageUrl = user.profilePicture
    ? user.profilePicture
    : defaultProfilePic;
  return (
    <tr>
      <td>
        <div className="flex items-center">
          <img src={imageUrl} alt="" className="h-8 w-8 rounded-full mr-2" />
          <p className="pr-2">{user.nickname}</p>
        </div>
      </td>
      <td className="text-center bg-white rounded-md">1000</td>
      <td
        className={`text-center ${
          user.id === "2" ? "bg-yellow-300/50 rounded-lg" : ""
        }`}
      >
        800
      </td>
      <td
        className={`text-center ${
          user.id === "3" ? "bg-yellow-300/50 rounded-lg" : ""
        }`}
      >
        1200
      </td>
    </tr>
  );
};

export default Leaderboard;
