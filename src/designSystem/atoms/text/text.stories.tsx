import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './text';
import styled from 'styled-components';

const meta = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: { 
      control: 'select', 
      options: ['h1', 'h2', 'h3', 'p', 'span'] 
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
    },
    weight: {
      control: 'select',
      options: ['400', '500', '600', '700', '900']
    },
    color: {
      control: 'select',
      options: ['text', 'textSecondary', 'primary', 'accent', 'error']
    }
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a default paragraph text.',
    color: 'primary',
  },
};

export const Heading1: Story = {
  args: {
    as: 'h1',
    size: 'xxl',
    weight: '900',
    color: 'primary',
    children: 'Main Heading',
  },
};

export const Subheading: Story = {
  args: {
    as: 'h2',
    size: 'lg',
    weight: '700',
    color: 'primary',
    children: 'Subheading Text',
  },
};

const Container = styled.div`
  width: 200px;
  border: 1px solid #ccc;
`;

export const Ellipsis: Story = {
  args: {
    children: 'This is a very long text that should be truncated with an ellipsis because it exceeds the container width.',
    ellipsis: true,
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};
