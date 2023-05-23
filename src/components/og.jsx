import React from 'react';
import { Helmet } from 'react-helmet';

const OgImage = ({ imageUrl }) => {
  return (
    <Helmet>
      <div className="hi"></div>
      <meta
        property="og:image"
        content="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0f/40/75/17.jpg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
  );
};

export default OgImage;
