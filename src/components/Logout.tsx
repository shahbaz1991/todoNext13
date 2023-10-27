'use client'

import { Link, Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation';

function Logout() {
    const route = useRouter()

    const onLogout = () => {
        localStorage.clear();
        route.replace('/')
    };

    return (
        <Button size='sm' color="primary" href="#" variant="flat" onPress={onLogout}>
            Logout
        </Button>
    )
}

export default Logout