import { makeStyles } from '@material-ui/core';
import Drawer from './components/Drawer'
import './App.css'
const useStyles = makeStyles((theme) => ({
  App:{
    fontFamily:'Poppins'
  }
}))
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Drawer/>
    </div>
  );
}

export default App;
