import axios from 'axios';
import type { Character, Info, ApiResponse, CharacterFilter, CharactersResponse } from './types';

export type { Character, CharacterFilter, CharactersResponse };

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async <T = Record<string, string | number | boolean>>(
  params?: T
): Promise<
  ApiResponse<Info<Character[]>> | { data: null; status: number; statusMessage: string }
> => {
  try {
    const response = await axios.get(`${BASE_URL}/character`, { params });
    return {
      data: response.data,
      status: response.status,
      statusMessage: response.statusText,
    };
  } catch (err) {
    const error = err as { response?: { status: number }; message: string };
    return {
      data: null,
      status: error.response?.status || 500,
      statusMessage: error.message,
    };
  }
};

export const getCharacter = async (
  id: number
): Promise<ApiResponse<Character> | { data: null; status: number; statusMessage: string }> => {
  try {
    const response = await axios.get(`${BASE_URL}/character/${id}`);
    return {
      data: response.data,
      status: response.status,
      statusMessage: response.statusText,
    };
  } catch (err) {
    const error = err as { response?: { status: number }; message: string };
    return {
      data: null,
      status: error.response?.status || 500,
      statusMessage: error.message,
    };
  }
};
