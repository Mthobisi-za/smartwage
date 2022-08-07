import { useState } from "react";


function Submission({page}){
    const [text, setText] =  useState('Click Names To see Comment!')
    const [name, setName] = useState(null);
    let some = (param)=>{
        console.log(param)
        setText(param);
    }
    let makeList = function makeList(){
        if(page){
            let list = page[0].response.map(item =>
            <div onClick={(e)=>{some(e.target.className)}} className={item.comment} style={{margin:"auto", width: "70%", height: "40px", textAlign: 'center', fontSize:"20px", border: "black solid 2px"}} key={item.closedDate}>{item.userName}</div>
            )
            return list;
        }
    }
    return(
        <div style={{display: "grid", gridTemplateColumns: "auto auto"}}>
            <div>
                <p style={{fontsize: "30px"}} className="">submissions</p>
            <div style={{width: "30vw", display: "grid",  gap:"20px", gridTemplateColumns: "auto",overflow: "scroll", maxHeight: "30vw"}}>
            
                { makeList()}
            </div></div>
            <div>
            <p style={{fontsize: "30px"}} className="">Response</p>
                 <div style={{width: "30vw",minHeight:"90px", display: "grid",  gap:"20px", gridTemplateColumns: "auto",overflow: "scroll", maxHeight: "30vw", border: "2px solid black"}}>
               <p style={{textAlign:"center"}}>{text}</p>
            </div>
            </div>
           
        </div>
    )
}
export default Submission