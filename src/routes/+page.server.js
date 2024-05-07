
//Loads default json from static Files

export async function load({ params }) {
    const path = "./static/defaults.json";
    const file = Bun.file(path);
    const contents = await file.json();

	return {contents
	};
}