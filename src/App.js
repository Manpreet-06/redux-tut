import { Provider } from 'react-redux';
import './App.css';
import HomeContainer from "./Containers/HomeContainer";
import rootReducer from "./Services/Reducers/index";
import { legacy_createStore as createStore} from 'redux'

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <HomeContainer />
      </Provider>
    </div>
  );
}

export default App;
