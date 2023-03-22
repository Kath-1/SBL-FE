import { ClientBet } from "./client-types";
import { GameBet } from "./generated/graphql";

const PlayerBet = ({ bet }: { bet: ClientBet }) => {
  return (
    <>
      <tr>
        <td>{bet.player}</td>
        <td>
          <img
            src="https://static.www.nfl.com/image/private/f_auto/league/teguylrnqqmfcwxvcmmz"
            alt=""
            // className="h-6 opacity-40"

            className={`h-6 ${bet.correct ? "" : "opacity-40"}`}
          />
        </td>
        <td
          className={` ${
            bet.correct ? "bg-yellow-300/50" : "text-gray-400"
          }  rounded-lg w-14 text-center`}
        >
          {bet.correct ? bet.potentialScore : `(${bet.potentialScore})`}
        </td>
      </tr>
    </>
  );
};

const PlayerBets = ({ bets }: { bets: ClientBet[] | null }) => {
  return (
    <table className="table-auto border-separate border-spacing-x-6 border-spacing-y-1 m-auto">
      <tbody>
        {bets?.map((bet) => (
          <PlayerBet bet={bet} key={bet.id} />
        ))}
      </tbody>
    </table>
  );
};

export default PlayerBets;
