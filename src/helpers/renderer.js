import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import sereialize from 'serialize-javascript';

export default (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter context={context} location={req.url}>
                <div>
                    {
                        renderRoutes(Routes)
                    }
                </div>
            </StaticRouter>
        </Provider>
    );

    return `
        <html>
            <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            </head>
            <body>
                <div id="root">${content}</div>
                <script>window.INITIAL_STATE = ${sereialize(store.getState())}</script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};