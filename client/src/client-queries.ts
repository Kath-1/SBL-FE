import { gql } from "@apollo/client";

export const GET_REGULAR_SEASON_WEEK = gql`
  query GetRegularSeasonWeek($season: Int, $week: Int) {
    getRegularSeasonWeek(season: $season, week: $week) {
      id
      season
      week
      round
      state
      teamsOnBye
      stake
      games {
        id
        round
        season
        seasonType
        isoKickoff
        stadium
        awayTeam {
          id
          shortName
          fullName
          city
          nickname
          conference
          division
          color1
          color2
          color3
          color4
          logo
          wordmark
        }
        homeTeam {
          id
          shortName
          fullName
          city
          nickname
          conference
          division
          color1
          color2
          color3
          color4
          logo
          wordmark
        }
        awayCoach
        homeCoach
        awayScore
        homeScore
        quarter
        awayQuarterScores
        homeQuarterScores
        winner
        teamInPossession
        down
        yardsToGo
        ballOnSide
        ballOnYardLine
        timeoutsLeftAway
        timeoutsLeftHome
        gameState
        bets {
          id
          gameId
          awayOdds
          homeOdds
          bettingState
          bettingType
          player
          pick
          stake
          score
          liveScore
          potentialScore
          locked
          winner
          correct
        }
      }
    }
  }
`;
