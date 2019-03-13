const getRandom = (from, to) => {
  return Math.floor((Math.random() * (to - from) + Math.min(from, 0)) * 100) / 100;
}

const getDataForDay = () => {
  return {
    price: getRandom(10, 100),
    yield: getRandom(0, 8),
    spread: getRandom(-5, 5)
  }
}

const getRating = () => {
  const letter = "ABC"[Math.floor(Math.random() * 3)];
  return letter.repeat(1 + Math.floor(Math.random() * 3))
}

const MAX_DAYS = 10;
const generateDataPoints = () => {
  const dataPoints = [];
  let date = new Date();
  date = date.setDate(date.getDate() - MAX_DAYS);
  for (let i = 0; i < MAX_DAYS; i++) {
    dataPoints.push({date, quotes: getDataForDay()});
    date = date.setDate(date.getDate() + 1);
  }

  return dataPoints;
}

const generateResponse = isin => {
  return {
    isin,
    name: "Some Company",
    issuer: "Some Company LLC.",
    rating: getRating(),
    data: generateDataPoints()
  }
}

console.log(JSON.stringify(generateResponse("ABCDE12345"), null, 2));