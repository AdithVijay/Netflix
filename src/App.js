import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { action,Trending,originals,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries} from './Components/Constants/Contant';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost title={'Trending'} code={Trending} />
      <RowPost title={'Action'} code={action} isSmall/>
      <RowPost title={'Comedy Movies'} code={ComedyMovies} isSmall/>
      <RowPost title={'Horror Movies'} code={HorrorMovies} />
      <RowPost title={'Originals'} code={originals} isSmall/>
      <RowPost title={'Romance Movies'} code={RomanceMovies} isSmall/>
      <RowPost title={'Documentaries'} code={Documentaries} />
    </div>  
  );
}

export default App;
