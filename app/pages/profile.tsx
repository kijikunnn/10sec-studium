import { BlitzPage, Link, useMutation } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import updateName from "app/users/mutations/updateName"
import { useState } from "react"
import updateTime from "app/users/mutations/updateTime"
import deleteUser from "app/users/mutations/deleteUser"

const Profile: BlitzPage = () => {
  const currentUser = useCurrentUser()
  const [text, setText] = useState<string>("")

  const [updateNameMutation] = useMutation(updateName)
  const [updateTimeMutation] = useMutation(updateTime)
  const [deleteUserMutation] = useMutation(deleteUser)

  const handleUpdateName = async () => {
    if (currentUser && text) {
      await updateNameMutation({ ...currentUser, name: text })
      setText("")
    }
  }

  const handleDeleteScore = async () => {
    if (currentUser) {
      await updateTimeMutation({ ...currentUser, time: null, error: null })
    }
  }

  const handleDeleteUser = async () => {
    if (currentUser) {
      await deleteUserMutation({ id: currentUser.id })
    }
  }

  return (
    <>
      <Link href="/">
        <a className="block p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </a>
      </Link>

      <div className="flex flex-col items-center justify-center my-8">
        <p className="text-6xl font-bold">Edit Profile</p>

        <div className="px-4 py-3 my-8 rounded-lg text-3xl font-bold border border-yellow-700 ">
          <input
            type="text"
            className="w-full font-bold focus:outline-none"
            placeholder={currentUser?.name}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button
          className="bg-yellow-200 mx-auto block  px-24 py-3 rounded-lg text-3xl font-bold"
          onClick={handleUpdateName}
        >
          保存
        </button>
      </div>
      <div className="h-2/3 flex flex-col justify-center items-center">
        <button
          className="bg-yellow-200 block m-4 w-80 py-3 rounded-lg text-3xl font-bold text-red-500"
          onClick={handleDeleteScore}
        >
          Delete My Score
        </button>
        <button
          className="bg-yellow-200  block m-4 w-80 py-3 rounded-lg text-3xl font-bold text-red-500"
          onClick={handleDeleteUser}
        >
          Delete all data
        </button>
      </div>
    </>
  )
}

Profile.suppressFirstRenderFlicker = true
Profile.getLayout = (page) => <Layout title="Profile">{page}</Layout>

export default Profile
