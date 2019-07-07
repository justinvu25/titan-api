import { prop, arrayProp, Typegoose } from 'typegoose'

class Room extends Typegoose {
	@prop({ required: true })
	name: string

	@arrayProp({ required: true, items: Array })
	userIds: string[]

	@prop({ required: true, unique: true })
	pin: string

	@prop({ default: false })
	sessionStarted: boolean

	@prop({ default: false })
	votingCompleted: boolean

	@prop({ required: true })
	roomOwner: string
}

export default new Room().getModelForClass(Room, {
	schemaOptions: { collection: 'room' },
})
