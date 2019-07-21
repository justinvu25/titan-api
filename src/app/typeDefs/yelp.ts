import { gql } from 'apollo-server-express'

export default gql`
	type Restaurant {
		id: ID!
		rating: Float!
		phone: String!
		name: String!
		isClosed: Boolean!
		categories: [Category!]
		imageUrl: String!
		location: Location!
	}

	type Category {
		alias: String
		title: String
	}

	type Location {
		city: String!
		country: String!
		address: String
		state: String!
	}

	input GetRestaurant {
		location: String!
		radius: Int!
	}
`
