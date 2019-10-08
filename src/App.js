import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { apolloClient } from './services/apolloClient';
import routes from './routes';

import Landing from './components/Landing';

function App() {
  return (
    <main className="App">
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Switch>
            <Route exact path={routes.landing.path} component={Landing} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </main>
  );
}

export default App;
