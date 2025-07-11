import { NavBar } from '../../../components/molecules/NavBar';

const meta = {
  title: 'ESD/NavBar/Home',
  component: NavBar.Home,
  argsTypes: {
    isSearch: {
      constrol: 'boolean',
    },
  },
};

export default meta;

export const Default = {
  args: {
    isSearch: false,
  },
};
