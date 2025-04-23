import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@/lib/useFirebaseAnalytics'
import Comment, { IComment } from '@/models/comment'

type Data = IComment[] | IComment | { error: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connectToDatabase()

  if (req.method === 'GET') {
    const comments = await Comment.find().sort({ createdAt: -1 })
    return res.status(200).json(comments)
  }

  if (req.method === 'POST') {
    const { username, message } = req.body

    if (!username || !message) {
      return res.status(400).json({ error: 'Champs manquants' })
    }

    const comment = await Comment.create({ username, message })
    return res.status(201).json(comment)
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).json({ error: `Méthode ${req.method} non autorisée` })
}
