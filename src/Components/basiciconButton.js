import { Button } from '@mui/material';
import React from 'react'

const BAIconButton = (props) => {
    const {icon,label,type} = props
  return (
    <div>
      <Button 
      icon={icon}
      label={label}
      type={type}
      />
    </div>
  )
}

export default BAIconButton;
