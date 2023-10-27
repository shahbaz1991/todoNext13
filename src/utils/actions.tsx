'use client'

import { TodoDescTypes } from './definedTypes';

export const getTodoTask = (todoId: string): TodoDescTypes | null => {
    const todoListJson = localStorage.getItem('todoList');
    if (todoListJson) {
        const todoList = JSON.parse(todoListJson);
        const todoFilteredTask = todoList.filter((item: TodoDescTypes) => item.id === todoId)
        return todoFilteredTask[0]
    } else {
        return null
    }
}

export const deleteTodoTask = (todoId: string): TodoDescTypes[] | [] => {
    const todoListJson = localStorage.getItem('todoList');
    if (todoListJson) {
        const filteredList: TodoDescTypes[] | [] = JSON.parse(todoListJson).filter((item: TodoDescTypes) => item.id !== todoId)
        return filteredList
    } else {
        return []
    }
}

export const updateTodoTask = (obj: TodoDescTypes): TodoDescTypes[] | [] => {
    try {
        const filteredList = deleteTodoTask(obj.id);
        let newList = [...filteredList, { ...obj }]
        localStorage.setItem('todoList', JSON.stringify(newList))
        return newList
    } catch (er) {
        return []
    }
}