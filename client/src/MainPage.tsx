import React from "react";
import ExpandableSection from "./ExpandableSection";
import Leaderboard from "./Leaderboard";
import {
  Game,
  useGetRegularSeasonWeekQuery,
  useWeekForHomeQuery,
} from "./generated/graphql";
import PlayerBets from "./PlayerBets";
import { ClientGame } from "./client-types";

const GameWithBets = ({ game }: { game: ClientGame }) => {
  return (
    <div className="bg-white rounded-md w-80 p-2 relative m-2">
      <div className="flex items-center justify-center">
        <div className="bg-teal-500 text-lg text-white p-2 rounded-md mr-4 w-10 text-center absolute top-2 left-2">
          {game?.awayScore}
        </div>
        <h3>
          <span>{game?.awayTeam.nickname}</span>
          <span className="mx-2">@</span>
          <span>{game?.homeTeam.nickname}</span>
        </h3>
        <div className="bg-gray-400 text-lg text-white p-2 rounded-md ml-4 w-10 text-center absolute top-2 right-2">
          {game?.homeScore}
        </div>
      </div>
      <p className="text-center">–</p>
      {game?.bets ? <PlayerBets bets={game?.bets} /> : null}
    </div>
  );
};

const WeekWithGames = () => {
  const { loading, error, data } = useWeekForHomeQuery({});
  if (loading) {
    return <p>"Loading...";</p>;
  }
  if (error) {
    return <p>{`Error! ${error.message}`}</p>;
  }
  if (!data || !data.getRegularSeasonWeek) {
    return <p>No data</p>;
  }
  const games = data.getRegularSeasonWeek.games;
  return (
    <div>
      <ExpandableSection title="Currently playing" expandedInitially={true}>
        <div className="flex flex-wrap justify-center">
          {games.map((game) =>
            game ? <GameWithBets key={game.id} game={game} /> : null
          )}
        </div>
      </ExpandableSection>
      <ExpandableSection
        title="Upcoming games"
        expandedInitially={false}
      ></ExpandableSection>
      <ExpandableSection
        title="Ended"
        expandedInitially={false}
      ></ExpandableSection>
    </div>
  );
};

const MainPage = () => {
  return (
    <React.Fragment>
      <Leaderboard />
      <WeekWithGames />
    </React.Fragment>
  );
};

export default MainPage;
