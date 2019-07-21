import { Context } from '../../../ts-types/context'
import { RestaurantsQueryArgs, Restaurant } from '../../../ts-types/generated'

const getRestaurantsResolver = async (
	_parent: object,
	args: RestaurantsQueryArgs,
	context: Context,
): Promise<Restaurant> => {
	const {
		models: { Yelp },
	} = context

	const restaurants = await Yelp.getRestaurants(args.input)

	return restaurants.map(
		(restaurant: any): object => {
			return {
				id: restaurant.id,
				rating: restaurant.rating,
				phone: restaurant.phone,
				isClosed: restaurant.is_closed,
				name: restaurant.name,
				imageUrl: restaurant.image_url,
				location: {
					city: restaurant.location.city,
					country: restaurant.location.country,
					state: restaurant.location.state,
					address: restaurant.location.address1,
				},
			}
		},
	)
}

export default getRestaurantsResolver
