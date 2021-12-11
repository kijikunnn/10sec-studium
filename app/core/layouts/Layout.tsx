import { Head, BlitzLayout } from "blitz"
import { Suspense } from "react"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "10sec-studium"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="sm:bg-gray-200 sm:h-screen">
        <div className="sm:bg-white sm:w-[500px] w-screen mx-auto h-screen">
          <Suspense fallback="Loading...">{children}</Suspense>
        </div>
      </main>
    </>
  )
}

export default Layout
