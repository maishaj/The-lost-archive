import GoogleProvider from "next-auth/providers/google";
import { loginUser } from "@/actions/server/auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { collections, dbconnect } from "./dbConnect";
export const authOptions = {

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },

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

  // 1. Map the user data into the JWT token
  async jwt({token,user}){
    if(user){
      token.email=user.email;
      token.name=user.name;
    }
    return token;
  },

  // 2. Map the JWT token data into the Session object
  async ({session,token}){
     if(token){
      session.user.email=token.email;
      session.user.name=token.name;
     }
     return session;
  },
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