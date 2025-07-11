import { Button } from '../../../components/atoms/Button';

const meta = {
  title: 'ESD/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['xsmall', 'small', 'medium', 'large'],
    },
  },
};

export default meta;

export const Xsmall = {
  args: {
    size: 'xsmall',
    children: 'Button',
    style: { width: 200 },
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'Button',
    style: { width: 200 },
  },
};

export const medium = {
  args: {
    size: 'medium',
    children: 'Button',
    style: { width: 200 },
  },
};

export const Large = {
  args: {
    size: 'large',
    children: 'Button',
    style: { width: 200 },
  },
};
