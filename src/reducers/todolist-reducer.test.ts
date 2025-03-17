import {v1} from 'uuid'
import type {TodolistType} from '../App'
import { todolistReducer } from './todolists-reducer'
 
test('correct todolist should be deleted', () => {
  const todolistId1 = v1()
  const todolistId2 = v1()
 
  // 1. Стартовый state
  const startState: TodolistType[] = [
    {id: todolistId1, title: 'What to learn', filter: 'all'},
    {id: todolistId2, title: 'What to buy', filter: 'all'},
  ]
 
  // 2. Действие
  const action = {
    type: 'delete_todolist',
    payload: {
      id: todolistId1,
    },
  }
  const endState = todolistReducer(startState, action)
 
  // 3. Проверка, что действие измененило state соответствующим образом
  // в массиве останется один тудулист
  expect(endState.length).toBe(1)
  // удалится нужный тудулист, не любой
  expect(endState[0].id).toBe(todolistId2)
})