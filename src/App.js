//import fplapi from "fpl-api-node"; // why doesn't this work?
const fplapi = require("fpl-api-node");

// --------------------------------

//fplapi.findEntry(entryId).then((entry) => console.log(entry));
fplapi.getTeams().then((data) => console.log(data));

// --------------------------------

export default () => (
	<div>
		Is the footy on?
	</div>
);
