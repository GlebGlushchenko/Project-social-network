import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={268}
    viewBox="0 0 300 268"
    backgroundColor="#f3f3f3"
    foregroundColor="#BDBDBD"
    {...props}>
    <rect x="100" y="220" rx="3" ry="3" width="116" height="42" />
    <rect x="113" y="149" rx="3" ry="3" width="100" height="10" />
    <circle cx="160" cy="67" r="60" />
  </ContentLoader>
);

export default Loader;
