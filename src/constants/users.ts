export interface User {
  id: number
  name: string
  title: string
  content: string
}

export const users: User[] = [
  {
    id: 1,
    name: 'Evan',
    title: 'Teacher',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, officiis!',
  },
  {
    id: 2,
    name: 'Jimmy',
    title: 'Boss',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, tempora.',
  },
  {
    id: 3,
    name: 'Giles',
    title: 'Sales',
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vero.',
  },
]
