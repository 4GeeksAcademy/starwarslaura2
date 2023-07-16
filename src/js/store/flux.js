const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			planets: [],
			vehicles: [],
			character:[],
			planet:[],
			vehicle:[],
			favorites:[]
		},
		actions: {
			getAllCharacters:()=>{
				fetch("https://www.swapi.tech/api/people/",{
					method: 'GET',
				})
					.then(res => res.json())
					.then(data => setStore({characters: data.results}))
					.catch(error => console.error(error))
			},

			getOneCharacter:id=>{
				fetch(`https://www.swapi.tech/api/people/${id}`,{
					method: 'GET',
				})
					.then((res) => res.json())
					.then((data) => {
						setStore({character: data.result.properties})
					})
					.catch((err) => console.error(err));
			},

			getAllPlanets:()=>{
				fetch("https://www.swapi.tech/api/planets/",{
					method: 'GET',
				})
				.then(res => res.json())
				.then(data => setStore({planets: data.results }))
				.catch(err => console.error(err));
			},
			getOnePlanet:(id)=>{
				fetch(`https://www.swapi.tech/api/planets/${id}`,{
					method: 'GET',
				})
					.then((res) => res.json())
					.then((data) => {
					setStore({planet: data.result.properties});
					})
					.catch((err) => console.error(err));
			},
			getAllVehicles:()=>{
				fetch("https://www.swapi.tech/api/vehicles/",{
					method: 'GET',
				})
				.then(res => res.json())
					.then(data => setStore({vehicles: data.results }))
					.catch(err=> console.err(err));
			},
			getOneVehicle:(id)=>{
				fetch(`https://www.swapi.tech/api/vehicles/${id}`,{
					method: 'GET',
				})
					.then((res) => res.json())
					.then((data) => {
						setStore({ vehicle: data.result.properties });
					})
					.catch((error) => console.error(error));
			},
			getFavorites:favList=>{
				setStore({favorites:favList})
			}

			}
		}
	};

export default getState;

