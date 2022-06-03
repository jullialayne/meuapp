import React from 'react'

const Loading = ({visable}) => {
  return (
    <div>
      {visable ? 'Carregando...' : ''}
    </div>
  )
}
export default Loading;