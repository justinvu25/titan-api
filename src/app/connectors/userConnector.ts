import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcrypt'
import { pick } from 'lodash'
import User from '@/entities/user'
import {
	UserInput,
	UserPayload,
	LoginCredentials,
	LoginPayload,
} from '@/ts-types/user'
import { SALT_ROUNDS, JWT_EXPIRY } from '@/utils/constants'

class UserConnector {
	async getAllUsers(): Promise<UserPayload[]> {
		const users = await User.find()
		return users
	}

	async registerUser(userData: UserInput): Promise<UserPayload> {
		const { name, password, email } = userData
		const user = await User.findOne({ email })

		if (!user) {
			const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS)
			if (hashedPassword) {
				const createdUser = await User.create({
					name,
					email,
					password: hashedPassword,
				})
				return createdUser
			}
			throw new Error('User could not be created.')
		}
		throw new Error('User already exists.')
	}

	async login(loginCredentials: LoginCredentials): Promise<LoginPayload> {
		const { email, password } = loginCredentials
		const user = await User.findOne({ email })

		if (user) {
			const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS)
			if (bcrypt.compare(user.password, hashedPassword)) {
				const token = jwt.sign(
					{ user: pick(user, ['_id']) },
					process.env.JWT_SECRET,
					{
						expiresIn: JWT_EXPIRY,
					},
				)
				return {
					accessToken: token,
					expiresIn: JWT_EXPIRY,
				}
			}
		}

		throw new Error('Something went wrong.')
	}
}

export default UserConnector
