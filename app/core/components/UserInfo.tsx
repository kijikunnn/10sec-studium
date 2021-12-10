import logout from "app/auth/mutations/logout"
import { Link, Image, useMutation } from "blitz"
import React, { VFC } from "react"
import { useCurrentUser } from "../hooks/useCurrentUser"
import GoogleLogin from "public/btn_google_signin_dark_normal_web@2x.png"

type LINK_PROPS = {
  title: string
  href: string
}

export const UserInfo: VFC = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  const LinkButton: VFC<LINK_PROPS> = (props) => {
    return (
      <Link href={props.href}>
        <a className="bg-yellow-200 block m-4 w-80 py-3 rounded-lg text-3xl font-bold text-gray-900 text-center">
          {props.title}
        </a>
      </Link>
    )
  }

  if (currentUser) {
    return (
      <div className="flex flex-col">
        {/* TODO: ボタンをコンポーネント化 */}
        <LinkButton title="Game Start" href="/game" />
        <LinkButton title="Score" href="/score" />
        <LinkButton title="Profile" href="/profile" />
        <button
          className="bg-yellow-200 block m-4 w-80 py-3 rounded-lg text-3xl font-bold text-gray-900"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
      </div>
    )
  } else {
    return (
      <>
        <Link href="/api/auth/google">
          <Image
            src={GoogleLogin}
            alt="Login Button"
            width={300}
            height={72.25}
            className="hover cursor-pointer"
          />
        </Link>
      </>
    )
  }
}
