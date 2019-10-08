import React from 'react';
import './Landing.scss';

import { apolloClient } from '../../services/apolloClient';
import { INITIAL_QUERY } from '../../services/queries';

class Landing extends React.Component {
  async componentDidMount() {
    await apolloClient.query({
      query: INITIAL_QUERY,
    });
  }

  render() {
    return (
      <div className="Landing">
        <p>Landing Page</p>
      </div>
    );
  }
}

export default Landing;
