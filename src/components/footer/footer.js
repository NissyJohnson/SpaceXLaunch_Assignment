import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ footer }) => {
  return (
    <>
      <footer data-testid="footer">{footer}</footer>
    </>
  );
};

Footer.propTypes = {
  footer: PropTypes.string,
};

export default Footer;
