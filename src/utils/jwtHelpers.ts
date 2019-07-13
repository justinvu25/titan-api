import * as jwt from 'jsonwebtoken'
import { Maybe } from '../ts-types/generated'

interface DecodeJwtPayload {
	user: {
		_id: string
	}
}

interface DecodedJwt {
	id: string
}

export const decodeJwt = (authToken: string): Maybe<DecodedJwt> => {
	if (!authToken) {
		return null
	}

	const decodedToken = jwt.verify(authToken, process.env.JWT_SECRET, {
		algorithms: ['HS256'],
	}) as DecodeJwtPayload

	if (decodedToken) {
		const {
			user: { _id },
		} = decodedToken

		return {
			id: _id,
		}
	}
	return null
}
