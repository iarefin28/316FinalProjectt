import React, { useContext, useEffect } from 'react'
import { GlobalStoreContext } from '../store'
import ListCard from './ListCard.js'
import MUIDeleteModal from './MUIDeleteModal'

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab'
import List from '@mui/material/List';
import Typography from '@mui/material/Typography'


import { Link } from 'react-router-dom'
import AuthContext from '../auth';


import EditToolbar from './EditToolbar'

import AccountCircle from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Home from '@mui/icons-material/Home';
import Groups from '@mui/icons-material/Groups';
import Person from '@mui/icons-material/Person';
import Functions from '@mui/icons-material/Functions';
import Sort from '@mui/icons-material/Sort';
//import SearchBar from "material-ui-search-bar";
import { Icon, TextField } from '@mui/material';


/*
    This React component lists all the top5 lists in the UI.
    
    @author McKilla Gorilla
*/
const HomeScreen = () => {
    const { store } = useContext(GlobalStoreContext);

    useEffect(() => {
        store.loadIdNamePairs();
    }, []);

    function handleCreateNewList() {
        store.createNewList();
    }
    let listCard = "";
    if (store) {
        console.log(store.idNamePairs)
        listCard = 
            <List sx={{ width: '90%', left: '5%', bgcolor: 'lightgray' }}>
            {
                store.idNamePairs.map((pair) => (
                    <ListCard
                        key={pair._id}
                        idNamePair={pair}
                        selected={false}
                    />
                ))
            }
            </List>;
    }
    return (
        <div id="top5-list-selector">
            <div id="list-selector-tool">
                <AppBar position="static">
                    <Toolbar>
                        <Box sx={{ p: 1}}>
                            <IconButton  aria-label='home'>
                                <Home style={{fontSize:'24pt'}} />
                            </IconButton>
                            <IconButton  aria-label='groups'>
                                <Groups style={{fontSize:'24pt'}} />
                            </IconButton>
                            <IconButton  aria-label='person'>
                                <Person style={{fontSize:'24pt'}} />
                            </IconButton>
                            <IconButton  aria-label='functions'>
                                <Functions style={{fontSize:'24pt'}} />
                            </IconButton>
                        </Box>
                        <Box sx={{width: 300, flexGrow: 1}}>
                            <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth/>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex'} }}>
                            <IconButton edge="end">
                                SORT BY 
                                <Sort style={{fontSize:'24pt'}} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </div>
            <div id="list-selector-list" >
                {
                        listCard
                }
                <MUIDeleteModal />
            </div>
            <div id="list-selector-heading">
            <Fab 
                color="primary" 
                aria-label="add"
                id="add-list-button"
                onClick={handleCreateNewList}
            >
                <AddIcon />
            </Fab>
                <Typography variant="h2">Your Lists</Typography>
            </div>


        </div>)
}

export default HomeScreen;
/*
<Box sx={{ p: 1, flexGrow: 1 }}>{idNamePair.name}</Box>
                <Box sx={{ p: 1 }}>
                    <IconButton onClick={handleToggleEdit} aria-label='edit'>
                        <EditIcon style={{fontSize:'48pt'}} />
                    </IconButton>
                </Box>
                <Box sx={{ p: 1 }}>
                    <IconButton onClick={(event) => {
                        handleDeleteList(event, idNamePair._id)
                    }} aria-label='delete'>
                        <DeleteIcon style={{fontSize:'48pt'}} />
                    </IconButton>
                </Box> */