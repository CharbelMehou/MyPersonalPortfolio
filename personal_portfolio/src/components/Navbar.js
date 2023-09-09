import { Box } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Logo from '../assets/icons/logoName.png'
import LangageSwitcher from './langageSwitcher'
const Navbar = () => {
  const {t} = useTranslation();

  return (
    <Box  className="navbar" style={{display: 'flex', flexDirection: 'row' ,justifyContent: 'space-between',width:{xs:'50%',lg:'100%'}}}>
        <img src={Logo} style={{height:'50px'}}alt="logo"/>
        <Box  sx={{ display: 'flex', flexDirection: 'row', justifyContent:'center',alignItems: 'flex-end',gap:2,fontSize:'20px'}} >
          <a href='#aboutMe' className='link-style'>{t('about')}</a>
          <a href='#skills' className='link-style'>{t('skills')}</a>
          <a href='#projects' className='link-style'>{t('projects')}</a> 
          <a href='#certifications' className='link-style'>{t('certifications')}</a>   
          <a href='#interests' className='link-style'>{t('interests')}</a>  
        </Box>
         <Box sx={{ display: 'flex',alignItems: 'flex-end', justifyContent: { xs: 'flex-start', lg: 'flex-end' } }}>
            <LangageSwitcher/>
         </Box>
    </Box>
  );
}

export default Navbar;





