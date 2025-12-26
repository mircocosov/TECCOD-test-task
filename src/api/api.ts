export default async function getProduct() {
	try {
		const res = await fetch("https://dummyjson.com/products")

		if (!res.ok) {
			throw new Error(`HTTP error: ${res.status}`)
		}

		const data = await res.json()
		return data
	} catch (error) {
		return { error: "Failed to retrieve products" }
	}
}
