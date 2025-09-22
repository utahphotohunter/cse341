const estherRoute = (req, res) => {
  res.send("Esther Hunter");
};

const michaelRoute = (req, res) => {
  res.send("Michael Hunter");
};

const alanaRoute = (req, res) => {
  res.send("Alana Hunter");
};

module.exports = {
    estherRoute,
    michaelRoute,
    alanaRoute
};