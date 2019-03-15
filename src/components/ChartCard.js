import React from "react";
import moment from "moment";
import { Card, Typography, Statistic, Row, Col } from "antd";

const { Meta } = Card;
const SecondaryText = ({ children }) => (
  <Typography.Paragraph
    ellipsis
    type="secondary"
    style={{ margin: 0, fontSize: "14px" }}
  >
    {children}
  </Typography.Paragraph>
);

const ChartCard = ({
  name,
  issuer,
  isin,
  currency,
  coupon,
  maturity,
  children
}) => (
  <Card
    title={
      <Row gutter={16} align="top" type="flex">
        <Col span={24} sm={12} className="meta">
          <div>
            <Meta title={name.toUpperCase()} />
            <SecondaryText>{issuer}</SecondaryText>
          </div>
          <SecondaryText>{isin}</SecondaryText>
        </Col>
        <Col xs={{ span: 6, push: 6 }} sm={{ span: 4, push: 0 }}>
          <Statistic title="Coupon" value={coupon} precision={2} suffix="%" />
        </Col>
        <Col xs={{ span: 6, push: 6 }} sm={{ span: 4, push: 0 }}>
          <Statistic
            title="Maturity"
            value={moment(maturity).format("YYYY")}
            groupSeparator=""
          />
        </Col>
        <Col xs={{ span: 6, push: 6 }} sm={{ span: 4, push: 0 }}>
          <Statistic title="Currency" value={currency} />
        </Col>
      </Row>
    }
    className="block mv16"
  >
    {children}
  </Card>
);

export default ChartCard;
