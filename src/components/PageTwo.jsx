import { useEffect,useState } from "react";
import './pagetwo.css'
import Submission from "./Submission";


/*----Page Two----* */
function PageTwo({title, navigation, num}){

    const [page, setPage] = useState(null);

    /*---Use Effect To get data from api----* */
    useEffect(() => {
        fetch(`http://localhost:3000/feedback?closeDate=${num}`)
            .then(res => res.json())
            .then(res =>{setPage(res)})
    }, []);
    /*---Use Effect To get data from api----* */

    return(
        <div className="second-page-container">
            
            <div className="second-top">
                <p onClick={()=>{navigation()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line x1="5" y1="12" x2="9" y2="16" />
                        <line x1="5" y1="12" x2="9" y2="8" />
                    </svg>
                </p>
                <p className="second-text">{title}</p>
            </div>
            
            <div className="body-content">
                <div className="wrapper-top" style={{marginTop: "100px", marginLeft: "50px"}}>
                <Submission page={page}/>
                </div>
            </div>
        </div>
    )
}
/*----Page Two----* */
export default PageTwo