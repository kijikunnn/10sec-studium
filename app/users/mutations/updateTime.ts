import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateUser = z.object({
  id: z.number(),
  time: z.number(),
  error: z.number(),
})

export default resolver.pipe(resolver.zod(UpdateUser), async ({ id, ...data }) => {
  const user = await db.user.update({ where: { id }, data })

  return user
})
