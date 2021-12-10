import { Link } from "blitz"
import { VFC } from "react"

type PROPS = {
  title: string
}

export const TitleWithLink: VFC<PROPS> = (props) => {
  return (
    <div className="h-1/4 flex flex-col justify-between items-center p-4">
      <Link href="/">
        <a className="block text-left w-full">
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

      <div>
        <p className="text-6xl font-bold">{props.title}</p>
      </div>
    </div>
  )
}
