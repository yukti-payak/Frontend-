// import React from 'react';
// import Navbar from '../Navbar';
// import Hero from './Hero';
// import Awards from './Awards';
// import Stats from './Stats';
// import Pricing from './Pricing';
// import Education from './Education';
// import OpenAccount from '../OpenAccount';
// import Footer from '../Footer';
// export default function HomePage(){
//     return(
//         <>
//         <Hero />
//         <Awards />
//         <Stats />
//         <Pricing />
//         <Education />
//         <OpenAccount />
//         </>
//     )
// }

import Navbar from "../Navbar";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
import Hero from "./Hero";

function HomePage({ setShowForm, setFormType }) {
  return (
    <>
      <Hero setShowForm={setShowForm} setFormType={setFormType} />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;