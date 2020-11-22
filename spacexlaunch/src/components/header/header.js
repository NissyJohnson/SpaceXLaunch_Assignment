import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <>
      <header data-testid="header">Header</header>
    </>
  );
};

Header.propTypes = {
  heading: PropTypes.string,
};

export default Header;
