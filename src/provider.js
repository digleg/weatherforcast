import Axios from "axios";
import React from "react";
import PropTypes from "prop-types";
import { AxiosContext } from "./context";

export default function AxiosProvider({ connector = Axios, children }) {
  return (
    <AxiosContext.Provider value={connector}>{children}</AxiosContext.Provider>
  );
}

AxiosProvider.propTypes = {
  connector: PropTypes.any,
  // children: PropTypes.oneOf([
  //   PropTypes.node,
  //   PropTypes.arrayOf(PropTypes.node),
  // ]),
};
