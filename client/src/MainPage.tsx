import React from "react";
import ExpandableSection from "./ExpandableSection";
import Leaderboard from "./Leaderboard";
import eagles from "./assets/eagles.png";
import { Game } from "./generated/graphql";

const TestElement = () => <p>Hello!</p>;

const GameWithBets = ({ game }: { game: Game }) => {
  return (
    <div className="bg-white rounded-md max-w-xs p-2">
      <div className="flex items-center justify-center">
        <div className="bg-teal-500 text-lg text-white p-2 rounded-md mr-4 w-10 text-center">
          {game.awayScore}
        </div>
        <h3>
          <span>{game.awayTeam.nickname}</span>
          <span className="mx-2">@</span>
          <span>{game.homeTeam.nickname}</span>
        </h3>
        <div className="bg-gray-400 text-lg text-white p-2 rounded-md ml-4 w-10 text-center">
          {game.homeScore}
        </div>
      </div>
      <p className="text-center">–</p>
      <table className="table-auto border-separate border-spacing-x-6 border-spacing-y-1 m-auto">
        <tbody>
          <tr>
            <td>Karro</td>
            <td>
              <img src={eagles} alt="" className="h-6 opacity-40" />
            </td>

            <td className="text-center text-gray-400">(240)</td>
          </tr>
          <tr>
            <td>Thomas</td>
            <td>
              <img
                src={eagles}
                alt=""
                className="h-6                                                                                                                                                                          00"
              />
            </td>
            <td className=" bg-yellow-300/50 rounded-lg w-14 text-center">
              320
            </td>
          </tr>
          <tr>
            <td>Micke</td>
            <td>
              <img
                src={eagles}
                alt=""
                className="h-6                                                                                                                                                                          00"
              />
            </td>
            <td className=" bg-yellow-300/50 rounded-lg w-14 text-center">
              320
            </td>
          </tr>
          <tr>
            <td>Max</td>
            <td>
              <img src={eagles} alt="" className="h-6 opacity-40" />
            </td>

            <td className="text-center text-gray-400">(240)</td>
          </tr>
          <tr>
            <td>Jocke</td>
            <td>
              <img
                src={eagles}
                alt=""
                className="h-6                                                                                                                                                                          00"
              />
            </td>
            <td className=" bg-yellow-300/50 rounded-lg w-14 text-center">
              320
            </td>
          </tr>
          <tr>
            <td>Victor</td>
            <td>
              <img
                src={eagles}
                alt=""
                className="h-6                                                                                                                                                                          00"
              />
            </td>
            <td className=" bg-yellow-300/50 rounded-lg w-14 text-center">
              320
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const testGames: Game[] = [
  {
    id: "12",
    homeTeam: {
      nickname: "Bears",
    },
    awayTeam: {
      nickname: "Packers",
    },
    awayScore: 14,
    homeScore: 7,
  },
  {
    id: "12",
    homeTeam: {
      nickname: "Eagles",
    },
    awayTeam: {
      nickname: "Footballers",
    },
    awayScore: 28,
    homeScore: 0,
  },
];

const MainPage = () => {
  return (
    <React.Fragment>
      <Leaderboard />
      <ExpandableSection title="Ongoing games" expandedInitially={true}>
        {testGames.map((game) => (
          <GameWithBets key={game.id} game={game} />
        ))}
      </ExpandableSection>
      <ExpandableSection title="Upcoming games" expandedInitially={false}>
        <TestElement />
      </ExpandableSection>
      <ExpandableSection title="Finished games" expandedInitially={false}>
        <TestElement />
      </ExpandableSection>
    </React.Fragment>
  );
};

export default MainPage;
