import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Card } from "antd";

const { Meta } = Card;

const MetaItem = ({ children }) => <span>{children}</span>;

const Layout = ({ name, issuer, coupon, maturity, children }) => (
  <Card bordered={false}>
    <Meta
      title={
        <>
          <MetaItem>{name}</MetaItem>
          <MetaItem>{coupon}</MetaItem>
        </>
      }
      description={
        <>
          <MetaItem>{issuer}</MetaItem>
          <MetaItem>{maturity}</MetaItem>
        </>
      }
    />
    {children}
  </Card>
);

const mapStateToProps = ({ data: { name, issuer, coupon, maturity } }) => ({
  name,
  issuer,
  coupon,
  maturity: moment(maturity).format("DD.MM.YY")
});

export default connect(mapStateToProps)(Layout);
