import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "../button/button";
import {
  launchLandSuccess,
  launchyearSuccess,
} from "../../redux/actions/actions";
import { launchYear, launchYearSearch } from "../../redux/actions/actions";

const Filter = ({
  launchYears,
  launchLandsuccess,
  launchYearSuccess,
  launchedYear,
  launchYearOnly,
}) => {
  const stateInputs = {
    year: null,
    land: false,
    launch: false,
    touched: false,
    reset: false,
  };
  const [inputs, setInputs] = useState(stateInputs);
  const [yearFilter, setYearFilter] = useState(null);

  const { year, land, launch, touched, reset } = inputs;
  useEffect(() => {
    try {
      if (touched) {
        if (year === null && (launch || land)) {
          if (launch && land) {
            launchLandsuccess("landSuccess");
          } else if (launch && !land) {
            launchLandsuccess("launchfail");
          } else if (launch) {
            launchLandsuccess("launchSuccess");
          }
        } else if (year !== null) {
          if (year !== yearFilter) {
            const activebtns = document.querySelectorAll(
              "[name='land'].active,[name='launch'].active"
            );
            activebtns.forEach((btn) => btn.classList.remove("active"));
            setInputs((prevState) => {
              return { ...prevState, land: false, launch: false };
            });
            setYearFilter(year);
          }
          if (!launch && !land) {
            launchYearOnly(year);
          } else if (launch && land) {
            launchYearSuccess("landSuccess", year);
          } else if (launch) {
            launchYearSuccess("launchSuccess", year);
          } else if (launch && !land) {
            launchYearSuccess("launchfail", year);
          }
        }
      }
    } catch (e) {
      throw new Error("Error in the API call");
    }
  }, [year, land, launch, touched, reset]);

  const onclick = (e) => {
    const { name, value } = e.target;
    if (value === "Reset") {
      setInputs(stateInputs);
      const activebtns = document.querySelectorAll(`button.active`);
      activebtns.forEach((btn) => btn.classList.remove("active"));
      launchedYear();
      return;
    }
    let inputValue;
    const activebtns = document.querySelectorAll(`[name='${name}'].active`);
    activebtns.forEach((btn) => btn.classList.remove("active"));
    e.currentTarget.className += " active";
    if (isNaN(value)) {
      inputValue = value === "True";
    } else inputValue = parseInt(value, 10);
    setInputs({ ...inputs, [name]: inputValue, touched: true });
  };

  const bool = ["True", "False"];
  const resetVal = ["Reset"];

  const buttons = (param, arr) => {
    return (
      arr &&
      Array.prototype.map.call(arr, (item, k) => (
        <Button
          classes="btn btn-primary btn-custom"
          id={`${param}${k}`}
          value={item}
          click={onclick}
          name={param}
          key={k}
          data-testid="button"
        />
      ))
    );
  };

  return (
    <div className="filters">
      <h2>Filters</h2>
      <div className="title">
        <p className="header-title">Launch Year</p>
        <hr aria-hidden="true" />
        {buttons("year", launchYears)}
      </div>
      <div className="launch">
        <p className="header-title">Successful Launch</p>
        <hr aria-hidden="true" />
        {buttons("launch", bool)}
      </div>
      <div className="land">
        <p className="header-title">Successful Landing</p>
        <hr aria-hidden="true" />
        {buttons("land", bool)}
      </div>
      <div className="reset">{buttons("reset", resetVal)}</div>
    </div>
  );
};

Filter.propTypes = {
  launchYears: PropTypes.node,
  launchLandsuccess: PropTypes.func,
  launchYearSuccess: PropTypes.func,
  launchedYear: PropTypes.func,
  launchYearOnly: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  launchLandsuccess: (type) => dispatch(launchLandSuccess(type)),
  launchYearSuccess: (type, year) => dispatch(launchyearSuccess(type, year)),
  launchedYear: () => dispatch(launchYear()),
  launchYearOnly: (year) => dispatch(launchYearSearch(year, dispatch)),
});

export default connect(null, mapDispatchToProps)(Filter);
