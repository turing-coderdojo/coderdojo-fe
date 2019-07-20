import React, { Component } from 'react';

export class VenuesContainer extends Component {
  state = { 
    venues: []
  };

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
