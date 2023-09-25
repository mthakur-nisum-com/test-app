
import {Header,Content,Footer} from './components'
import { AppFunction as AppFunctions } from './ducks';
import './styles/app.scss';

const App= ()=> {
  return (
    <AppFunctions>
      <Header/>
      <Content/>
      <Footer/>
    </AppFunctions>
  );
}

export default App;
