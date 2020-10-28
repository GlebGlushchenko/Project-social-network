import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={264}
    viewBox="0 0 260 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="64" y="196" rx="3" ry="3" width="88" height="6" />
    <circle cx="106" cy="85" r="66" />
    <rect x="64" y="223" rx="3" ry="3" width="88" height="24" />
    <rect x="65" y="176" rx="3" ry="3" width="88" height="6" />
  </ContentLoader>
);

export default Loader;
