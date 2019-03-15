import moment from "moment";

const getRandom = (from, to) => {
  return Math.floor((Math.random() * (to - from) + from) * 100) / 100;
};

const getInitialData = () => {
  return {
    price: getRandom(10, 100),
    currentYield: getRandom(0, 8),
    spread: getRandom(-5, 5)
  };
};

const simulateChange = (n, delta) =>
  getRandom(Math.floor(n - delta), Math.ceil(n + delta));

const getNextData = ({ price, currentYield, spread }) => {
  return {
    price: Math.max(0.1, simulateChange(price, 1)),
    currentYield: simulateChange(currentYield, 0.5),
    spread: simulateChange(spread, 0.5)
  };
};

const getRating = () => {
  const letter = "ABC"[Math.floor(Math.random() * 3)];
  return letter.repeat(1 + Math.floor(Math.random() * 3));
};

const generateDataPoints = () => {
  const dataPoints = [];
  let date = moment().subtract(2, "y");

  let dailyData = getInitialData();

  while (date.isSameOrBefore(moment.now(), "d")) {
    dataPoints.push({ date: date.format(), ...dailyData });
    dailyData = getNextData(dailyData);
    date.add(1, "d");
  }

  return dataPoints;
};

const generateResponse = isin => {
  return {
    isin,
    name: "SOMECOMP",
    issuer: "Some Company LLC.",
    currency: "USD",
    rating: getRating(),
    coupon: 5.55,
    maturity: moment()
      .add(3, "y")
      .format(),
    dataPoints: generateDataPoints()
  };
};

export default generateResponse;
