import GithubProvider from "next-auth/providers/github"
import NextAuth from "next-auth"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: '8a724124aa6e30cc5aaa',
      clientSecret: 'xxx',
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)
