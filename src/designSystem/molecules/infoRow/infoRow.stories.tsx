import type { Meta, StoryObj } from '@storybook/react-vite';
import { InfoRow } from './infoRow';

const meta = {
  title: 'Molecules/InfoRow',
  component: InfoRow,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    id: { control: 'text' },
  },
} satisfies Meta<typeof InfoRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Status',
    value: 'Alive',
    id: 'info-row-default',
  },
};

export const WithComplexValue: Story = {
  args: {
    label: 'Location',
    value: <span>Earth (C-137)</span>,
    id: 'info-row-complex',
  },
};
