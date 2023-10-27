'use client'

import React, { useState } from 'react'
import { Input, Button, Divider, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { EyeFilledIcon } from '../../../public/EyeClose';
import { EyeSlashFilledIcon } from '../../../public/EyeOpen';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = React.useState(false);
    const [isInValid, setIsInValid] = useState(false);
    const route = useRouter();

    const toggleVisibility = () => setIsVisible(!isVisible);

    const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);


    const onPressLogin = () => {
        if (email) {
            if (!validateEmail(email)) {
                setIsInValid(true)
                return
            } else {
                setIsInValid(false)
            }
        }
        route.replace('/todoList')
    }

    return (
        <div className='flex justify-center items-center'>
            <Card className="min-w-[350px] max-h-[350px] my-[2%]">
                <CardHeader>
                    <h1>LOGIN</h1>
                </CardHeader>
                <Divider />
                <CardBody className='flex flex-col gap-y-3'>
                    <Input
                        isRequired
                        value={email}
                        onValueChange={setEmail}
                        placeholder="Enter your email"
                        type="email"
                        label="Email"
                        variant="bordered"
                        isInvalid={isInValid}
                        errorMessage={isInValid && "Please enter a valid email"}
                        className="w-[100%]"
                    />
                    <Input
                        isRequired
                        value={password}
                        onValueChange={setPassword}
                        label="Password"
                        variant="bordered"
                        placeholder="Enter your password"
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        type={isVisible ? "text" : "password"}
                        className="w-[100%]"
                    />
                    <Button variant='bordered' color='primary' className="w-[100%]" isDisabled={(email && password) ? false : true} onClick={onPressLogin}>
                        Login
                    </Button>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link href="/register"><p className='text-xs'>Register</p></Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Login