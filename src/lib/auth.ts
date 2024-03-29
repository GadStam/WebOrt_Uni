import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import { db } from "./db";
import { compare } from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
export const authOptions: NextAuthOptions = {
    adapter:PrismaAdapter(db),
    secret:process.env.NEXTAUTH_SECRET,
    session:{
        strategy: 'jwt'
    },
    pages:{
        signIn: '/sign-in',
        
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
          }),
        CredentialsProvider({
          
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if(!credentials?.email || !credentials?.password){
                return null;
            }
            const existingUser = await db.user.findUnique({
                where:{email: credentials?.email}
            });
            if(!existingUser){
                return null;
            }
            if(existingUser.password){
                const passwordMatch = await compare(credentials.password, existingUser.password);
            if(!passwordMatch){
                return null;
            }
            }
            
            return{
                id: `${existingUser.id}`,
                name: existingUser.name,
                surname: existingUser.surname,
                email: existingUser.email
            }
      
            
          }
        })
      ],
      callbacks: {
        async jwt({ token, user }) {
            console.log(token, user);
            if(user){
                return{
                    ...token,
                    name:user.name
                }
            }
          return token
        },
        
        async session({ session, user, token }) {
          return {
            ...session,
            user:{
                ...session.user,
                name: token.name
            }
        }
     
        }
       
    
    }
  
}

export default NextAuth(authOptions)