import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Score: BlitzPage = () => {
  return (
    <>
      <div className="h-1/4 flex justify-center items-end">
        <p className="text-6xl font-bold">Score</p>
      </div>
    </>
  )
}

Score.suppressFirstRenderFlicker = true
Score.getLayout = (page) => <Layout title="Score">{page}</Layout>

export default Score
