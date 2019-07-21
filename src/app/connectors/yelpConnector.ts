import axios from 'axios'

interface GetRestaurantsInput {
	location: string
	radius: number
}

class YelpConnector {
	async getRestaurants({
		location,
		radius,
	}: GetRestaurantsInput): Promise<any> {
		const response = await axios.get(
			'https://api.yelp.com/v3/businesses/search',
			{
				params: {
					location,
					radius,
				},
				headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` },
			},
		)
		return response.data.businesses
	}
}

export default YelpConnector
