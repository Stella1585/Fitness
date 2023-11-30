import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
// import jwt from "jsonwebtoken";
import { decodeJwt, decodeProtectedHeader } from "jose"
import type { NextAuthConfig } from "next-auth"

function decodeToken(token: string) {
  try {
    //!Decodes a signed JSON Web Token payload. This does not validate the JWT Claims Set types or values. This does not validate the JWS Signature. 
    //!For a proper Signed JWT Claims Set validation and JWS signature verification use jose.jwtVerify(). For an encrypted JWT Claims Set validation and JWE decryption use jose.jwtDecrypt()
    //@ts-ignore
    return decodeJwt(token);
  } catch (error) {
    console.error('Failed to decode JWT token', error);
    return null;
  }
}

//@ts-ignore
async function getUserById(token: string) {
  const decoded_token: any = decodeToken(token);
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

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  trustHost: true,
  secret: process.env.AUTH_SECRET,
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

          const data = await res.json();
          if (res.ok && data.jwt) {
            let user_start = await getUserById(data.jwt);
            let user = { ...user_start, jwt_external: data.jwt, role: user_start?.accountType, id: user_start.userId };
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
    authorized({ request: { nextUrl }, auth }) {
      const { pathname } = nextUrl

      const isLoggedIn = !!auth?.user
      const paths = ["/protected/manager", "/protected/client", "/protected/trainer"]
      const isProtected = paths.some((path) => nextUrl.pathname.startsWith(path))

      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL("api/auth/signin", nextUrl.origin)
        redirectUrl.searchParams.append("callbackUrl", nextUrl.href)
        return Response.redirect(redirectUrl)
      }

      // //* role specific middleware
      if (isLoggedIn) {
        //@ts-ignore
        if (pathname.startsWith("/protected/manager") && auth?.user?.role != "Manager") {
          const redirectUrl = new URL("/", nextUrl.origin)
          return Response.redirect(redirectUrl)
        }
        //@ts-ignore
        if (pathname.startsWith("/protected/trainer") && auth?.user?.role != "PersonalTrainer") {
          const redirectUrl = new URL("/", nextUrl.origin)
          return Response.redirect(redirectUrl)
        }
        //@ts-ignore
        if (pathname.startsWith("/protected/client") && auth?.user?.role != "Client") {
          const redirectUrl = new URL("/", nextUrl.origin)
          return Response.redirect(redirectUrl)
        }
      }
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },

    jwt({ token, user }) {
      if (user) {
        //@ts-ignore
        token.id = user.id
        //@ts-ignore
        token.role = user.role
        // token.user_id = user.id
        //@ts-ignore
        token.jwt_external = user.jwt_external
      }
      return token;
    },

    session({ session, token, user }) {
      //@ts-ignore
      session.user.id = token.id;
      //@ts-ignore
      session.user.role = token.role;
      //@ts-ignore
      session.user.jwt_external = token.jwt_external;
      // return session;
      return Promise.resolve(session)
    }
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)