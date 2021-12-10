import { passportAuth } from "blitz"
import db from "db"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"

export default passportAuth({
  successRedirectUrl: "/",
  errorRedirectUrl: "/",
  strategies: [
    {
      strategy: new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
          callbackURL:
            process.env.NODE_ENV === "production"
              ? "https://git.heroku.com/ten-sec-studium.git/api/auth/google/callback"
              : "http://localhost:3000/api/auth/google/callback",
          scope: ["email", "profile"],
        },
        async function (accessToken, refreshToken, profile, done) {
          const email = profile.emails && profile.emails[0]?.value

          if (!email) {
            return done(new Error("GoogleのOAuthにE-mailがありません"))
          }

          const user = await db.user.upsert({
            where: { email },
            create: {
              email,
              name: profile.displayName,
            },
            update: { email },
          })
          const publicData = {
            userId: user.id,
            role: [user.role],
            source: "google",
          }

          done(undefined, { publicData })
        }
      ),
    },
  ],
})
