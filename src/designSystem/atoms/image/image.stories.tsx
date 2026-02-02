import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImageAtom } from './image';

const meta = {
  title: 'Atoms/Image',
  component: ImageAtom,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    alt: 'Rick Sanchez',
    width: 200,
    height: 200,
  },
};

export const FullWidth: Story = {
  args: {
    src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    alt: 'Morty Smith',
    width: '100%',
  },
};
