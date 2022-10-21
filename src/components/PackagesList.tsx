import { useState } from 'react';
import { useActions } from '../hooks/useActions';

const PackagesList = (): JSX.Element => {
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
        </div>
    );
};

export default PackagesList;
