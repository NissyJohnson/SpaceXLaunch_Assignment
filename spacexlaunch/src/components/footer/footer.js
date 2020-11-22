import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
  return (
    <>
      <footer data-testid="footer">Footer</footer>
    </>
  );
};

Footer.propTypes = {
  footer: PropTypes.string,
};

export default Footer;
