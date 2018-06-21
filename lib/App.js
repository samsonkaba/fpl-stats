"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fplApiNode = require("fpl-api-node");

var _fplApiNode2 = _interopRequireDefault(_fplApiNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --------------------------------
console.log(_fplApiNode2.default);

//fplapi.findEntry(entryId).then((entry) => console.log(entry));
//import codogoFetch from "src/network/codogoFetch";

// --------------------------------

_fplApiNode2.default.getTeams().then(function (data) {
	return console.log(data);
});

// --------------------------------

// const fetchData = () => {
// 	codogoFetch(
// 		"https://fantasy.premierleague.com/drf/bootstrap-static", 
// 		{
// 			method: "GET",
// 		}
// 	)
// 		.then(
// 			(data) => {
// 				console.log(data);
// 				return data;
// 			}
// 		)
// 		.catch(
// 			(error) => {
// 				console.error(error);
// 			}
// 		);
// };

// const Data = fetchData();

//console.log(Data);

// --------------------------------

exports.default = function () {
	return React.createElement(
		"div",
		null,
		"Is the footy on?"
	);
};