import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Profile: BlitzPage = () => {
  return (
    <>
      <div className="h-1/4 flex justify-center items-end">
        <p className="text-6xl font-bold">Profile</p>
      </div>
    </>
  )
}

Profile.suppressFirstRenderFlicker = true
Profile.getLayout = (page) => <Layout title="Profile">{page}</Layout>

export default Profile
