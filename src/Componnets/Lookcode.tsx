import React, { useEffect, useRef, useState } from 'react'
import '../Css/lookcode.css'
export default function Lookcode() {
    
    
    const arraylook = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    const showbtn = async()=>{
        setTimeout(() => {
            
            const charone = document.getElementById('my_id_one_'+12);
            charone?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        setTimeout(() => {
            
            const chartow = document.getElementById('my_id_tow_'+8);
            chartow?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 700);
        setTimeout(() => {
            const charthree = document.getElementById('my_id_three_'+13);
            charthree?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1200);
        setTimeout(() => {
            const charfour = document.getElementById('my_id_four_'+0);
            charfour?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1700);
        
    }
    
  return (
    <>
    
    <div className='title-looker'>Lookcode</div>
    <div className='container-looker'>

        <div className='scrol-looker'>
                {
                    arraylook.map((indexing:any , id)=>
                        <span
                    key={id}
                    id={"my_id_one_"+id}
                    className='main-looker'>{indexing}</span>
                )
            }
        </div>
        <div className='scrol-looker'>
                {
                    arraylook.map((indexing:any , id)=>
                        <span
                    key={id}
                    id={"my_id_tow_"+id}
                    className='main-looker'>{indexing}</span>
                )
            }
        </div>
        <div className='scrol-looker'>
                {
                    arraylook.map((indexing:any , id)=>
                        <span
                    key={id}
                    id={"my_id_three_"+id}
                    className='main-looker'>{indexing}</span>
                )
            }
        </div>
        <div className='scrol-looker'>
                {
                    arraylook.map((indexing:any , id)=>
                        <span
                    key={id}
                    id={"my_id_four_"+id}
                    className='main-looker'>{indexing}</span>
                )
            }
        </div>
    </div>
    <button className='showbtn' onClick={showbtn}>click on me</button>
    
    </>
  )
}
