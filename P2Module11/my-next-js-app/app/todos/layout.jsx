import React from 'react'

const TodoLayout = ({children}) => {
  return (
    <div className='border border-green-300 p-4'>
      <p>Inside the Todo Layout</p>
      {children}
    </div>
  )
}

export default TodoLayout
