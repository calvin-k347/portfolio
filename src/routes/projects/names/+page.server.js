/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async ({request}) => {
		const form = await request.formData()
		const name = form.get("name") 
		const response = await fetch(`https://languageandnames.politesky-8c24a688.eastus2.azurecontainerapps.io//${name}`);
		const data = await response.json();
		console.log(data)
		return {data} 
	}
};

