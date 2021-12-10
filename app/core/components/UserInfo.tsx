import logout from "app/auth/mutations/logout"
import updateName from "app/users/mutations/updateName"
import updateTime from "app/users/mutations/updateTime"
import { Link, Image, useMutation } from "blitz"
import React, { useEffect, VFC } from "react"
import { useCurrentUser } from "../hooks/useCurrentUser"
import GoogleLogin from "public/btn_google_signin_dark_normal_web@2x.png"

export const UserInfo: VFC = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <div className="flex flex-col">
        {/* TODO: ボタンをコンポーネント化 */}
        <Link href="/game">
          <a>Game Start</a>
        </Link>
        <Link href="/score">
          <a>Score</a>
        </Link>
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <button
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
