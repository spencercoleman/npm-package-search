import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { Button, Input, Text, Stack, Loader } from '@mantine/core';

const PackagesList = (): JSX.Element => {
    const { data, error, isLoading } = useTypedSelector(
        (state) => state.npmPackages
    );
    const [term, setTerm] = useState('');
    const { searchPackages } = useActions();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchPackages(term);
    };

    return (
        <Stack>
            <form onSubmit={handleSubmit}>
                <Input
                    value={term}
                    onChange={handleChange}
                    rightSection={
                        <Button type="submit" color="dark" radius="md">
                            Search
                        </Button>
                    }
                    rightSectionWidth={87}
                    radius="md"
                    variant="filled"
                    size="md"
                    placeholder="Package name"
                    required
                />
            </form>

            {error && (
                <Text color="red" size="sm">
                    {error}
                </Text>
            )}

            {isLoading && (
                <Loader
                    color="dark"
                    variant="dots"
                    size="lg"
                    mx="auto"
                    my="xl"
                />
            )}

            {!error && !isLoading && data.length > 0 && (
                <div>
                    {data.map((npmPackage, index) => (
                        <div key={index}>{npmPackage.name}</div>
                    ))}
                </div>
            )}
        </Stack>
    );
};

export default PackagesList;
