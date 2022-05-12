import React from 'react';

import Footer from '../footer/Footer';
import Navbar from '../header/Navbar';
import Headerpromo from '../headerpromo/HeaderPromo';

type Props = {
  children?: React.ReactElement;
};

const Base = (props: Props) => {
  return (
    <>
      <Headerpromo />
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Base;
