'use client'

import React, { useState } from 'react'
import { Input, Button, Divider, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { EyeFilledIcon } from '../../../public/EyeClose';
import { EyeSlashFilledIcon } from '../../../public/EyeOpen';
import { useRouter } from 'next/navigation';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = React.useState(false);
  const [isInValid, setIsInValid] = useState(false);
  const route = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);


  const onPressReg = () => {
    console.log('loin', email, password, validateEmail(email));
    if (email) {
      if (!validateEmail(email)) {
        setIsInValid(true)
        return
      } else {
        setIsInValid(false)
      }
    }
    route.replace('/login');
  }

  return (
    <div className='flex justify-center items-center'>
      <Card className="min-w-[350px] max-h-[350px] my-[2%]">
        <CardHeader>
          <h1>REGISTER</h1>
        </CardHeader>
        <Divider />
        <CardBody className='flex flex-col gap-y-3'>
          <Input
            isRequired
            value={name}
            onValueChange={setName}
            placeholder="Enter your name"
            type="text"
            label="Name"
            variant="bordered"
            className="w-[100%]"
          />
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
          <Button  variant="bordered" color='primary' className="w-[100%]" isDisabled={(name && email && password) ? false : true} onClick={onPressReg}>
            Register
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Register