import { prop, Typegoose } from 'typegoose'
import * as mongoose from 'mongoose'

class User extends Typegoose {
	@prop()
	name?: string

	@prop({ required: true })
	email: string

	// @prop({ required: true })
	// password: string
}

export default new User().getModelForClass(User, {
	schemaOptions: { collection: 'user' },
})
