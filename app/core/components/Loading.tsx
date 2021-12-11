import { VFC } from "react"

export const Loading: VFC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="animate-spin h-16 w-16 border-8 sm:h-10 sm:w-10 sm:border-4 border-yellow-500 rounded-full"
        style={{ borderTopColor: "transparent" }}
      ></div>
    </div>
  )
}
