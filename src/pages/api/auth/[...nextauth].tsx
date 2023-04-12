import GithubProvider from "next-auth/providers/github"
import NextAuth from "next-auth"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: '8a724124aa6e30cc5aaa',
      clientSecret: '9ff315c330f06bad716b3248ddbde08fc738b8b8',
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)