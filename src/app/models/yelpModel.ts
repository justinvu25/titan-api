import { GetRestaurantArgs } from '../../ts-types/generated'
import { RestaurantPayloadMSYelp } from '../../ts-types/yelp'

interface YelpConnector {
	getRestaurants: Function
}

class Yelp {
	connector: YelpConnector

	constructor({ connector }: { connector: YelpConnector }) {
		this.connector = connector
	}

	async getRestaurants(
		getRestaurantArgs: GetRestaurantArgs,
	): Promise<RestaurantPayloadMSYelp[]> {
		const restaurants = this.connector.getRestaurants(getRestaurantArgs)
		return restaurants
	}
}

export default Yelp
