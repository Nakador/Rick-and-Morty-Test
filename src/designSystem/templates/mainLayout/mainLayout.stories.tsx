import type { Meta, StoryObj } from '@storybook/react-vite';
import { MainLayout } from './mainLayout';
import styled from 'styled-components';

const meta = {
  title: 'Templates/MainLayout',
  component: MainLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MainLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const StoryContent = styled.div`
  padding: 2rem;
  background: #f0f0f0;
  border-radius: 8px;
`;

export const Default: Story = {
  args: {
    title: 'The Rick and Morty App',
    children: <StoryContent>Page Content Goes Here</StoryContent>,
  },
};
