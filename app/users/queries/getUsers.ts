import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetUsersInput
  extends Pick<Prisma.UserFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(async ({ where, orderBy, skip = 0, take = 100 }: GetUsersInput) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const {
    items: prevUsers,
    hasMore,
    nextPage,
    count,
  } = await paginate({
    skip,
    take,
    count: () => db.user.count({ where }),
    query: (paginateArgs) => db.user.findMany({ ...paginateArgs, where, orderBy }),
  })

  const users = prevUsers.slice(0, 50)
  const ids = users.map((user) => {
    return user.id
  })

  return {
    users,
    ids,
    nextPage,
    hasMore,
    count,
  }
})
