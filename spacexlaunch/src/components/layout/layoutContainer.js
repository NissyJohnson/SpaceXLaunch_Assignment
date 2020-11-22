import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingIndicator from '../LoadingIndicator/loadingIndicator';
import Header from '../header/header';
import Footer from '../footer/footer';
import Filter from '../filter/filter';
import Cards from '../cards/cards';
import { launchYear } from '../../redux/actions/actions';

const LayoutContainer = ({ loading, launchYears, launchedYear, cardDetails }) => {
  useEffect(() => {
    launchedYear();
  }, []);

  return loading ? (
    <LoadingIndicator loading />
  ) : (
    <>
      <main className="layout-content-container">
        <Header heading="SpaceX Launch Program" />
        <div className="layout-columns layout-columns--20-80-large layout-columns--2-medium">
          <div className="layout-columns__column">
            <Filter launchYears={launchYears} />
          </div>
          <div className="layout-columns__column">
            <Cards cardDetails={cardDetails} />
          </div>
          <Footer footer="Developed by: Nissy Johnson" />
        </div>
      </main>
    </>
  );
};

LayoutContainer.propTypes = {
  loading: PropTypes.bool,
  launchYears: PropTypes.node,
  launchedYear: PropTypes.func,
  cardDetails: PropTypes.node,
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  launchYears: state.launchYears,
  cardDetails: state.cardDetails,
});
const mapDispatchToProps = (dispatch) => ({
  launchedYear: () => dispatch(launchYear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
