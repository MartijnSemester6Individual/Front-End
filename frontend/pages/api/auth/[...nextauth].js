import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default NextAuth({
  providers: [
    CredentialProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'martijn' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { data: user, status } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
          credentials,
        );
        if (user && status === 200) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user !== undefined) {
        const beforeDecode = user;
        const decodedToken = jwt_decode(beforeDecode);
        token.user = decodedToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token !== null) {
        session.user = token.user;
        session.user.userId = session.user.jti;
        console.log(session);
      } else if (typeof token !== typeof undefined) {
        session.token = token;
      }
      return session;
    },
  },
});
