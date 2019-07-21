interface Category {
	alias: string
	title: string
}

export interface RestaurantPayloadMSYelp {
	rating: number
	price: string
	phone: string
	id: string
	alias: string
	is_closed: boolean
	categories: Category[]
	review_count: number
	name: string
	url: string
	coordinates: {
		latitude: string
		longitude: string
	}
	image_url: string
	location: {
		city: string
		country: string
		address1: string
		state: string
		zip_code: string
		distance: number
		transactions: string[]
	}
}
