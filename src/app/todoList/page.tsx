'use client'

import { TodoDescTypes } from '@/utils/definedTypes';
import React, { useEffect, useState } from 'react'
import { Input, Button, Textarea, Divider, Card, CardBody, CardFooter, CardHeader, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import { deleteTodoTask, updateTodoTask } from '@/utils/actions';

const short = require('short-uuid');

function TodoList() {
  const [todoList, setTodoList] = useState<TodoDescTypes[] | []>([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [completed, setCompleted] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const route = useRouter()

  useEffect(() => {
    const todoListJson = localStorage.getItem('todoList');
    if (todoListJson) {
      setTodoList(JSON.parse(todoListJson))
    } else {
      setTodoList([])
    }
  }, []);

  const addTask = (onClose: () => void) => {
    if (title && desc) {
      const todoTask = {
        id: short.generate(),
        desc,
        title,
        completed
      }
      // let newList = []
      // if (todoList) {
      //   newList = [...todoList, todoTask]
      // } else {
      //   newList = [todoTask]
      // }
      // localStorage.setItem('todoList', JSON.stringify(newList))
      const newList = updateTodoTask(todoTask)
      setTodoList(newList)
      setTitle('')
      setDesc('')
      setCompleted(false)
      onClose()
    }
  }

  const deleteTask = (id: string) => {
    // const filteredList = todoList.filter(item => item.id !== id)
    // setTodoList(filteredList)
    // localStorage.setItem('todoList', JSON.stringify(filteredList))
    const newList = deleteTodoTask(id);
    setTodoList(newList)
  }

  return (
    <>
      <div className='px-5'>
        <div className='my-2 flex justify-center'>
          <Button color="warning" variant="shadow" onPress={onOpen}>
            Add Task
          </Button>
        </div>
        <div className='mb-[5%] flex flex-row flex-wrap gap-x-2 gap-y-2'>
          {
            (todoList.length !== 0) && todoList.map(item => (
              <Card key={item.id} className="w-[300px] max-h-[200px]">
                <CardHeader>
                  {item.title.toUpperCase()}
                </CardHeader>
                <Divider />
                <CardBody>
                  <p className='whitespace-nowrap text-ellipsis overflow-hidden'>{item.desc}</p>
                </CardBody>
                <Divider />
                <CardFooter className='flex justify-end gap-x-1'>
                  <Button color="secondary" variant="bordered" size={'sm'} onPress={() => route.push(`/todoList/${item.id}`)}>View</Button>
                  <Button color="primary" variant="bordered" size={'sm'} onPress={() => route.push(`/todoList/update/${item.id}`)}>Update</Button>
                  <Button color="danger" variant="bordered" size={'sm'} onPress={() => deleteTask(item.id)}>Delete</Button>
                </CardFooter>
              </Card>
            ))
          }
        </div>
      </div>
      <Modal isDismissable={false} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">TODO TASK</ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  value={title}
                  onValueChange={setTitle}
                  placeholder="Enter your title"
                  type="text"
                  label="Title"
                  variant="bordered"
                  className="w-[100%]"
                />
                <Textarea
                  isRequired
                  value={desc}
                  onValueChange={setDesc}
                  placeholder="Enter your description"
                  type="text"
                  label="Description"
                  variant="bordered"
                  className="w-[100%]"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="bordered" onPress={onClose}>
                  Cancle
                </Button>
                <Button color="primary" variant="bordered" onPress={() => addTask(onClose)}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default TodoList