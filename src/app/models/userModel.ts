import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { pick } from 'lodash'
import {
	UserInput,
	LoginCredentials,
	LoginPayload,
	UserPayload,
} from '@/ts-types/user'
import { SALT_ROUNDS, JWT_EXPIRY } from '@/utils/constants'

interface UserConnector {
	getAllUsers: Function
	createUser: Function
	findUserByEmail: Function
}

class User {
	connector: UserConnector

	constructor({ connector }: { connector: UserConnector }) {
		this.connector = connector
	}

	async getAllUsers(): Promise<UserPayload[]> {
		return this.connector.getAllUsers()
	}

	async registerUser(userData: UserInput): Promise<UserPayload> {
		const user = await this.connector.findUserByEmail(userData.email)

		if (user) {
			throw new Error('User already exists.')
		}

		const hashedPassword = bcrypt.hashSync(userData.password, SALT_ROUNDS)
		if (hashedPassword) {
			const createdUser = await this.connector.createUser({
				...userData,
				password: hashedPassword,
			})
			return createdUser
		}
		throw new Error('User could not be created.')
	}

	async login(loginCredentials: LoginCredentials): Promise<LoginPayload> {
		const user = await this.connector.findUserByEmail(loginCredentials.email)

		if (!user) {
			throw new Error('This user does not exist.')
		}

		const hashedPassword = bcrypt.hashSync(
			loginCredentials.password,
			SALT_ROUNDS,
		)
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
		throw new Error('Email or password is incorrect.')
	}
}

export default User
