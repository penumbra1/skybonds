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

const simulateChange = (n, delta) => getRandom(n - delta, n + delta);

const getNextData = ({ price, currentYield, spread }) => {
  return {
    price: Math.max(0.1, simulateChange(price, 0.5)),
    currentYield: simulateChange(currentYield, 0.25),
    spread: simulateChange(spread, 0.25)
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
    name: "Some Company",
    issuer: "Some Company LLC.",
    rating: getRating(),
    coupon: 5.55,
    maturity: moment().add(3, "y"),
    indicators: generateDataPoints()
  };
};

// console.log(JSON.stringify(generateResponse("YYY"), null, 2));

export default generateResponse;
