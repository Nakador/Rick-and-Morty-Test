import type { Plugin } from 'vite';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

const characters: Character[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
    location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'unknown', url: '' },
    location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:50:21.651Z',
  },
  {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/6'],
    url: 'https://rickandmortyapi.com/api/character/3',
    created: '2017-11-04T19:09:56.428Z',
  },
  {
    id: 4,
    name: 'Beth Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/6'],
    url: 'https://rickandmortyapi.com/api/character/4',
    created: '2017-11-04T19:22:43.665Z',
  },
  {
    id: 5,
    name: 'Jerry Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/6'],
    url: 'https://rickandmortyapi.com/api/character/5',
    created: '2017-11-04T19:26:56.301Z',
  },
  {
    id: 6,
    name: 'Abadango Cluster Princess',
    status: 'Alive',
    species: 'Alien',
    type: '',
    gender: 'Female',
    origin: { name: 'Abadango', url: 'https://rickandmortyapi.com/api/location/2' },
    location: { name: 'Abadango', url: 'https://rickandmortyapi.com/api/location/2' },
    image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/27'],
    url: 'https://rickandmortyapi.com/api/character/6',
    created: '2017-11-04T19:50:28.250Z',
  },
  {
    id: 7,
    name: 'Abradolf Lincler',
    status: 'unknown',
    species: 'Human',
    type: 'Genetic experiment',
    gender: 'Male',
    origin: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    location: { name: 'Testicle Monster Dimension', url: 'https://rickandmortyapi.com/api/location/21' },
    image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/10'],
    url: 'https://rickandmortyapi.com/api/character/7',
    created: '2017-11-04T19:59:20.523Z',
  },
  {
    id: 8,
    name: 'Adjudicator Rick',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'unknown', url: '' },
    location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
    image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/28'],
    url: 'https://rickandmortyapi.com/api/character/8',
    created: '2017-11-04T20:03:34.737Z',
  },
  {
    id: 9,
    name: 'Agency Director',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/24'],
    url: 'https://rickandmortyapi.com/api/character/9',
    created: '2017-11-04T20:06:54.976Z',
  },
  {
    id: 10,
    name: 'Alan Rails',
    status: 'Dead',
    species: 'Human',
    type: 'Superhuman (Ghost trains powers)',
    gender: 'Male',
    origin: { name: 'unknown', url: '' },
    location: { name: "Worldender's lair", url: 'https://rickandmortyapi.com/api/location/4' },
    image: 'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/25'],
    url: 'https://rickandmortyapi.com/api/character/10',
    created: '2017-11-04T20:19:09.017Z',
  },
  {
    id: 11,
    name: 'Albert Einstein',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/12'],
    url: 'https://rickandmortyapi.com/api/character/11',
    created: '2017-11-04T20:20:20.965Z',
  },
  {
    id: 12,
    name: 'Alexander',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
    location: { name: 'Anatomy Park', url: 'https://rickandmortyapi.com/api/location/5' },
    image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/3'],
    url: 'https://rickandmortyapi.com/api/character/12',
    created: '2017-11-04T20:32:33.049Z',
  },
  {
    id: 13,
    name: 'Alien Googah',
    status: 'unknown',
    species: 'Alien',
    type: '',
    gender: 'unknown',
    origin: { name: 'unknown', url: '' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/31'],
    url: 'https://rickandmortyapi.com/api/character/13',
    created: '2017-11-04T20:33:30.779Z',
  },
  {
    id: 14,
    name: 'Alien Morty',
    status: 'unknown',
    species: 'Alien',
    type: '',
    gender: 'Male',
    origin: { name: 'unknown', url: '' },
    location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
    image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/10'],
    url: 'https://rickandmortyapi.com/api/character/14',
    created: '2017-11-04T20:51:31.373Z',
  },
  {
    id: 15,
    name: 'Alien Rick',
    status: 'unknown',
    species: 'Alien',
    type: '',
    gender: 'Male',
    origin: { name: 'unknown', url: '' },
    location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
    image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/10'],
    url: 'https://rickandmortyapi.com/api/character/15',
    created: '2017-11-04T20:56:13.215Z',
  },
  {
    id: 16,
    name: 'Amish Cyborg',
    status: 'Dead',
    species: 'Alien',
    type: 'Parasite',
    gender: 'Male',
    origin: { name: 'unknown', url: '' },
    location: { name: 'Earth (Replacement Dimension)', url: 'https://rickandmortyapi.com/api/location/20' },
    image: 'https://rickandmortyapi.com/api/character/avatar/16.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/15'],
    url: 'https://rickandmortyapi.com/api/character/16',
    created: '2017-11-04T21:12:45.235Z',
  },
  {
    id: 17,
    name: 'Annie',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
    location: { name: 'Anatomy Park', url: 'https://rickandmortyapi.com/api/location/5' },
    image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/3'],
    url: 'https://rickandmortyapi.com/api/character/17',
    created: '2017-11-04T22:21:24.481Z',
  },
  {
    id: 18,
    name: 'Antenna Morty',
    status: 'Alive',
    species: 'Human',
    type: 'Human with antennae',
    gender: 'Male',
    origin: { name: 'unknown', url: '' },
    location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
    image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/10'],
    url: 'https://rickandmortyapi.com/api/character/18',
    created: '2017-11-04T22:25:29.008Z',
  },
  {
    id: 19,
    name: 'Antenna Rick',
    status: 'unknown',
    species: 'Human',
    type: 'Human with antennae',
    gender: 'Male',
    origin: { name: 'unknown', url: '' },
    location: { name: 'unknown', url: '' },
    image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/10'],
    url: 'https://rickandmortyapi.com/api/character/19',
    created: '2017-11-04T22:28:13.756Z',
  },
  {
    id: 20,
    name: 'Ants in my Eyes Johnson',
    status: 'unknown',
    species: 'Human',
    type: 'Human with ants in his eyes',
    gender: 'Male',
    origin: { name: 'unknown', url: '' },
    location: { name: 'Interdimensional Cable', url: 'https://rickandmortyapi.com/api/location/6' },
    image: 'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/8'],
    url: 'https://rickandmortyapi.com/api/character/20',
    created: '2017-11-04T22:34:53.659Z',
  },
];

const PAGE_SIZE = 20;

function filterCharacters(chars: Character[], params: URLSearchParams): Character[] {
  let filtered = chars;

  const name = params.get('name');
  if (name) {
    filtered = filtered.filter((c) => c.name.toLowerCase().includes(name.toLowerCase()));
  }

  const status = params.get('status');
  if (status) {
    filtered = filtered.filter((c) => c.status.toLowerCase() === status.toLowerCase());
  }

  const species = params.get('species');
  if (species) {
    filtered = filtered.filter((c) => c.species.toLowerCase().includes(species.toLowerCase()));
  }

  const type = params.get('type');
  if (type) {
    filtered = filtered.filter((c) => c.type.toLowerCase().includes(type.toLowerCase()));
  }

  const gender = params.get('gender');
  if (gender) {
    filtered = filtered.filter((c) => c.gender.toLowerCase() === gender.toLowerCase());
  }

  return filtered;
}

export function mockApiPlugin(): Plugin {
  return {
    name: 'mock-rick-and-morty-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url!, `http://${req.headers.host}`);

        // GET /api/character/:id
        const characterByIdMatch = url.pathname.match(/^\/api\/character\/(\d+)$/);
        if (characterByIdMatch && req.method === 'GET') {
          const id = parseInt(characterByIdMatch[1], 10);
          const character = characters.find((c) => c.id === id);
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', '*');
          if (character) {
            res.statusCode = 200;
            res.end(JSON.stringify(character));
          } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Character not found' }));
          }
          return;
        }

        // GET /api/character
        if (url.pathname === '/api/character' && req.method === 'GET') {
          const filtered = filterCharacters(characters, url.searchParams);
          const page = parseInt(url.searchParams.get('page') || '1', 10);
          const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
          const start = (page - 1) * PAGE_SIZE;
          const paged = filtered.slice(start, start + PAGE_SIZE);

          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', '*');

          if (filtered.length === 0) {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'There is nothing here' }));
            return;
          }

          res.statusCode = 200;
          res.end(
            JSON.stringify({
              info: {
                count: filtered.length,
                pages: totalPages,
                next: page < totalPages ? `http://${req.headers.host}/api/character?page=${page + 1}` : null,
                prev: page > 1 ? `http://${req.headers.host}/api/character?page=${page - 1}` : null,
              },
              results: paged,
            })
          );
          return;
        }

        next();
      });
    },
  };
}
