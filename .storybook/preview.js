import { RouterContext } from 'next/dist/shared/lib/router-context';
import '../src/styles/globals.css';
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'gray',
        value: '#EFF1F2',
      },
      {
        name: 'dark',
        value: '#0E1212',
      },
    ],
  },
};
