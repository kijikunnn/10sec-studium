import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Score: BlitzPage = () => {
  return (
    <>
      <div className="pt-1 pl-2">
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
      </div>

      <div className="flex items-end justify-center mb-4 h-1/4">
        <p className="text-6xl font-bold">Ranking</p>
      </div>

      <div className="px-2 py-3 m-2 font-bold bg-yellow-200 rounded-lg">
        <ul className="flex justify-around">
          <li>Best Score:9.98</li>
          <li>圏外 / 50位</li>
        </ul>
      </div>

      <div className="flow-root text-lg font-bold">
        <div className="p-2 m-3 bg-yellow-200 rounded-lg">
          <ul className="flex items-baseline justify-around">
            <li>1. 佐藤さん</li>
            <li className="flex items-baseline">
              <div className="mr-2 text-3xl">10.000</div>
              <div>±0.000</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

Score.suppressFirstRenderFlicker = true
Score.getLayout = (page) => <Layout title="Score">{page}</Layout>

export default Score
