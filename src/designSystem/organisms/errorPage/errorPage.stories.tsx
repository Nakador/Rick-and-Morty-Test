import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorPage } from './errorPage';

const meta = {
  title: 'Organisms/ErrorPage',
  component: ErrorPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    onReset: () => {},
  },
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "Something went wrong in this dimension.",
  },
};

export const CustomMessage: Story = {
  args: {
    message: "Failed to fetch characters from the Rick and Morty API.",
  },
};
