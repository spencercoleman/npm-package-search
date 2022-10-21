import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const PackagesList = (): JSX.Element => {
    const { data, error, isLoading } = useTypedSelector(
        (state) => state.npmPackages
    );
    const [term, setTerm] = useState('');
    const { searchPackages } = useActions();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchPackages(term);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={term} onChange={(e) => setTerm(e.target.value)} />
                <button>Search</button>
            </form>

            {error && <strong>{error}</strong>}

            {isLoading && <strong>Loading...</strong>}

            {!error && !isLoading && (
                <ul>
                    {data.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PackagesList;
