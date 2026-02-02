import type { Meta, StoryObj } from '@storybook/react-vite';
import { CharacterCard } from './characterCard';
import { MemoryRouter } from 'react-router-dom';
import styled from 'styled-components';

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
  episode: [],
  url: '',
  created: '',
};

const StoryWrapper = styled.div`
  width: 300px;
`;

const meta = {
  title: 'Organisms/CharacterCard',
  component: CharacterCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <StoryWrapper>
          <Story />
        </StoryWrapper>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CharacterCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    character: mockCharacter,
  },
};

export const Priority: Story = {
  args: {
    character: mockCharacter,
    priority: true,
  },
};
