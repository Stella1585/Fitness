import NextAuth from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import jwt from "jsonwebtoken";


import type { NextAuthConfig } from "next-auth"

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "your-email",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "your-password",
        }
      },
      async authorize(credentials) {
        try {
          const res = await fetch("https://afefitness2023.azurewebsites.net/api/Users/login", {
            method: 'POST',
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password
            }),
            headers: { "Content-Type": "application/json" }
          });

          //@ts-ignore
          async function getUserById(token: string) {
            const decoded_token: any = jwt.decode(token);
            if (!decoded_token) {
              throw new Error("");
            }

            let res = await fetch(`https://afefitness2023.azurewebsites.net/api/Users/${decoded_token.UserId}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                // Include authentication token if required:
                'Authorization': `Bearer ${token}`,
              },
            });
            return res.json();
          }

          const data = await res.json();
          if (res.ok && data.jwt) {
            let user_start = await getUserById(data.jwt);

            let user = { ...user_start, jwt_extern: data.jwt, role: user_start?.accountType };

            return user;
          }
        } catch (error) {
          console.log(error);

        }
        return null;

      }
    })
  ],

  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === "/middleware-example") return !!auth

      // //* role specific middleware

      // if (pathname === "/client") return !!auth

      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    jwt({ token, user }) {
      if (user) {
        //@ts-ignore
        token.role = user.role
        //@ts-ignore
        token.jwt_extern = user.jwt_extern
      }
      return token;
    },

    session({ session, token, user }) {
      //@ts-ignore
      session.user.role = token.role;
      //@ts-ignore
      session.user.jwt_extern = token.jwt_extern;
      return session;
      // return Promise.resolve(session)
    }
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
