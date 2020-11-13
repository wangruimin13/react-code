import React,{useEffect,useState} from 'react'
import './App.css';
// import Tables from './components/table'
import MySelects from './components/mySelects'
function App() {
    let [lists,setLists] = useState([])
    useEffect(()=>{
        setLists([
            {
                title:'部门',
                list:[
                    {
                        title:'客房部'
                    },
                    {
                        title:'餐饮部',
                        list:[
                            '部门整体',

                            "中餐厅",
                            
                            "西餐厅",
                            
                            "日式餐厅"
                        ]
                    },
                    {
                        title:'前厅部'
                    },{
                        title:'礼宾部'
                    },{
                        title:'康乐部'
                    },{
                        title:'工程部'
                    },{
                        title:'安保部'
                    }
                ]
            },
            {
                title:'区域',
                list:[
                    '部门整体',

                    "中餐厅",
                    
                    "西餐厅",
                    
                    "日式餐厅"
                ]
            },
            {
                title:'维度',
                list:[
                    '部门整体',

                    "中餐厅",
                    
                    "西餐厅",
                    
                    "日式餐厅"
                ]
            }
        ])
    },[])
    return (
        <div className="App">
            <MySelects data={lists}/>
        </div>
    );
}

export default App;
