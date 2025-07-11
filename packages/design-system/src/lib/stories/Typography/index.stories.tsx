import { Typography } from '../../../components/atoms/Typography';

const meta = {
  title: 'ESD/typography',
  component: Typography,
  argTypes: {
    fontSize: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'large500',
        'large400',
        'medium500',
        'medium400',
        'small500',
        'small400',
        'exSmall500',
        'exSmall400',
      ],
    },
  },
};

export default meta;

export const Header1 = {
  args: {
    children: 'H1 Text',
    fontSize: 'h1',
    color: 'black',
  },
};

export const Header2 = {
  args: {
    children: 'H2 Text',
    fontSize: 'h2',
    color: 'black',
  },
};

export const Header3 = {
  args: {
    children: 'H3 Text',
    fontSize: 'h3',
    color: 'black',
  },
};

export const Header4 = {
  args: {
    children: 'H4 Text',
    fontSize: 'h4',
    color: 'black',
  },
};

export const BodyLarge500 = {
  args: {
    children: 'large500 Text',
    fontSize: 'large500',
    color: 'black',
  },
};

export const BodyLarge400 = {
  args: {
    children: 'large400 Text',
    fontSize: 'large400',
    color: 'black',
  },
};

export const BodyMedium500 = {
  args: {
    children: 'medium500 Text',
    fontSize: 'medium500',
    color: 'black',
  },
};

export const BodyMedium400 = {
  args: {
    children: 'medium400 Text',
    fontSize: 'medium400',
    color: 'black',
  },
};

export const BodySmall500 = {
  args: {
    children: 'small500 Text',
    fontSize: 'small500',
    color: 'black',
  },
};

export const BodySmall400 = {
  args: {
    children: 'small400 Text',
    fontSize: 'small400',
    color: 'black',
  },
};

export const BodyExsmall500 = {
  args: {
    children: 'exsmall500 Text',
    fontSize: 'exSmall500',
    color: 'black',
  },
};

export const BodyExsmall400 = {
  args: {
    children: 'exsmall400 Text',
    fontSize: 'exSmall400',
    color: 'black',
  },
};
