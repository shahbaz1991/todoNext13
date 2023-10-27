'use client'
import React, { useState } from 'react'
import { Input, Checkbox, Button, Textarea, Divider, Card, CardBody, CardFooter, CardHeader, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { getTodoTask, updateTodoTask } from '@/utils/actions';
import { useRouter } from 'next/navigation';

function UpdateTodo({ params }: { params: { todoId: string } }) {
  const todoDetails = getTodoTask(params.todoId);
  console.log(todoDetails);

  const [title, setTitle] = useState(todoDetails?.title);
  const [desc, setDesc] = useState(todoDetails?.desc);
  const [completed, setCompleted] = useState(todoDetails?.completed || false);
  const route = useRouter()

  const updateTodo = () => {
    if (title && desc) {
      let updatedTask = {
        id: params.todoId,
        desc,
        title,
        completed
      }
      const updateStatus = updateTodoTask(updatedTask)
      if (updateStatus.length !== 0) {
        route.back()
      }
    }
  }

  return (
    <div className='bg-red-400 flex '>
      <Card>
        <CardBody>
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
          <Checkbox name='completed' isSelected={completed} onChange={(e) => setCompleted(e.target.checked)} >Completed</Checkbox>
        </CardBody>
        <CardFooter>
          <Button onPress={updateTodo}>
            Update
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default UpdateTodo