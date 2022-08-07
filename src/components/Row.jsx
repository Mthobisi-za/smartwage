import { useState } from 'react'
import './row.css'


function Row({surveyName, createdBy, responses, launchDate, closeDate, status, color, navigation, changeUseNum}){
    var str = 'column'
    var secStr = 'tab'
    const [color_r, setColor_r] = useState(true)
    return(
            <div className={secStr} >
                <div className="column">
                    <p>{surveyName}</p>
                </div>
                <div className="column">
                    <p>{createdBy}</p>
                </div>
                <div className="column">
                    <p>{responses}</p>
                </div>
                <div className="column">
                    <p>{launchDate}</p>
                </div>
                <div className="column">
                    <p>{closeDate}</p>
                </div>
                <div className="column">
                    <p className={str+ ' ' + status}>{status}</p>
                </div>
                <div className="column" onClick={()=>{navigation(closeDate, surveyName)}} >
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-line" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="4" y1="19" x2="20" y2="19" />
                        <polyline points="4 15 8 9 12 11 16 6 20 10" />
                    </svg>
                </div>
            </div>
            
       
        
    )
}
export default Row