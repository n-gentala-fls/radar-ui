import React, { useState, useRef, useEffect} from "react"
import { Box, Container, Grid, Menu, Typography } from "@mui/material"
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import MapboxExample from './Map'

const Radar = () => {
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#101012', color: 'white' }}>
                <Toolbar>
                    <IconButton edge="start" aria-label="menu" sx={{ mr: 2, color: "#00FF99" }}>
                       <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ color: "#00FF99", flexGrow: 1 }}>
                        GEODOME
                    </Typography>
                    <Button sx={{color: "#00FF99"}}>Stuff...</Button>
                </Toolbar>
            </AppBar>
            
            <Box
                backgroundColor="#0A0A0A"
                display="flex"
                minHeight="100vh"
                width="100vw"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    height="400px"
                    width="600px"
                    justifyContent="center"
                    backgroundColor="#1A1F1F"
                    borderRadius="12px"
                    boxShadow={5}
                    overflow="hidden"
                >
                    <MapboxExample />
                </Box>
            </Box>
        </>
    );
}

export default Radar