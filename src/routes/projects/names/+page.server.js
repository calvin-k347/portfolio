/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async ({request}) => {
		const form = await request.formData()
		const name = form.get("name") 
		const response = await fetch(`http://127.0.0.1:5000/${name}`);
		const data = await response.json();
		console.log(data)
		return {data} 
	}
};

