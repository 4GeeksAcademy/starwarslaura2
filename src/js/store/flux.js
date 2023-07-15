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
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then((res) => res.json())
					.then((data) => {
					setStore({ planet: data.result.properties });
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
				fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					.then((res) => res.json())
					.then((data) => {
						setStore({ vehicle: data.result.properties });
					})
					.catch((error) => console.error(error));
			},
			// }
			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			}
		}
	};

export default getState;

