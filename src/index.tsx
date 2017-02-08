import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './components/App';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
import 'material-design-icons/iconfont/material-icons.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

ReactDom.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
