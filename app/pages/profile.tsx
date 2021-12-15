import { BlitzPage, Link, useMutation, useRouter } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import updateName from "app/users/mutations/updateName"
import { useState, VFC } from "react"
import updateTime from "app/users/mutations/updateTime"
import deleteUser from "app/users/mutations/deleteUser"
import { TitleWithLink } from "app/core/components/TitleWithLink"
import toast, { Toaster } from "react-hot-toast"

type BUTTON_PROPS = {
  text: string
  onClick: () => void
  color: string
}

const EditButton: VFC<BUTTON_PROPS> = (props) => {
  const styles = `bg-yellow-200  block m-4 w-80 py-3 rounded-lg text-3xl font-bold  ${props.color}`
  return (
    <button className={styles} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Profile: BlitzPage = () => {
  const router = useRouter()
  const currentUser = useCurrentUser()
  const [text, setText] = useState<string>("")

  const [updateNameMutation] = useMutation(updateName)
  const [updateTimeMutation] = useMutation(updateTime)
  const [deleteUserMutation] = useMutation(deleteUser)

  const handleUpdateName = async () => {
    if (currentUser && text) {
      toast.success("保存に成功しました")
      await updateNameMutation({ ...currentUser, name: text })
      setText("")
    } else {
      toast.error("保存に失敗しました")
    }
  }

  const handleDeleteScore = async () => {
    if (currentUser) {
      await updateTimeMutation({ ...currentUser, time: null, error: null })
      toast.success("スコアを削除しました")
    } else {
      toast.error("ログインしてください")
      router.push("/")
    }
  }

  const handleDeleteUser = async () => {
    if (currentUser) {
      await deleteUserMutation({ id: currentUser.id })
      toast.success("ユーザーを削除しました")
    } else {
      toast.error("ログインしてください")
    }
    router.push("/")
  }

  return (
    <>
      <Toaster />
      <TitleWithLink title="Edit Profile" />

      <div className="h-1/4 flex flex-col justify-center items-center">
        <div className="px-4 py-3 m-4 rounded-lg text-3xl font-bold border border-yellow-700 ">
          <input
            type="text"
            className="w-full font-bold focus:outline-none"
            placeholder={currentUser?.name}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <EditButton text="Save" onClick={handleUpdateName} color="text-gray-900" />
      </div>

      <div className="h-1/4 flex flex-col justify-center items-center">
        <EditButton text="Delete My Score" onClick={handleDeleteScore} color="text-red-500" />
        <EditButton text="Delete User" onClick={handleDeleteUser} color="text-red-500" />
      </div>
    </>
  )
}

Profile.suppressFirstRenderFlicker = true
Profile.getLayout = (page) => <Layout title="Profile">{page}</Layout>

export default Profile
