import { createError } from 'apollo-errors'

export const InvalidLoginError = createError('InvalidLoginError', {
	message: 'Invalid email or password, please try again.',
})

export const UserDoesNotExistError = createError('UserDoesNotExistError', {
	message: 'This user does not exist.',
})
