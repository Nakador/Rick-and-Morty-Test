import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from './box';

const meta = {
  title: 'Atoms/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    padding: { control: 'text' },
    margin: { control: 'text' },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a Box',
    style: { border: '1px solid black' },
    padding: '1rem',
  },
};

export const WithMargin: Story = {
  args: {
    children: 'Box with Margin',
    style: { border: '1px solid black', backgroundColor: '#f0f0f0' },
    padding: '1rem',
    margin: '2rem',
  },
};
