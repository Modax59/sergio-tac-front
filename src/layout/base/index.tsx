import React from 'react';

import Footer from '../footer/Footer';
import Navbar from '../header/Navbar';

type Props = {
  children?: React.ReactElement;
};

const Base = (props: Props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Base;
