# Get Started

これは [茨大 Advent Calendar 2021](https://adventar.org/calendars/6493) 17 日目の記事のリポジトリです．

```zsh
yarn install
```

まだ Blitz.js をインストールしていない場合はこちらを参考にインストールしてください．

- [Get Started with Blitz](https://blitzjs.com/docs/get-started)

Blitz.js をインストール後，環境ファイル(.env.local)を作成し，

```.env
DATABASE_URL=[PostgreSQLのURL]

GOOGLE_CLIENT_ID=[OAuth2.0クライアントID]
GOOGLE_CLIENT_SECRET=[OAuth2.0クライアントシークレットID]
```
を追記後

```zsh
blitz prisma migrate dev
blitz dev
```
