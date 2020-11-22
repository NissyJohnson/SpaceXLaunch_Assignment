import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ cardDetail }) => {
  const {
    missionName,
    flightNumber,
    missionId,
    launchYear,
    launchSuccess,
    image,
    landSuccess,
  } = cardDetail;
  return cardDetail ? (
    <>
      <div className="card-contentainer layout-columns__column m-card">
        <div className="card-image">
          <img src={image} alt={missionName} />
        </div>
        <div className="card-content">
          <h3 className="card-heading" data-testid="card-heading">
            {`${missionName}#${flightNumber}`}
          </h3>
          <p data-testid="missionid">
            Mission Ids:
            {missionId}
          </p>
          <p data-testid="launchYear">
            Launch Year:
            {launchYear}
          </p>
          <p data-testid="launchSuccess">
            Successful launch:
            {launchSuccess ? 'True' : 'False'}
          </p>
          <p data-testid="landSuccess">
            Successful landing:
            {landSuccess ? 'True' : 'False'}
          </p>
        </div>
      </div>
    </>
  ) : null;
};

Card.propTypes = {
  cardDetail: PropTypes.objectOf(PropTypes.any),
};

export default Card;
