import { useState } from 'react';

const PackagesList = (): JSX.Element => {
    const [term, setTerm] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted');
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
