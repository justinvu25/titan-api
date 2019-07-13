import { USER_UPDATED } from '../../../pubsub/topics'
import { Context } from '../../../ts-types/context'

const userUpdatedSubscription = (
	_parent: object,
	_args: undefined,
	context: Context,
): void => {
	const { pubsub } = context
	return pubsub.asyncIterator([USER_UPDATED])
}

export default userUpdatedSubscription
