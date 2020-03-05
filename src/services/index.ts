import axios from 'axios'

export type LoadingData = {
  userId: string
  id: number
  title: string
  completed: boolean
}

export const load = async () => {
  const data = (await axios.get('https://jsonplaceholder.typicode.com/todos/1')).data
  return data
}
