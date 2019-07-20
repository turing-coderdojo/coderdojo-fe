import React, { Component } from 'react';
import requests from '../../utils/requests/requests';

export class VenuesContainer extends Component {
  state = { 
    venues: [],
    loading: false,
    error: ''
  };

  componentDidMount() {
    this.searchVenues();
  }

  componentDidUpdate(prevProps) {
    const { setSearchResults } = this.props;
    if (setSearchResults !== prevProps) {
      // this.searchVenues();
    }
  }

  searchVenues() {
    const { setSearchResults } = this.props;
    try {
      const venues = [
        { name: '1', address: '1234' },
        { name: '1', address: '1234' },
        { name: '1', address: '1234' }
      ];
      this.setState({ venues });
    } catch (error) {
      this.setState({ error });
    }
  }

  generateVenues() {
    const { venues } = this.state;
    
    return venues.map(venue => (
      <article>
        <h3>
          CARD 
          {venue.name}
          {venue.address}
        </h3>
      </article> 
    ));
  }

  render() {
    return (
      <section>
        {this.generateVenues()}
      </section>
    );
  }
}

export default VenuesContainer;
