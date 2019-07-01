import * as jwt from 'jsonwebtoken'
import { Maybe } from '@/ts-types/generated'

interface DecodeJwtPayload {
	user: {
		_id: string
	}
}

interface DecodedJwt {
	id: string
}

interface RequestHeaders {
	authorization?: string
}

export const decodeJwt = (reqHeaders: RequestHeaders): Maybe<DecodedJwt> => {
	const { authorization } = reqHeaders

	if (!authorization) {
		return null
	}

	const decodedToken = jwt.verify(
		authorization,
		process.env.JWT_SECRET,
	) as DecodeJwtPayload

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
