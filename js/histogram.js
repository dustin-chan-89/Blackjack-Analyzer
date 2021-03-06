var s = new Shoe(8, 7); //8 decks, 7 deck penetration
var resultingBankRolls = [];
for (var i = 0; i < 2500; i++) {
  bankRoll = 0;
  playNHands(s, 200, 5); //200 hands per session of BJ
  resultingBankRolls.push(bankRoll);
}

var statistics = getStatistics(resultingBankRolls);

var data = [
  {
    x: resultingBankRolls,
    type: 'histogram',
	marker: {
    color: 'rgba(100,250,100,0.7)',
	},
  }
];

var layout = {
  title: "Basic Strategy, Flat Betting $5, 1000 sessions of 500 hands (500,000 total hands)",
  xaxis: {title: "Ending Bankroll (mean: " + statistics.mean + " | median: " + statistics.median + " | standard deviation: " + statistics.standardDeviation + ")"},
  yaxis: {title: "Count"}
};

Plotly.newPlot('histogram', data, layout);
