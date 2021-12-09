import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Score: BlitzPage = () => {
  return (
    <>
      <div className="flex items-end justify-center h-1/4">
        <p className="text-6xl font-bold">Score</p>
      </div>
      <p>Hello World</p>
    </>
  )
}

Score.suppressFirstRenderFlicker = true
Score.getLayout = (page) => <Layout title="Score">{page}</Layout>

export default Score
