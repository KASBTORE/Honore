import GoogleProvider from 'next-auth/providers/google'

const modifiedGoogleProvider = GoogleProvider({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.SECRET_ID,
    authorize: async (credentials, req) => {
        // Call the original authorize function to get the user object
        const user = await GoogleProvider.authorize(credentials, req);
        const api = await fetch(`http://localhost:4000/user`, {
            method: 'POST',
            body: JSON.stringify({ username: user.name, email: user.email, password: "?Dh3444440" }),
            headers: {
                'Content-Type': 'application/json'
            },

        });

        const apiUser = await api.json();
        const modifiedUser = {
            ...user,
            name: apiUser.user.username,
            id: apiUser.user._id
        };
        console.log("this is the modified user from the modified google provider", modifiedUser);

        return modifiedUser;
    },
});

export default modifiedGoogleProvider;
