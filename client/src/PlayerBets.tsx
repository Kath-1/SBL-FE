import { ClientBet } from "./client-types";

const PlayerBet = ({ bet, logo }: { bet: ClientBet; logo: string }) => {
  return (
    <>
      <tr>
        <td>{bet.player}</td>
        <td>
          <img
            src={logo}
            alt=""
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

const PlayerBets = ({
  bets,
  homeLogo,
  awayLogo,
}: {
  bets: ClientBet[] | null;
  homeLogo: string;
  awayLogo: string;
}) => {
  return (
    <table className="table-auto border-separate border-spacing-x-6 border-spacing-y-1 m-auto">
      <tbody>
        {bets?.map((bet) => (
          <PlayerBet
            bet={bet}
            key={bet.id}
            logo={bet.pick === "AWAY" ? awayLogo : homeLogo}
          />
        ))}
      </tbody>
    </table>
  );
};

export default PlayerBets;
