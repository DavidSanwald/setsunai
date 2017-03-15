import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import App from './App';
import MainWrapper from '../layout/MainWrapper'
import styled, { ThemeProvider } from 'styled-components';
import {colours4} from '../parameters/styleparams'


const Root = ({store}) => (
  <MainWrapper>
    <Provider store={store}>
       <ThemeProvider theme={colours4}>
        <App/>
      </ThemeProvider>
    </Provider>
  </MainWrapper>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
