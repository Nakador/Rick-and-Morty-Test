import type { Meta, StoryObj } from '@storybook/react-vite';
import { CharacterDetailsCard } from './characterDetailsCard';

const mockCharacter = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive' as const,
  species: 'Human',
  type: '',
  gender: 'Male' as const,
  origin: { name: 'Earth', url: '' },
  location: { name: 'Earth', url: '' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: Array(51).fill(''),
  url: '',
  created: '',
};

const meta = {
  title: 'Organisms/CharacterDetailsCard',
  component: CharacterDetailsCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CharacterDetailsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    character: mockCharacter,
  },
};
