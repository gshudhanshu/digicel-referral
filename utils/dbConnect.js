/* This is a database connection function*/
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection
  .on('open', () => console.log('Connected to Mongo'))
  .on('error', (err) => console.log(err))

export const dbConnect = mongoose
