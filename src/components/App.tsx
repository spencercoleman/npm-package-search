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

const useStyles = createStyles((theme) => ({
    container: {
        padding: 0,
        paddingBottom: 100,

        [`@media (min-width: 500px)`]: {
            padding: theme.spacing.xl,
        },
    },

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

    wrapper: {
        borderRadius: 0,
        padding: `${theme.spacing.xl}px ${theme.spacing.md}px`,

        [`@media (min-width: 500px)`]: {
            borderRadius: theme.radius.lg,
            padding: 30,
        },
    },
}));

const App = (): JSX.Element => {
    const { classes } = useStyles();

    return (
        <Provider store={store}>
            <Container className={classes.container}>
                <Paper className={classes.wrapper} shadow="md">
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
