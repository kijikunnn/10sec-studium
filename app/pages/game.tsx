import { BlitzPage, useMutation, Link } from "blitz"
import Layout from "app/core/layouts/Layout"
import { useMemo, useState } from "react"
import updateTime from "app/users/mutations/updateTime"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

const Game: BlitzPage = () => {
  const currentUser = useCurrentUser()
  const [time, setTime] = useState<number>(0)
  const [timer, setTimer] = useState<number>(0)
  const [isStart, setIsStart] = useState<number>(0)
  const [isNewRecord, setIsNewRecord] = useState<boolean>(false)
  const [updateTimeMutation] = useMutation(updateTime)

  const countUp = () => {
    setTime((prevTime) => prevTime + 0.01)
  }

  const handleStart = () => {
    setIsStart((prevIsStart) => prevIsStart + 1)
    setTimer(window.setInterval(countUp, 10))
  }

  const handleStop = async () => {
    if (!currentUser) return

    window.clearInterval(timer)
    setIsStart((prevIsStart) => prevIsStart + 1)

    const currentTime = parseFloat(time.toFixed(2))
    const currentError = Math.abs(parseFloat((currentTime - 10).toFixed(2)))

    if (currentUser.error === null || currentUser.error > currentError) {
      setIsNewRecord(true)
      await updateTimeMutation({ ...currentUser, time: currentTime, error: currentError })
    }
  }

  return (
    <>
      <div className="h-2/5 flex flex-col items-center justify-end">
        {isNewRecord && <div className="text-7xl text-red-500 font-bold mb-4">New Record</div>}
        <div className="bg-[#FFEE00] h-48 w-full rounded-2xl flex items-center">
          <div className="bg-black m-4 w-full rounded-2xl">
            <p
              className={
                isStart === 1
                  ? "text-center text-[#FFEE00] text-[100px] mx-auto  transition duration-[5000ms] opacity-0"
                  : "text-center text-[#FFEE00] text-[100px] mx-auto opacity-1"
              }
            >
              {time.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <div className="h-3/5 flex flex-col items-center justify-center">
        <button
          onClick={isStart ? handleStop : handleStart}
          className="w-[300px] h-20 bg-yellow-200 rounded-2xl text-gray-900 text-4xl font-bold focus:outline-none"
        >
          {isStart ? "Stop" : "Start"}
        </button>

        <Link href="/">
          <a className="mt-8">{isStart !== 1 ? "\u226A Back to Home" : null}</a>
        </Link>
      </div>
    </>
  )
}

Game.suppressFirstRenderFlicker = true
Game.getLayout = (page) => <Layout title="Game">{page}</Layout>

export default Game
