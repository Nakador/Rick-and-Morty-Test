import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex } from './flex';
import styled from 'styled-components';

const BoxItem = styled.div<{ $bg: string }>`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.$bg};
`;

const DemoContainer = styled(Flex)`
  width: 300px;
  height: 100px;
  border: 1px dashed grey;
`;

const meta = {
  title: 'Atoms/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const colors = ['#FF4136', '#2ECC40', '#0074D9'];

export const Default: Story = {
  render: (args) => (
    <Flex {...args}>
      {colors.map((color) => (
        <BoxItem key={color} $bg={color} />
      ))}
    </Flex>
  ),
  args: {
    gap: '1rem',
  },
};

export const Column: Story = {
  render: (args) => (
    <Flex {...args}>
      {colors.map((color) => (
        <BoxItem key={color} $bg={color} />
      ))}
    </Flex>
  ),
  args: {
    direction: 'column',
    gap: '1rem',
  },
};

export const Centered: Story = {
  render: (args) => (
    <DemoContainer {...args}>
      <BoxItem $bg="#FF4136" />
      <BoxItem $bg="#2ECC40" />
    </DemoContainer>
  ),
  args: {
    gap: '20px',
    align: 'center',
    justify: 'center',
  },
};
