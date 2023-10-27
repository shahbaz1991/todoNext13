'use client'
import { TodoDescTypes } from '@/utils/definedTypes';
import React, { useEffect, useState } from 'react'

function TodoId({ params }: { params: { todoId: string } }) {
    const [todoDetails, setTodoDetails] = useState<TodoDescTypes | null>(null);

    useEffect(() => {
        const getFullListJson = localStorage.getItem('todoList');
        console.log('inner', getFullListJson);

        if (getFullListJson) {
            const todoDetail = JSON.parse(getFullListJson).filter((item: any) => item.id === params.todoId)
            if (todoDetail.length !== 0) {
                setTodoDetails(todoDetail[0]);
            }
        }
    }, [params.todoId]);

    return (
        <div>
            {todoDetails &&
                <div>
                    <p>{todoDetails.title}</p>
                    <p>{todoDetails.desc}</p>
                    <p>{todoDetails.completed ? 'completed' : 'not completed'}</p>
                </div>
            }
        </div>
    )
}

export default TodoId