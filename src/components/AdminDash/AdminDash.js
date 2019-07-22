import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import requests from '../../utils/requests/requests';

export function AdminDash(props) {
  return (
    <section>
      <h1>Admin</h1>
    </section>
  );
}

const mapStateToProps = state => ({
  isLoading: state.isFetching,
  error: state.error,
  user: state.user
});

export default connect(mapStateToProps)(AdminDash);

AdminDash.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  user: PropTypes.object
};

AdminDash.defaultProps = {
  isLoading: false,
  error: '',
  user: {}
};