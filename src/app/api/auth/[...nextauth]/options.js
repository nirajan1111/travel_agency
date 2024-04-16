import CredentialsProvider from 'next-auth/providers/credentials'

import bcrypt from 'bcryptjs'
import {connect} from '@/uitils/db'
import User from '@/models/User'

export const authOptions = {
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                try {
                    await connect();
                    const user = await User.findOne({
                        email: credentials.email
                    })
                    if (!user) {
                    return null    
                    }
                    
                    const isPasswordMatch = await bcrypt.compare(credentials.password, user.password)
                    if (!isPasswordMatch) {

                        return null}
                    return user
                }
                catch (err) {
                    console.log(err)
                    throw new Error(err)
                }
            }
        })
    ],
    callbacks: {
        async jwt({token, user, session}) {
          if (user) {
            return {...token, id: user._id, isAdmin: user.isAdmin};
          }
          return token;
        },
        async session({session, token, user}) {
          session.user.id = token.id;
          session.user.isAdmin = token.isAdmin;
          return session;
        },
      },
      session: {
        strategy: "jwt",
      },
      pages: {
        signIn: "/sign-in",
      },
    secret : process.env.NEXTAUTH_SECRET,
}