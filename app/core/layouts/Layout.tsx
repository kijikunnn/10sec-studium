import { Head, BlitzLayout } from "blitz"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "10sec-studium"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="sm:bg-gray-200 h-screen ">
        <div className="sm:bg-white w-[500px] mx-auto min-h-full">{children}</div>
      </main>
    </>
  )
}

export default Layout
