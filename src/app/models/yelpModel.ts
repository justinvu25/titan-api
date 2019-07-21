import { RoomInput, RoomPayload } from '../../ts-types/room'

interface YelpConnector {
	getRestaurants: Function
}

class Yelp {
	connector: YelpConnector

	constructor({ connector }: { connector: YelpConnector }) {
		this.connector = connector
	}

	async getRestaurants(restarauntOptions: any): Promise<any> {
		const restaurants = this.connector.getRestaurants(restarauntOptions)
		return restaurants
	}
}

export default Yelp
