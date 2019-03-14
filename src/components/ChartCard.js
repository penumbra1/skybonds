import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Card, Statistic, Row, Col } from "antd";

const { Meta } = Card;
const MetaItem = ({ children }) => <span className="meta">{children}</span>;

const ChartCard = ({ name, issuer, coupon, maturity, children }) => (
  <Card
    title={
      <Meta
        title={name.toUpperCase()}
        description={
          <>
            <p>{issuer}</p>
            <Statistic
              title="Coupon rate"
              value={coupon}
              precision={2}
              suffix="%"
            />
            <Statistic
              title="Maturity"
              value={moment(maturity).format("DD.MM.YY")}
            />
          </>
        }
      />
    }
    style={{ maxWidth: "95vw" }}
  >
    {children}
  </Card>
);

const mapStateToProps = ({ data: { name, issuer, coupon, maturity } }) => ({
  name,
  issuer,
  coupon,
  maturity
});

export default connect(mapStateToProps)(ChartCard);
