import { Provider } from 'react-redux';
import { store } from '../state';

const App = (): JSX.Element => {
    return (
        <Provider store={store}>
            <div>
                <h1>Search Packages</h1>
            </div>
        </Provider>
    );
};

export default App;
