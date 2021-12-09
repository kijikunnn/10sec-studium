import { Suspense } from "react"
import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { UserInfo } from "app/core/components/UserInfo"

const Home: BlitzPage = () => {
  return (
    <>
      <div className="h-1/4 flex justify-center items-end">
        <p className="text-6xl font-bold">10秒スタジアム</p>
      </div>

      <div className="h-3/4 flex justify-center items-center">
        <Suspense fallback="Loading...">
          <UserInfo />
        </Suspense>
      </div>
    </>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
