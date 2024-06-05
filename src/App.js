
import './App.css';
import Navbar from  "./components/Navbar";
import BackgroundSection from './components/BackgroundSection'
import CrestInfo from './components/Crestinfo';

function App() {
  return (
    <div  className="bg-gradient-to-r from-green-300 to-purple-400">
    <div className="bg-gradient-to-br from-slate-800 via-blue-400 to-red-300"> 
     <Navbar/>
 <BackgroundSection/>
 <CrestInfo/>  
 </div>
 
   </div>
  );
}

export default App;
