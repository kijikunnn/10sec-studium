import { VFC } from "react"

export const Loading: VFC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="animate-spin h-10 w-10 border-4 border-yellow-500 rounded-full"
        style={{ borderTopColor: "transparent" }}
      ></div>
    </div>
  )
}
