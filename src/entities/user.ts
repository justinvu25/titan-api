import { prop, Typegoose } from 'typegoose'

class User extends Typegoose {
	@prop({ required: true })
	name: string

	@prop({ required: true })
	email: string

	@prop({ required: true })
	password: string
}

export default new User().getModelForClass(User, {
	schemaOptions: { collection: 'user' },
})
