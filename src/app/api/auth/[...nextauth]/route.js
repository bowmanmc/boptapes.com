import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const googleKeys = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
};

const authOptions = {
    providers: [
        GoogleProvider(googleKeys),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
