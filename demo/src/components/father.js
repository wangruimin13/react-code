import React,{useState} from 'react'
import Son from './son'
export default function Father() {
    const [num,setNum] = useState(0)
    return (
        <div>
            num={num}
            <Son setNum={setNum}></Son>
        </div>
    )
}
