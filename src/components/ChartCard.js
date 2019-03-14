import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Card, Typography, Statistic, Row, Col } from "antd";

const { Meta } = Card;

const ChartCard = ({ name, issuer, coupon, maturity, children }) => (
  <Card
    title={
      <Row gutter={16} align="center" type="flex">
        <Col span={12}>
          <Meta
            title={name.toUpperCase()}
            description={
              <Typography.Paragraph ellipsis style={{ margin: 0 }}>
                {issuer}
              </Typography.Paragraph>
            }
            style={{ margin: 0 }}
          />
        </Col>
        <Col span={6}>
          <Statistic title="Coupon" value={coupon} precision={2} suffix="%" />
        </Col>
        <Col span={6}>
          <Statistic
            title="Maturity"
            value={moment(maturity).format("YYYY")}
            groupSeparator=""
          />
        </Col>
      </Row>
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
