import { BlitzPage, Link } from "blitz"
import Layout from "app/core/layouts/Layout"

const Score: BlitzPage = () => {
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

      <div className="flex items-end justify-center mb-4 h-1/6">
        <p className="text-6xl font-bold">Ranking</p>
      </div>

      <div className="px-2 py-3 m-2 bg-yellow-200 rounded-lg text-xl">
        <ul className="flex justify-around">
          <li className="flex items-baseline">
            <div className="mr-1">My Best Score:</div>
            <div className="text-3xl font-bold">9.98</div>
          </li>
          <li className="flex items-end">
            <div className="text-3xl font-bold">圏外</div>
            <div> / 50位</div>
          </li>
        </ul>
      </div>

      <div className="flow-root text-lg">
        <div className="p-2 m-3 bg-yellow-200 rounded-lg text-3xl">
          <ul className="flex  justify-around">
            1.<li className="font-bold">佐藤さん</li>
            <li className="flex items-baseline">
              <div className="mr-3 font-bold">10.000</div>
              <div className="text-2xl ">±0.000</div>
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
