import { GameBet } from "./generated/graphql";

const PlayerBet = ({ bet }: { bet: GameBet }) => {
  return (
    <>
      <tr>
        <td>{bet.player}</td>
        <td>
          <img
            src="https://static.www.nfl.com/image/private/f_auto/league/teguylrnqqmfcwxvcmmz"
            alt=""
            // className="h-6 opacity-40"
            className="h-6 "
          />
        </td>
        <td className=" bg-yellow-300/50 rounded-lg w-14 text-center">320</td>
      </tr>
    </>
  );
};

const PlayerBets = ({ bets }: { bets: GameBet[] | null }) => {
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
