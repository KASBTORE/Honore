import { withIronSession } from 'next-iron-session';

async function handler(req, res) {
    req.session.set('user', { name: 'John' });
    await req.session.save();
    res.send('Session created');
}

export default withIronSession(handler, {
    password: 'your-password',
    cookieName: 'your-cookie-name',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
    },
});
