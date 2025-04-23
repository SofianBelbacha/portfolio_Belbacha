'use client' 

import { useEffect, useState } from 'react'

interface Comment {
  _id: string
  username: string
  message: string
  createdAt: string
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([])
  const [form, setForm] = useState({ username: '', message: '' })

  useEffect(() => {
    fetch('/api/comments')
      .then(res => res.json())
      .then(setComments)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    if (res.ok) {
      const newComment: Comment = await res.json()
      setComments([newComment, ...comments])
      setForm({ username: '', message: '' })
    }
  }

  return (
    <div>
      <h2>Commentaires</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pseudo"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />
        <textarea
          placeholder="Votre message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button type="submit">Envoyer</button>
      </form>

      <ul>
        {comments.map((c) => (
          <li key={c._id}>
            <strong>{c.username}</strong>: {c.message}
          </li>
        ))}
      </ul>
    </div>
  )
}
