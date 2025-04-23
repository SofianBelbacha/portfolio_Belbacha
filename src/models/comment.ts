import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IComment extends Document {
  username: string
  message: string
  createdAt: Date
  updatedAt: Date
}

const CommentSchema: Schema<IComment> = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxlength: 50,
  },
  message: {
    type: String,
    required: true,
    maxlength: 500,
  },
}, { timestamps: true })

export default (mongoose.models.Comment as Model<IComment>) || mongoose.model<IComment>('Comment', CommentSchema)
