import { getSession } from 'next-auth/client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Loading() {
    const router = useRouter();

    useEffect(() => {
        getSession().then(session => {
            if (session) {
                // Session is set, redirect to main page
                router.push('/');
            }
        });
    }, []);

    return (
        <div>
            <p>Loading...</p>
        </div>
    );
}
