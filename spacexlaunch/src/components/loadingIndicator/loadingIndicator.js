import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const LoadingIndicator = ({ loading }) => {
  return loading ? (
    <div className="loading">
      <div className="loadingSpinner" />
    </div>
  ) : null;
};

LoadingIndicator.propTypes = {
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(LoadingIndicator);
