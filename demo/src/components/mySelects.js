import React,{} from 'react'
import styles from './index.less'
export default function MySelects(props) {
    let {data} = props;
    console.log(data)
    return (
        <div className={styles.select}>
            {
                data?.map((item,index)=>{
                    return <div key={item.title}>
                        <span className={styles.title}>{item.title}</span>
                        {
                            item?.list?.map((ite,ind)=>{
                            return <span key={ind}>{ite?.title}</span>
                            })
                        }
                    </div>
                })
            }
        </div>
    )
}
