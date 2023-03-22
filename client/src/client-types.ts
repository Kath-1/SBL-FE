export interface ClientGame {
  id: string;
  awayTeam: ClientTeam;
  homeTeam: ClientTeam;
  awayScore?: number | null | undefined;
  homeScore?: number | null | undefined;
  bets: ClientBet[];
}

export interface ClientTeam {
  id: string;
  nickname: string;
  logo: string;
  wordmark: string;
}

export interface ClientBet {
  id: string;
  player: string;
  pick: string;
  potentialScore?: number | null | undefined;
  locked?: boolean | null | undefined;
  correct?: boolean | null | undefined;
}
