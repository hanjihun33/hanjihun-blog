type NavChildren = {
  title: string;
  cLink: string;
};

type NavData = {
  mainTitle: string;
  link: string;
  children: NavChildren[];
};

export const navData: NavData[] = [
  {
    mainTitle: 'How is Hanjihun?',
    link: '/introduce',
    children: [{ title: 'Profile', cLink: '/profile' }],
  },
  {
    mainTitle: 'Archiving Develop',
    link: '/develop',
    children: [{ title: 'Blog', cLink: '/blogs' }],
  },
];
