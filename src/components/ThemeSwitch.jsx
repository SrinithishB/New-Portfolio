import { FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import { MaterialUISwitch } from '../styledComponents/Switch/Switch.styles'
import { useDispatch, useSelector} from 'react-redux'
import { darkMode, lightMode, selectTheme } from '../app/ThemeSlice'

const ThemeSwitch = () => {
  let dispatch=useDispatch()
  let theme=useSelector(selectTheme)
  return (
    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch defaultChecked={theme==='dark'} sx={{ m: 1 }} onChange={(x)=>{
          x.target.checked?dispatch(darkMode())
            :dispatch(lightMode())
        }}/>}
        
      />
      </FormGroup>
  )
}

export default ThemeSwitch