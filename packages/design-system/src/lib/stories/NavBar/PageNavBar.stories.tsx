import { NavBar } from '../../../components/molecules/NavBar';

const meta = {
  title: 'ESD/NavBar/Page',
  component: NavBar.Page,
  argsType: {
    isSearch: {
      control: 'boolean',
    },
  },
};

export default meta;

export const Default = {
  args: {
    isSearch: false,
    title: 'Page',
  },
};
