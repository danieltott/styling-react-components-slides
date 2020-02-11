import theme from 'mdx-deck/themes';
import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark';

export default {
  ...theme,
  prism: {
    ...theme.prism,
    style: atomDark
  }
};
