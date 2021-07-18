import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {AlumniSearch} from '../../../actions/admin/index';
import {Link} from 'react-router-dom';
import '../CSS/SearchUser.css'
const SearchAlumni = ({AlumniSearch,users}) => {
    const[name,setName]=useState('');
    const [search,setSearch]=useState('');
    useEffect(()=>{
        const id=setTimeout(()=>{
                setSearch(name);
        },500)
        return ()=>{
             clearTimeout(id);
        }
    },[name])
    useEffect(()=>{
        if(search){
            AlumniSearch(search);
        }
    },[search]);
    return (  
        <div>
            <form>
                <input type="text" className="search" placeholder="search" autoComplete="off" placeholder="" name="search" onChange={(e)=>{
                      setName(e.target.value);
                }}/>
            </form>
            <div class="show-User">
                {search?<h2>Search Result</h2>:<h2>Search for an Alumni</h2>}
                {users? search&&users.length<=0?<div className="EveryUser">No User found</div>: <div>
                   {users.map((user)=>{
                      return(<Link to={`/admin/watch/alumniProfile/${user._id}`}><div class="EveryUser">{user.name}</div></Link>)
                   })}
               </div>:null}
               
            </div>
        </div>
    );
};

const mapStateToProps=(state)=>{
    return({
        users:state.AdminProfile.searchAlumni.alumni
    })
}
export default connect(mapStateToProps,{AlumniSearch})(SearchAlumni);