import { Provider } from 'react-redux';
import { store } from '../state';
import {
    Container,
    Stack,
    Box,
    Title,
    Paper,
    createStyles,
} from '@mantine/core';
import PackagesList from './PackagesList';

const useStyles = createStyles(() => ({
    heading: {
        fontSize: 18,
        fontFamily: 'monospace',

        [`@media (min-width: 370px)`]: {
            fontSize: 24,
        },

        [`@media (min-width: 500px)`]: {
            fontSize: 34,
        },
    },
}));

const App = (): JSX.Element => {
    const { classes } = useStyles();

    return (
        <Provider store={store}>
            <Container p="xl" size="xs">
                <Paper p={30} shadow="md" radius="lg">
                    <Stack spacing="xl">
                        <Box sx={{ textAlign: 'center' }}>
                            <Title className={classes.heading}>
                                Search npm packages
                            </Title>
                        </Box>
                        <PackagesList />
                    </Stack>
                </Paper>
            </Container>
        </Provider>
    );
};

export default App;
