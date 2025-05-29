import React from 'react'; 
function Filt1() { 
    const arr=[1,2,3,4,5,3,7,3,9]; 
    const newarr = arr.filter((num)=> 
    { 
        if(num===3){ 
            return false; 
        } 
        else{ 
            return true; 
        } 
    }); 
    var arr1 = arr.join(", ");
    var arr2 = newarr.join(", ");
    return ( 
            <div> 
                <h1>Array elements before applying filter <span style={{color:"red"}}> {arr1} </span> 
        </h1> 
                <h1>Array elements after applying filter <span style={{color:"red"}}> {arr2} </span> 
        </h1> 
            </div> 
    ) 
} 
export default Filt1 