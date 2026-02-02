export interface Location {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown' | string;
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown' | string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface Info<T> {
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results?: T;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusMessage: string;
}

export interface CharacterFilter {
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  page?: number;
}

export type CharactersResponse = Info<Character[]>;
