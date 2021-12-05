import { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
//import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Delete from '@mui/icons-material/Delete';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { borders } from '@mui/system';
import List from '@mui/material/List';
import Top5Item from './Top5Item.js';
import ThumbUp from '@mui/icons-material/ThumbUp';
import ThumbDown from '@mui/icons-material/ThumbDown';

function ListCard(props){
    const { store } = useContext(GlobalStoreContext);
    const [editActive, setEditActive] = useState(false);
    //const [expandActive, setExpandActive] = useState(false);
    const [text, setText] = useState("");
    const { idNamePair, selected } = props;


    function handleLoadList(event, id) {
        console.log("handleLoadList for " + id);
        if (!event.target.disabled) {
            let _id = event.target.id;
            if (_id.indexOf('list-card-text-') >= 0)
                _id = ("" + _id).substring("list-card-text-".length);

            console.log("load " + event.target.id);

            // CHANGE THE CURRENT LIST
            store.setCurrentList(id);
            console.log(store.currentList)
        }
    }

    function handleToggleEdit(event) {
        event.stopPropagation();
        toggleEdit();
    }

    function toggleEdit() {
        let newActive = !editActive;
        if (newActive) {
            store.setIsListNameEditActive();
        }
        setEditActive(newActive);
    }

    //need to create a toggleExpand
    function handleToggleExpand(event) {
        event.stopPropagation();
        //toggleExpand();
    }
    

    async function handleDeleteList(event, id) {
        event.stopPropagation();
        let _id = event.target.id;
        _id = ("" + _id).substring("delete-list-".length);
        store.markListForDeletion(id);
    }

    function handleKeyPress(event) {
        if (event.code === "Enter") {
            let id = event.target.id.substring("list-".length);
            store.changeListName(id, text);
            toggleEdit();
        }
    }
    function handleUpdateText(event) {
        setText(event.target.value);
    }

    let selectClass = "unselected-list-card";
    if (selected) {
        selectClass = "selected-list-card";
    }
    let cardStatus = false;
    if (store.isListNameEditActive) {
        cardStatus = true;
    }

    let cardElement =
        <Box sx={{
            backgroundColor: 'gray',
            borderTop: 1,
            borderRight: 1,
            borderBottom: 1,
            borderLeft: 1,
            borderColor: 'black',
            borderRadius: 1,
            marginTop: '10px'
            }}>

            <ListItem
                id={idNamePair._id}
                key={idNamePair._id}
                sx={{ marginTop: '10px', display: 'flex', p: 0}}
                style={{ width: '100%' }}
                style={{
                    fontSize: '24pt',
                    backgroundColor: 'gray'
                }}
            >

                <Box sx={{ p: 1, flexGrow: 1, fontSize: '20pt'}}>
                    {idNamePair.name}
                    <Box sx={{p: 0, fontSize: '12pt'}}>By: {idNamePair.ownerUserName}</Box>
                    <Box sx={{p: 0, fontSize: '12pt'}}>
                        <IconButton onClick={(event) => {handleLoadList(event, idNamePair._id)}} sx={{fontSize: '12pt'}}>
                            Edit
                        </IconButton>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <IconButton>
                            <ThumbUp></ThumbUp>
                            800
                        </IconButton>
                    </Box>
                    <Box sx={{fontSize: '12pt'}}>
                        Views: {}
                    </Box>
                </Box>
                <Box>
                    <IconButton>
                        <ThumbDown></ThumbDown>
                        800
                    </IconButton>
                </Box>


                <Box>
                    <Box>
                        <IconButton onClick={(event) => {
                            handleDeleteList(event, idNamePair._id)
                        }}>
                            <Delete></Delete>
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton onClick={(event) => {
                            handleLoadList(event, idNamePair._id)
                        }}>
                            <KeyboardArrowDown></KeyboardArrowDown>
                        </IconButton>
                    </Box>
                </Box> 
            </ListItem>
        </Box>

/*
    if (editActive) {
        cardElement =
            <TextField
                margin="normal"
                required
                fullWidth
                id={"list-" + idNamePair._id}
                label="Top 5 List Name"
                name="name"
                autoComplete="Top 5 List Name"
                className='list-card'
                onKeyPress={handleKeyPress}
                onChange={handleUpdateText}
                defaultValue={idNamePair.name}
                inputProps={{style: {fontSize: 48}}}
                InputLabelProps={{style: {fontSize: 24}}}
                autoFocus
            />
    } */

    if(store.currentList){
        cardElement =
        <Box sx={{
            backgroundColor: 'gray',
            borderTop: 1,
            borderRight: 1,
            borderBottom: 1,
            borderLeft: 1,
            borderColor: 'black',
            borderRadius: 1,
            marginTop: '10px'
            }}>

            <ListItem
                id={idNamePair._id}
                key={idNamePair._id}
                sx={{ marginTop: '10px', display: 'flex', p: 0}}
                style={{ width: '100%' }}
                style={{
                    fontSize: '24pt',
                    backgroundColor: 'gray'
                }}
            >

                <Box sx={{ p: 1, flexGrow: 1, fontSize: '20pt'}}>
                    {idNamePair.name}
                    <Box sx={{p: 0, fontSize: '12pt'}}>I am the author</Box>
                    {/*<Box>
                            {
                                store.currentList.items.map((item, index) => (
                                <Top5Item 
                                key={'top5-item-' + (index+1)}
                                text={item}
                                index={index} 
                                />
                                ))
                            }
                        </Box>*/}
                    <Box sx={{p: 0, fontSize: '12pt'}}>
                        <IconButton onClick={(event) => {handleLoadList(event, idNamePair._id)}} sx={{fontSize: '12pt'}}>
                            Edit
                        </IconButton>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <IconButton onClick={(event) => {
                            handleDeleteList(event, idNamePair._id)
                        }}>
                            <Delete></Delete>
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton onClick={(event) => {
                            handleLoadList(event, idNamePair._id)
                        }}>
                            <KeyboardArrowDown></KeyboardArrowDown>
                        </IconButton>
                    </Box>
                </Box> 
            </ListItem>
        </Box>
    }


    return (
        cardElement
    );
}

export default ListCard;