import React from 'react'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

const ButtonPrimary = () => {
  
  const {t} = useTranslation()

  return (
    <Button variant="contained" href="#contact" 
    sx={{width:'130px', fontWeight:'600', height:'36px', borderRadius:'20px', textTransform:'capitalize'
    }}
    >
           {t('button.btnText')} 
  </Button>
  )
}

export default ButtonPrimary