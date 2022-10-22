import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <MantineProvider
        theme={{
            fontFamily: 'monospace',

            globalStyles: (theme) => ({
                '*, *::before, *::after': {
                    boxSizing: 'border-box',
                },

                body: {
                    backgroundImage: 'linear-gradient(#c12127, #e65156)',
                    margin: 0,
                },

                '#root': {
                    minHeight: '100vh',
                },

                '.mantine-Input-input': {
                    border: 'none',
                },
            }),
        }}
    >
        <App />
    </MantineProvider>
);
