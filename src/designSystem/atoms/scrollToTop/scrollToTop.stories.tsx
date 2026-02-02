import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollToTop } from './scrollToTop';

import styled from 'styled-components';

const StoryWrapper = styled.div`
  height: 200vh;
  padding: 20px;
`;

const meta = {
  title: 'Atoms/ScrollToTop',
  component: ScrollToTop,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StoryWrapper>
        <p>Scroll down to see the button!</p>
        <Story />
      </StoryWrapper>
    ),
  ],
} satisfies Meta<typeof ScrollToTop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
