import React from "react";
import { connect } from "react-redux";
import moment from "moment";

const Summary = ({ name, issuer, coupon, maturity }) => (
  <>
    <h1>{name}</h1>
    <p>{coupon}</p>
    <p>{issuer}</p>
    <p>{maturity}</p>
  </>
);

const mapStateToProps = ({ data: { name, issuer, coupon, maturity } }) => ({
  name,
  issuer,
  coupon,
  maturity: moment(maturity).format("DD.MM.YY")
});

export default connect(mapStateToProps)(Summary);
