import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialRestData= {
      restData:[
        {
        sno:1,name:"A2B",subName:"Delicious in the town", location:"chennai",phone:"12345678",description:"Biryani is a mixed rice dish, mainly popular in South Asia. It is made with rice, some type of meat and spices. To cater to vegetarians, in some cases, it is prepared by substituting vegetables or paneer for the meat. Sometimes eggs and/or potatoes are also added.",imgURL:"https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg?size=626&ext=jpg"
        },
        {
          sno:2, name:"Adayar",subName:"Delicious in the town", location:"coimbatore",phone:"99968845",description:"Biryani is a mixed rice dish, mainly popular in South Asia. It is made with rice, some type of meat and spices. To cater to vegetarians, in some cases, it is prepared by substituting vegetables or paneer for the meat. Sometimes eggs and/or potatoes are also added.",imgURL:"https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg?size=626&ext=jpg"
        },
        {
          sno:3,name:"DThala",subName:"Delicious in the town", location:"Dindigul",phone:"0045677",description:"Biryani is a mixed rice dish, mainly popular in South Asia. It is made with rice, some type of meat and spices. To cater to vegetarians, in some cases, it is prepared by substituting vegetables or paneer for the meat. Sometimes eggs and/or potatoes are also added.",imgURL:"https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148986823.jpg?size=626&ext=jpg"
        },
      
      ]
};

export const tbSlice = createSlice({
    name:'restaurants',
    initialState:initialRestData,
    reducers:{
      addRestaurants(state,action){
         action.payload.sno=state.restData.length+1
          state.restData.push(action.payload)
      },
      editRestaurants(state,action){  
        state.restData.map((a,ind)=>{
          if(a.sno===action.payload.sno){
            state.restData[ind]=action.payload
          }
        })
    },
    deleteRestaurants(state,action){
      state.restData=state.restData.filter((data)=>{
            if(data.sno!==action.payload.sno){
              return data
            }
      })
    },
    },
   
  })

  export const AddARestaurtant = createAsyncThunk('restaurants/AddARestaurtant',async (payload) =>{
    const response =  await axios.post('url', payload);
    const data = await response.json();
    return data;
 })

 export const EditRestaurtant = createAsyncThunk('restaurants/EditRestaurtant',async (payload) =>{
  const response =  await axios.post('url', payload);
  const data = await response.json();
  return data;
})


export const {reducer,actions}=tbSlice