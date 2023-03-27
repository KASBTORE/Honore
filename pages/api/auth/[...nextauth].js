import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
    providers: [
        // GoogleProvider({
        //     clientId: process.env.CLIENT_ID,
        //     clientSecret: process.env.SECRET_ID

        // }),
        CredentialsProvider({
            id: 'credentials',
            name: 'my-project',
            credentials: {
                email: {
                    label: 'email',
                    type: 'email',
                    placeholder: 'jsmith@example.com',
                },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                const payload = {
                    email: credentials.email,
                    password: credentials.password,
                };

                const res = await fetch('http://localhost:4000/user/login', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const user = await res.json();
                console.log("this works", user.user)
                if (user) {
                    console.log("was here in credential", user);
                    return user.user;

                }
                return null;
            },
        }),


    ],
    callbacks: {
        // async signIn({ user, account }) {
        //     console.log(user, account, "trying this in sign in");
        //     if (account.provider === "google") {
        //         try {
        //             console.log(JSON.stringify({ username: user.name, email: user.email, password: `${user.id + user.name}` }));
        //             const api = await fetch(`http://localhost:4000/user`, {
        //                 method: 'POST',
        //                 body: JSON.stringify({ username: user.name, email: user.email, password: "?Dh3444440" }),
        //                 headers: {
        //                     'Content-Type': 'application/json'
        //                 },

        //             });
        //             const data = await api.json();
        //             console.log("This is the data after sign in", data);
        //             const modifiedUser = {
        //                 ...user,
        //                 name: data.user.username,
        //                 id: data.user._id
        //             }
        //             console.log("printing the modified user", modifiedUser);
        //             return user;
        //         } catch (error) {
        //             console.error("Failed to sign in:", error);
        //             return user;
        //         }
        //     }
        //     return user;
        // },
        async jwt({ token, user, account, profile }) {
            console.log(profile, account, "this is the profile");
            if (user) {
                console.log("trying user", user);
                token.email = user.email;
                token.name = user.username;
                token.id = user._id;
            }
            else {
                console.log("missed user");
            }
            console.log("This is the user at jwt level", user);
            return token;
        },

        async session({ session, token, user }) {
            console.log("In here in token place", token, session);
            if (token) {
                session.name = token.name;
                session.email = token.email;
                session.id = token.id;
            }
            console.log("This is the user at session level", user);
            console.log("printing session", session);
            return session;
        },
    },

    secret: process.env.NEXT_AUTH_SECRET,
    jwt: {
        secret: "6A318471FEDB42C6",
        encryption: true
    },
    pages: {
        signIn: '/login',
    }

})

