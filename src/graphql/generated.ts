import { gql } from '@apollo/client'

// Types
export interface LoginInput {
  email: string
  password: string
}

export interface RegisterInput {
  email: string
  username: string
  password: string
  firstName?: string
  lastName?: string
}

export interface User {
  id: string
  email: string
  username: string
}

export interface AuthPayload {
  token: string
  user: User
}

export interface LoginMutation {
  login: AuthPayload
}

export interface RegisterMutation {
  register: AuthPayload
}

export enum OAuth2Provider {
  GOOGLE = 'GOOGLE',
  FACEBOOK = 'FACEBOOK',
  APPLE = 'APPLE'
}

export interface OAuth2LoginUrl {
  provider: OAuth2Provider
  loginUrl: string
}

export interface GetOAuth2LoginUrlMutation {
  getOAuth2LoginUrl: OAuth2LoginUrl
}

export const LOGIN = gql`
  mutation LOGIN($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        email
        username
      }
    }
  }
`

export const REGISTER = gql`
  mutation REGISTER($input: RegisterInput!) {
    register(input: $input) {
      token
      user {
        id
        email
        username
      }
    }
  }
`

export const ME = gql`
  query ME {
    me {
      id
      email
      username
    }
  }
`

export const GET_OAUTH2_LOGIN_URL = gql`
  mutation GET_OAUTH2_LOGIN_URL($provider: OAuth2Provider!) {
    getOAuth2LoginUrl(provider: $provider) {
      provider
      loginUrl
    }
  }
`

export const GET_MOVIES = gql`
  query GET_MOVIES($page: Int, $limit: Int, $search: String) {
    movies(page: $page, limit: $limit, search: $search) {
      id
      title
      overview
      releaseDate
      posterPath
      backdropPath
      voteAverage
      voteCount
      genres
    }
  }
`

export const GET_MOVIE = gql`
  query GET_MOVIE($id: ID!) {
    movie(id: $id) {
      id
      title
      overview
      releaseDate
      posterPath
      backdropPath
      voteAverage
      voteCount
      genres
      runtime
      budget
      revenue
    }
  }
`

export const ADD_TO_WATCHLIST = gql`
  mutation ADD_TO_WATCHLIST($movieId: ID!) {
    addToWatchlist(movieId: $movieId) {
      id
      movie {
        id
        title
        posterPath
      }
    }
  }
`

export const REMOVE_FROM_WATCHLIST = gql`
  mutation REMOVE_FROM_WATCHLIST($movieId: ID!) {
    removeFromWatchlist(movieId: $movieId)
  }
`

export const GET_WATCHLIST = gql`
  query GET_WATCHLIST {
    watchlist {
      id
      movie {
        id
        title
        overview
        releaseDate
        posterPath
        voteAverage
      }
      addedAt
    }
  }
`

export interface User {
  id: string
  email: string
  username: string
}

export interface LoginInput {
  email: string
  password: string
}

export interface RegisterInput {
  email: string
  username: string
  password: string
}

export interface LoginMutation {
  login: {
    token: string
    user: User
  }
}

export interface RegisterMutation {
  register: {
    token: string
    user: User
  }
}

export interface Movie {
  id: string
  title: string
  overview: string
  releaseDate: string
  posterPath?: string
  backdropPath?: string
  voteAverage: number
  voteCount: number
  genres: string[]
  runtime?: number
  budget?: number
  revenue?: number
}

export interface WatchlistItem {
  id: string
  movie: Movie
  addedAt: string
}