// import * as fplapi from 'fpl-api-node';

// fplapi.getTeams()
// 	.then((data) => console.log(data));

import codogoFetch from "src/network/codogoFetch";

const fetchData = () => {
	codogoFetch(
		'https://fantasy.premierleague.com/drf/bootstrap-static', 
		{
			method: 'GET',
		}
	)
	.then(
			(data) => {
				console.log(data);
				return data;
			}
		)
		.catch(
			(error) => {
				console.error(error);
			}
		)
}

const Data = fetchData();

console.log(Data);

export default () => <div>
	codogo-react-app
</div>;
