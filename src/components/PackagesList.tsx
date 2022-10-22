import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import {
    Button,
    Input,
    Text,
    Stack,
    Loader,
    ScrollArea,
    Table,
    Anchor,
} from '@mantine/core';

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
                    mx="auto"
                    placeholder="Package name"
                    required
                    sx={{ maxWidth: 400 }}
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
                <ScrollArea mt="md">
                    <Table verticalSpacing="sm">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Version</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((npmPackage, index) => {
                                const {
                                    date,
                                    description,
                                    link,
                                    name,
                                    version,
                                } = npmPackage;
                                return (
                                    <tr key={index}>
                                        <td>
                                            <Anchor
                                                href={link}
                                                target="_blank"
                                                variant="text"
                                                weight={700}
                                                underline
                                            >
                                                {name}
                                            </Anchor>
                                        </td>
                                        <td>{description}</td>
                                        <td>{version}</td>
                                        <td>
                                            {new Date(
                                                date
                                            ).toLocaleDateString()}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </ScrollArea>
            )}
        </Stack>
    );
};

export default PackagesList;
