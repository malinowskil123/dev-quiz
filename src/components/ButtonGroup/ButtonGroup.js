import React from 'react'
import Button from '../Button/Button'
import './ButtonGroup.css'

function ButtonGroup({ buttons }) {
  const getButtonsJSX = () =>
    buttons.map((elm) => {
      const { type, action, path } = elm
      return (
        <Button
          key={type}
          onClick={action && action}
          path={path && path}
          size='sm'
        >
          {type}
        </Button>
      )
    })
  return <div className='ButtonGroup'>{getButtonsJSX()}</div>
}

export default ButtonGroup
