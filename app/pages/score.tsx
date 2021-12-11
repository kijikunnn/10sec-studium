import { BlitzPage, Link, useQuery, useRouter } from "blitz"
import Layout from "app/core/layouts/Layout"
import { TitleWithLink } from "app/core/components/TitleWithLink"
import getUsers from "app/users/queries/getUsers"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

const Score: BlitzPage = () => {
  const router = useRouter()
  const currentUser = useCurrentUser()
  const [{ users, ids }] = useQuery(getUsers, { orderBy: { error: "asc" } })

  if (!currentUser) {
    alert("ログインしてください")
    router.push("/")
  }

  const myRank: number = ids.indexOf(currentUser?.id || 0) + 1

  const editError = (time: number | null, error: number): string => {
    if (time === null) {
      return "-"
    } else if (error === 0) {
      return "±0.00"
    } else if (time < 10) {
      return `-${error}`
    } else {
      return `+${error}`
    }
  }

  return (
    <>
      <TitleWithLink title="Ranking" />

      <div className="px-2 py-3 m-2 bg-yellow-500 rounded-lg text-xl">
        <ul className="flex justify-around">
          <li className="flex items-baseline">
            <div className="mr-1">My Best Score:</div>
            <div className="text-3xl font-bold">{currentUser?.time}</div>
          </li>
          <li className="flex items-end">
            <div className="text-3xl font-bold">{myRank ? myRank : "圏外"}</div>
            <div> / 50位</div>
          </li>
        </ul>
      </div>
      <ul className="overflow-auto sm:h-[calc(100vh-25%-72px)]">
        {users.map((user, i: number) => (
          <li
            key={user.id}
            className={
              user.id === currentUser?.id
                ? "flex justify-around p-2 m-3 bg-yellow-500 rounded-lg text-3xl font-bold"
                : "flex justify-around p-2 m-3 bg-yellow-200 rounded-lg text-3xl font-bold"
            }
          >
            <p className="font-medium">{i + 1}.</p>
            <p>{user.name}</p>
            <p className="flex items-baseline">
              <p className="mr-3 ">{user.time ? user.time : "No time"}</p>
              <p className="font-medium text-2xl ">
                {user.error ? editError(user.time, user.error) : "-"}
              </p>
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}

Score.suppressFirstRenderFlicker = true
Score.getLayout = (page) => <Layout title="Score">{page}</Layout>

export default Score
