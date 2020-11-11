import React,{useEffect} from 'react'

export default function Son(props) {
    let {setNum} = props;
    useEffect(()=>{
        setTimeout(()=>{
            setNum(1)
        },1000)
        
    },[])
    return (
        <div>
            
        </div>
    )
}
