import axios from "axios";
import { useEffect,useState } from "react";
import map from "lodash/map";

function Users() {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        const api=axios.create({
            baseURL:"http://localhost:3500"
        });

        const fetchUsers=async()=>{
            try{
                const res= await api.get('/users',{params:{
                    // "_limit":1
                }});
                setUsers(res.data);
                console.log(res.data);
            }
            catch(err){
                console.log(err);
            }
        }

        const addUsers=async()=>{
            try{
                const res= await api.post('/users',{name:"lara",age:26,id:5});
                setUsers(res.data);
                console.log(res.data)
            }
            catch(err){
                console.log(err);
            }
        }
        const deleteUsers=async(id)=>{
            try{
                const res= await api.delete(`/users/${id}`);
                setUsers(res.data);
                console.log(res.data)
            }
            catch(err){
                console.log(err);
            }
        }
        const updateUsers=async(id)=>{
            try{
                const res= await api.patch(`/users/${id}`,{name:"abood"});
                setUsers(res.data);
                console.log(res.data)
            }
            catch(err){
                console.log(err);
            }
        }
        // addUsers();
        // deleteUsers(3);
        updateUsers(2);
        fetchUsers();
    },[]);

    return(
        <>
        {
            map(users,(us)=><h1>{us.name}</h1>)
        }
        </>
    );

}

export default Users;