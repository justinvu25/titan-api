import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const db = process.env.MONGO_URL as string

mongoose
	.connect(db, {
		useCreateIndex: true,
		useNewUrlParser: true,
	})
	.then((): void => console.log('MongoDB connected'))
	.catch((err): void => console.log(err))
