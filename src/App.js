
import './App.css';

function App() {

 function handleNameChange(){
   const names = ["React","Angular","Spring"]
   const int = Math.floor(Math.random()*3);
   return names[int];
 }

  return (
      <p>Let's Learn {handleNameChange()} Framework</p>
  );
}

export default App;
