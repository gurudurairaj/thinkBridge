import * as React from "react";
import { useEffect,useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSelector,useDispatch } from "react-redux";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {actions as home} from '../store/home'

const RestaurtantsView =()=>{
    const [searchValue,setSearchValue]=useState('');
    const dispatch=useDispatch()
    const [open, setOpen] = useState(false);  
    const [edit, setEdit] = useState(false); 
    const [addRest, setAddRest] = useState({
        name:"",
        subName:"", 
        location:"",
        phone:"",
        description:"",


    }); 
    const restaurtantsData=useSelector(state=>state.home.restData)
    useEffect(()=>{

    },[])

    const handleClickOpen = () => {
        setOpen(true);
        setEdit(false)
      };
      
    const handleAdd= (e) => {
        setAddRest((prev)=>
            ({...prev,
              [e.name]:e.value,}))
      };

    const handleAddSubmit= (e) => {
        if(edit){
            dispatch(home.editRestaurants(addRest))
        }
        else{
            addRest.sno=restaurtantsData?.length+1
            dispatch(home.addRestaurants(addRest))
        }
        setOpen(false)       
    };

    const handleCancel= (e) => {
        setAddRest({
            name:"",
            subName:"", 
            location:"",
            phone:"",
            description:"",
        })
        setOpen(false)
    }

    const handleEdit= (data) => {
        setAddRest({
            name:data?.name,
            subName:data?.subName, 
            location:data?.location,
            phone:data?.phone,
            description:data?.description,
            sno:data?.sno,
            imgURL:data?.imgURL
        })
        setOpen(true)
        setEdit(true)
    }

    const handleDelete= (data) => {
        dispatch(home.deleteRestaurants(data))
    }
       

    return (
        <>
          <Box sx={{  margin:'20px' }}>
            <Box sx={{ display: 'flex',flexDirection:'row',  }}> 
            <Box >  
            <Button variant="outlined" size="medium" onClick={handleClickOpen}>
              Add Restaurant
            </Button>
            <Dialog
              open={open}
              onClose={()=>{setOpen(false)}}>
                 <DialogTitle>{edit?'Edit Restaurants':'Add Restaurants'} </DialogTitle>
                   <DialogContent>
                    <Box>

                      <Box style={{display: 'flex',flexDirection:'row'}} >
                        <Box style={{display: 'flex',flexDirection:'cloumn'}} >
                            <TextField id="name" name="name" value={addRest?.name} label="Enter Name" variant="standard"  onChange={e=>handleAdd(e?.target)}/>
                        </Box>
                        <Box style={{display: 'flex',flexDirection:'column'}} >
                              <TextField id="subName" name="subName" value={addRest?.subName} label="Enter SubName" variant="standard"  onChange={e=>handleAdd(e?.target)}/>
                        </Box>                      
                      </Box>

                      <Box style={{display: 'flex',flexDirection:'row'}} >
                        <Box style={{display: 'flex',flexDirection:'cloumn'}} >
                            <TextField id="location" name="location" value={addRest?.location} label="Enter location" variant="standard"  onChange={e=>handleAdd(e?.target)}/>
                        </Box>
                        <Box style={{display: 'flex',flexDirection:'column'}} >
                              <TextField id="phone" name="phone" value={addRest?.phone} label="Enter phone" variant="standard"  onChange={e=>handleAdd(e?.target)}/>
                        </Box>
                      </Box>

                      <Box style={{display: 'flex',flexDirection:'row'}} >
                        <Box style={{display: 'flex',flexDirection:'cloumn'}} >
                            <TextField id="description" name="description"  value={addRest?.description} label="Enter description" variant="standard"  onChange={e=>handleAdd(e?.target)}/>
                        </Box>
                      </Box>

                   </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCancel}>Cancel</Button>
                  <Button  onClick={handleAddSubmit}>{edit?'Edit':'Add'}</Button>
                </DialogActions>
              </Dialog>
             </Box>
             <Box>
             <TextField id="searchInput" label="search by name" variant="standard"  onChange={e=>{setSearchValue(e.target.value);}}/>
             </Box>
            </Box>
          
              <Box style={{display:'flex' ,justifyContent:'space-between',width:'100%'}}>
                <Box style={{display:'flex',flexDirection:'row' , }}>
               {  
                restaurtantsData?.filter((filData)=>{ 
                   if(searchValue ){
                       if (filData?.name?.toLowerCase().includes(searchValue.toLowerCase()) ){     
                          return filData
                        }           
                    } 
                    else{ return filData}
                 
                }).map((data)=>{
                   return(
                       <Card  class="displayCard" sx={{maxWidth: 150, flex:'1 1 21%' ,margin:'5px'}} >
                           <CardHeader
                               title={data?.name}
                               subheader={data?.subName}
                     
                        />
                           <CardMedia
                             component="img"
                             height="194"
                             
                             image={data?.imgURL}
                             alt="food"/>
             
                           <CardContent>
                                 <Typography gutterBottom variant="h5" component="div">
                                 {data?.name}
                                </Typography>       
                             <Typography variant="body2" color="text.secondary">
                               <span style={{fontWeight:'bold'}}>Location : </span>{data?.location}
                             </Typography>
                             <Typography variant="body2" color="text.secondary">
                               <span style={{fontWeight:'bold'}}>Phone : </span>{data?.phone}
                             </Typography>
                             <Typography variant="body2" sx={{width:'250px'}}>
                                {data?.description}
                             </Typography>
                             
                         </CardContent>
                         <CardActions disableSpacing>
                            <IconButton aria-label="Edit" onClick={()=>{handleEdit(data)}}>
                              <EditIcon />
                            </IconButton>
                            <IconButton aria-label="Delete" onClick={()=>{handleDelete(data)}}>
                              <DeleteIcon />
                            </IconButton>
                          </CardActions>
                        
                      </Card>
                    )
                 })
                }   
                </Box>      
            </Box>
            </Box>

          
        </>
    )

}

export default RestaurtantsView;