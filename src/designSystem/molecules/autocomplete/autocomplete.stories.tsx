import type { Meta, StoryObj } from '@storybook/react-vite';
import { Autocomplete } from './autocomplete';

const meta: Meta<typeof Autocomplete> = {
  title: 'Molecules/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    onSelect: { action: 'selected' },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const defaultOptions = [
  { value: 'rick', label: 'Rick Sanchez' },
  { value: 'morty', label: 'Morty Smith' },
  { value: 'summer', label: 'Summer Smith' },
  { value: 'beth', label: 'Beth Smith' },
  { value: 'jerry', label: 'Jerry Smith' },
];

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Search for a character...',
    options: defaultOptions,
  },
};

export const WithValue: Story = {
  args: {
    value: 'Rick',
    options: defaultOptions,
  },
};

export const Empty: Story = {
  args: {
    value: '',
    placeholder: 'No options available',
    options: [],
  },
};
