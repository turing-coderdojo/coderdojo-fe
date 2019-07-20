import React, { Component } from 'react';

export class VenuesContainer extends Component {
  state = { 
    venues: [],
    loading: false,
    error: ''
  };

  componentDidMount() {
    this.searchVenues;
  };

  componentDidUpdate(prevProps) {
    const { setSearchResults } = this.props;
    if (setSearchResults !== prevProps) {
      this.searchVenues();
    }
  }

  generateVenues() {
    const { venues } = this.state;
    
    venues.map(venue => (
      <article>
        <h3>
          CARD 
          {venue}
        </h3>
      </article> 
    ));
  }

  render() {
    return (
      <section>
        {this.generateVenues()}
      </section>
    )
  }
}

export default VenuesContainer;
