import { Context } from '@/ts-types/context'

const userUpdatedSubscription = (
	_parent: object,
	_args: undefined,
	context: Context,
): any => {
	const { pubsub } = context
	return pubsub.asyncIterator(['USER_UPDATED'])
}

export default userUpdatedSubscription
