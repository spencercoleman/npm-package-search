import { Provider } from 'react-redux';
import { store } from '../state';
import PackagesList from './PackagesList';

const App = (): JSX.Element => {
    return (
        <Provider store={store}>
            <div>
                <h1>Search Packages</h1>
                <PackagesList />
            </div>
        </Provider>
    );
};

export default App;
