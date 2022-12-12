import NextLink from 'next/link';

import {Typography,AppBar,Toolbar,IconButton} from '@mui/material'
import {MenuOutlined} from '@mui/icons-material'
export const Navbar = () => {
  return (
   <AppBar position='sticky' elevation={0}>
<Toolbar>
<IconButton
size='large'
edge='start'
>
<MenuOutlined/>
</IconButton>

<NextLink href='/' passHref>
    <Typography variant='h6' color='white'>
        CookieMaster
    </Typography>
</NextLink>

<div style={{flex:1}}/>
<NextLink href='theme-changer' passHref style={{textDecoration:'none'}}>
    <Typography variant='h6' color='white'>
        Cambiar Tema
    </Typography>
</NextLink>


</Toolbar>
   </AppBar>
  )
}
