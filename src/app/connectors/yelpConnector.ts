import axios from 'axios'
import { yelpApi } from '../../utils/apiEndpoints'
import { RestaurantPayloadMSYelp } from '../../ts-types/yelp'

const RESTAURANTS_TO_FETCH = 20

interface GetRestaurantsInput {
	location: string
	radius: number
}

class YelpConnector {
	async getRestaurants({
		location,
		radius,
	}: GetRestaurantsInput): Promise<RestaurantPayloadMSYelp[]> {
		const response = await axios.get(yelpApi.businessSearchEndpoint, {
			params: {
				location,
				radius,
				limit: RESTAURANTS_TO_FETCH,
			},
			headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` },
		})
		return response.data.businesses
	}
}

export default YelpConnector
