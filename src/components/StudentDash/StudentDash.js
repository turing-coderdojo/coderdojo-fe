import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import requests from '../../utils/requests/requests';


export function StudentDash(props) {
  // const [user, setUser] = useState({});
  const { user } = props;

  return (
    <section className="StudentDashContainer">
      <div className="StudentDashHeader">
        <h2>
          Welcome, {user.name}
        </h2>
        
      </div>
      <form>
        <input 
          type="text" 
          placeholder="Enter Event Code"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export const mapStateToProps = ({ user, isFetching, error }) => ({
  user,
  isFetching,
  error
});

export default connect(mapStateToProps, null)(StudentDash);

StudentDash.propTypes = {
  user: PropTypes.object,
  isFetching: PropTypes.bool,
  error: PropTypes.string
};

StudentDash.defaultProps = {
  user: {},
  isFetching: false,
  error: ''
};
