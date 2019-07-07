export interface UserInput {
	name: string
	email: string
	password: string
}

export interface UpdateUserInput {
	name?: string
	email?: string
}

export interface UserPayload {
	_id: string
	name: string
	email: string
}

export interface LoginCredentials {
	email: string
	password: string
}

export interface LoginPayload {
	accessToken: string
	expiresIn: string
}
