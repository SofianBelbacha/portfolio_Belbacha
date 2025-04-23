// models/Project.ts
import mongoose, { Schema, Document } from 'mongoose'

export interface IProject extends Document {
  title: string
  slug: string
  technologies: string[]
  description: string
  tags?: string[]
  createdAt: Date
  updatedAt: Date

  imageUrl: string
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    technologies: { type: [String], required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
)

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema)

