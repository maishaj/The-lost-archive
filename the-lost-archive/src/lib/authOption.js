import GoogleProvider from "next-auth/providers/google";
import { loginUser } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { collections, dbconnect } from "./dbConnect";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
     CredentialsProvider({
      name: 'Credentials',
      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        // password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user=await loginUser(credentials);
        return user;
      }
  }),

  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
  ],

  callbacks: {
  async signIn({ user, account, profile, email, credentials }) {

    const isExist=await dbconnect(collections.USERS).findOne(
      { 
        email:user.email,
        provider:account?.provider
      })

    if(isExist){
      return true;
    }

    const newUser={
       provider:account?.provider,
       name:user.name,
       email:user.email,
       image:user.image,
       role:"user",
       joinedAt:new Date()
    }

    const result=await dbconnect(collections.USERS).insertOne(newUser);
    return result.acknowledged;
  },
  }
}