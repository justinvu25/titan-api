import { prop, Typegoose } from 'typegoose'

class User extends Typegoose {
	@prop({ required: true, trim: true })
	name: string

	@prop({ required: true, lowercase: true, trim: true })
	email: string

	@prop({ required: true, trim: true })
	password: string

	@prop({ default: false })
	isReady: boolean
}

export default new User().getModelForClass(User, {
	schemaOptions: { collection: 'user' },
})
