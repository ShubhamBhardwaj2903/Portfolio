import React from 'react';

const FigmaPrototype = () => {
  // Replace 'YOUR_FIGMA_PROTOTYPE_URL' with your actual Figma prototype URL
  const figmaPrototypeUrl = 'https://www.figma.com/proto/93YI3eXLdoca6oIZQD9hvT/Sam-Wong-Dong?page-id=0%3A1&node-id=1-2&viewport=461%2C284%2C0.22&t=LV09vl4Ztj8CooMT-1&scaling=scale-down-width';

  return (
    <div className="figma-prototype">
      <iframe
        src={figmaPrototypeUrl}
        title="Figma Prototype"
        width="800"
        height="600"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default FigmaPrototype;
