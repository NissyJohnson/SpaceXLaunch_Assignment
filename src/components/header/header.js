import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ heading }) => {
  return (
    <>
      <header data-testid="header">{heading}</header>
    </>
  );
};

Header.propTypes = {
  heading: PropTypes.string,
};

export default Header;
