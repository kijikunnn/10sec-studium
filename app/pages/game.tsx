import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"

const Game: BlitzPage = () => {
  return (
    <>
      <div className="h-1/4 flex justify-center items-end">
        <p className="text-6xl font-bold">Game</p>
      </div>
    </>
  )
}

Game.suppressFirstRenderFlicker = true
Game.getLayout = (page) => <Layout title="Game">{page}</Layout>

export default Game
