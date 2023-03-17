import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum BettingState {
  Closed = 'CLOSED',
  NotOpened = 'NOT_OPENED',
  Open = 'OPEN',
  Paid = 'PAID'
}

export enum BettingType {
  NoOdds = 'NO_ODDS',
  Odds = 'ODDS',
  Wallet = 'WALLET'
}

export enum Conference {
  Afc = 'AFC',
  Nfc = 'NFC'
}

export type Game = {
  __typename?: 'Game';
  awayCoach?: Maybe<Scalars['String']>;
  awayQuarterScores?: Maybe<Array<Scalars['Int']>>;
  awayScore?: Maybe<Scalars['Int']>;
  awayTeam: Team;
  ballOnSide?: Maybe<Scalars['String']>;
  ballOnYardLine?: Maybe<Scalars['Int']>;
  bets: Array<GameBet>;
  down?: Maybe<Scalars['Int']>;
  gameState: GameState;
  homeCoach?: Maybe<Scalars['String']>;
  homeQuarterScores?: Maybe<Array<Scalars['Int']>>;
  homeScore?: Maybe<Scalars['Int']>;
  homeTeam: Team;
  id: Scalars['ID'];
  isoKickoff?: Maybe<Scalars['Int']>;
  quarter?: Maybe<Quarter>;
  round: Round;
  season: Scalars['Int'];
  seasonType: SeasonType;
  stadium?: Maybe<Scalars['String']>;
  teamInPossession?: Maybe<Scalars['String']>;
  timeoutsLeftAway?: Maybe<Scalars['Int']>;
  timeoutsLeftHome?: Maybe<Scalars['Int']>;
  winner?: Maybe<Side>;
  yardsToGo?: Maybe<Scalars['Int']>;
};

export type GameBet = {
  __typename?: 'GameBet';
  awayOdds?: Maybe<Scalars['Float']>;
  bettingState: BettingState;
  bettingType: BettingType;
  correct?: Maybe<Scalars['Boolean']>;
  gameId: Scalars['ID'];
  homeOdds?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  liveScore?: Maybe<Scalars['Int']>;
  locked: Scalars['Boolean'];
  pick: Side;
  player: Scalars['String'];
  potentialScore?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  stake?: Maybe<Scalars['Int']>;
  winner?: Maybe<Side>;
};

export type GameBetInput = {
  id: Scalars['ID'];
  pick: Side;
  stake?: InputMaybe<Scalars['Int']>;
};

export enum GameState {
  Finished = 'FINISHED',
  Ongoing = 'ONGOING',
  Upcoming = 'UPCOMING'
}

export type Mutation = {
  __typename?: 'Mutation';
  lockGameBets?: Maybe<Scalars['Boolean']>;
  saveGameBets?: Maybe<Scalars['Boolean']>;
};


export type MutationLockGameBetsArgs = {
  gameBets: Array<GameBetInput>;
};


export type MutationSaveGameBetsArgs = {
  gameBets: Array<GameBetInput>;
};

export enum Quarter {
  Final = 'FINAL',
  FinalOt = 'FINAL_OT',
  Halftime = 'HALFTIME',
  Ot = 'OT',
  Pregame = 'PREGAME',
  Q1 = 'Q1',
  Q2 = 'Q2',
  Q3 = 'Q3',
  Q4 = 'Q4'
}

export type Query = {
  __typename?: 'Query';
  getGame?: Maybe<Game>;
  getGames?: Maybe<Array<Maybe<Game>>>;
  getRegularSeasonLeaderboard?: Maybe<RegularSeasonLeaderboard>;
  getRegularSeasonWeek?: Maybe<RegularSeasonWeek>;
  getTeam?: Maybe<Team>;
  getTeams: Array<Maybe<Team>>;
};


export type QueryGetGameArgs = {
  id: Scalars['ID'];
};


export type QueryGetGamesArgs = {
  ids: Array<Scalars['ID']>;
};


export type QueryGetRegularSeasonLeaderboardArgs = {
  season?: InputMaybe<Scalars['Int']>;
  week?: InputMaybe<Scalars['Int']>;
};


export type QueryGetRegularSeasonWeekArgs = {
  onlyPlayerBets?: InputMaybe<Scalars['Boolean']>;
  season?: InputMaybe<Scalars['Int']>;
  week?: InputMaybe<Scalars['Int']>;
};


export type QueryGetTeamArgs = {
  id: Scalars['ID'];
};


export type QueryGetTeamsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  includeHistorical?: InputMaybe<Scalars['Boolean']>;
};

export type RegularSeasonLeaderboard = {
  __typename?: 'RegularSeasonLeaderboard';
  id: Scalars['ID'];
  numberOfGames: Scalars['Int'];
  round: Round;
  scorecards: Array<Maybe<Scorecard>>;
  season: Scalars['Int'];
  totalNumberOfGames?: Maybe<Scalars['Int']>;
  totalScoreMax: Scalars['Int'];
  totalScoreMaxWeighted: Scalars['Int'];
  totalScoreOnlyAwayTeams: Scalars['Int'];
  totalScoreOnlyFavorites: Scalars['Int'];
  totalScoreOnlyHomeTeams: Scalars['Int'];
  totalScoreOnlyUnderdogs: Scalars['Int'];
  week: Scalars['Int'];
  weekScoreMax: Scalars['Int'];
  weekScoreMaxWeighted: Scalars['Int'];
  weekScoreOnlyAwayTeams: Scalars['Int'];
  weekScoreOnlyFavorites: Scalars['Int'];
  weekScoreOnlyHomeTeams: Scalars['Int'];
  weekScoreOnlyUnderdogs: Scalars['Int'];
};

export type RegularSeasonWeek = {
  __typename?: 'RegularSeasonWeek';
  games: Array<Maybe<Game>>;
  id: Scalars['ID'];
  round: Round;
  season: Scalars['Int'];
  stake?: Maybe<Scalars['Int']>;
  state: WeekState;
  teamsOnBye: Array<Maybe<Scalars['String']>>;
  week: Scalars['Int'];
};

export enum Round {
  PostConf = 'POST_CONF',
  PostDiv = 'POST_DIV',
  PostSb = 'POST_SB',
  PostWc = 'POST_WC',
  Reg1 = 'REG1',
  Reg2 = 'REG2',
  Reg3 = 'REG3',
  Reg4 = 'REG4',
  Reg5 = 'REG5',
  Reg6 = 'REG6',
  Reg7 = 'REG7',
  Reg8 = 'REG8',
  Reg9 = 'REG9',
  Reg10 = 'REG10',
  Reg11 = 'REG11',
  Reg12 = 'REG12',
  Reg13 = 'REG13',
  Reg14 = 'REG14',
  Reg15 = 'REG15',
  Reg16 = 'REG16',
  Reg17 = 'REG17',
  Reg18 = 'REG18'
}

export type Scorecard = {
  __typename?: 'Scorecard';
  againstTotalScoreMax: Scalars['Int'];
  againstTotalScoreMaxPercent: Scalars['Float'];
  againstTotalScoreMaxWeighted: Scalars['Int'];
  againstTotalScoreMaxWeightedPercent: Scalars['Float'];
  againstTotalScoreOnlyAwayTeams: Scalars['Int'];
  againstTotalScoreOnlyAwayTeamsPercent: Scalars['Float'];
  againstTotalScoreOnlyFavorites: Scalars['Int'];
  againstTotalScoreOnlyFavoritesPercent: Scalars['Float'];
  againstTotalScoreOnlyHomeTeams: Scalars['Int'];
  againstTotalScoreOnlyHomeTeamsPercent: Scalars['Float'];
  againstTotalScoreOnlyUnderdogs: Scalars['Int'];
  againstTotalScoreOnlyUnderdogsPercent: Scalars['Float'];
  againstTotalScoreWeighted: Scalars['Int'];
  againstTotalScoreWeightedPercent: Scalars['Float'];
  againstWeekScoreMax: Scalars['Int'];
  againstWeekScoreMaxPercent: Scalars['Float'];
  againstWeekScoreMaxWeighted: Scalars['Int'];
  againstWeekScoreMaxWeightedPercent: Scalars['Float'];
  againstWeekScoreOnlyAwayTeams: Scalars['Int'];
  againstWeekScoreOnlyAwayTeamsPercent: Scalars['Float'];
  againstWeekScoreOnlyFavorites: Scalars['Int'];
  againstWeekScoreOnlyFavoritesPercent: Scalars['Float'];
  againstWeekScoreOnlyHomeTeams: Scalars['Int'];
  againstWeekScoreOnlyHomeTeamsPercent: Scalars['Float'];
  againstWeekScoreOnlyUnderdogs: Scalars['Int'];
  againstWeekScoreOnlyUnderdogsPercent: Scalars['Float'];
  againstWeekScoreWeighted: Scalars['Int'];
  againstWeekScoreWeightedPercent: Scalars['Float'];
  id: Scalars['ID'];
  player: Scalars['String'];
  totalCorrect: Scalars['Int'];
  totalCorrectPercent: Scalars['Float'];
  totalScore: Scalars['Int'];
  totalScoreLive?: Maybe<Scalars['Int']>;
  totalScorePossible?: Maybe<Scalars['Int']>;
  totalScoreTheoretical: Scalars['Int'];
  totalScoreWeighted: Scalars['Int'];
  weekCorrect: Scalars['Int'];
  weekCorrectPercent: Scalars['Float'];
  weekScore: Scalars['Int'];
  weekScoreLive?: Maybe<Scalars['Int']>;
  weekScorePossible?: Maybe<Scalars['Int']>;
  weekScoreTheoretical: Scalars['Int'];
  weekScoreWeighted: Scalars['Int'];
};

export enum SeasonType {
  Post = 'POST',
  Pre = 'PRE',
  Regular = 'REGULAR'
}

export enum Side {
  Away = 'AWAY',
  Home = 'HOME',
  None = 'NONE',
  Tie = 'TIE'
}

export type Team = {
  __typename?: 'Team';
  city: Scalars['String'];
  color1: Scalars['String'];
  color2: Scalars['String'];
  color3?: Maybe<Scalars['String']>;
  color4?: Maybe<Scalars['String']>;
  conference: Conference;
  division: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['ID'];
  logo: Scalars['String'];
  nickname: Scalars['String'];
  shortName: Scalars['String'];
  wordmark: Scalars['String'];
};

export enum WeekState {
  Current = 'CURRENT',
  Past = 'PAST',
  Upcoming = 'UPCOMING'
}
