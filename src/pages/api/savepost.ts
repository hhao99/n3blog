// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { savePost } from '@/lib/blog'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body)
  savePost(req.body)
  
  res.status(200).json({ msg: 'ok' })
}
