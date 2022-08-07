import { useEffect, useState } from 'react';
import './container.css';
import Row from './Row';
function Container({navigation}){
    //nav
    var colorState = true;
    const [survey, setSurvey] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [limit, setLimit] = useState(8);
    const [cal, setCal] = useState(0);
    const [usenum, setUseNum] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3000/surveys?_page=${pageNum}&_limit=${limit}`)
         .then((para) => para.json()).then(res =>{setSurvey(res)});
         fetch('http://localhost:3000/surveys').then(res => res.json()).then(res =>{var length = res.length / limit;setCal(length)} )
      }, [limit, pageNum]);

    function done(){
    const surveyList = survey.map((item) => 
    item.status == 'Live'? <Row surveyName={item.surveyName} createdBy={item.createdBy} responses={item.responses} launchDate={item.launchDate} closeDate={item.closeDate} status={item.status} color="grey" key={item.closeDate+item.closeDate} navigation={navigation}/> :
    <Row surveyName={item.surveyName} createdBy={item.createdBy} responses={item.responses} launchDate={item.launchDate} closeDate={item.closeDate} status={item.status} color="white" navigation={navigation}/>  
    );
    return surveyList}
    function makeOption(){
        var count = 0;
    }
    
    return(
        <div className="container">
            <div className="top-tab">
                <div className="column">
                    <p>Survey Name</p>
                </div>
                <div className="column">
                    <p>Created By</p>
                </div>
                <div className="column">
                    <p>Responses</p>
                </div>
                <div className="column">
                    <p>Launch Date</p>
                </div>
                <div className="column">
                    <p>Close Date</p>
                </div>
                <div className="column">
                    <p>Status</p>
                </div>
                <div className="column">
                    <br/>
                </div>
            </div>
            <div className="column-container">
                {survey !== null? done() : <h1>Loading</h1>}
            </div>
            <div className="line-spacer-full"></div>
            <div className="pagination">
                <p style={{textAlign: "right"}}> Rows per page  <span style={{paddingLeft:'10px',}}>
                    <select name="page" id="page" onChange={(e)=>{console.log(e.target.value); setLimit(e.target.value)}}>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                    </select></span>
                    <span style={{paddingLeft:'10px'}}>{pageNum} Of {cal != null? cal : 'none'} </span> 
                    <span onClick={function(){
                        if(pageNum > 1){
                            var pg = pageNum - 1;setPageNum(pg); console.log(pageNum)
                        }else{
                            setPageNum(1); console.log(pageNum)
                        }
                        
                        }}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="15 6 9 12 15 18" />
                    </svg>       </span> 
                    <span onClick={function(){
                       if(pageNum < cal){
                            var pg = pageNum + 1;setPageNum(pg); console.log(pageNum)
                        }else{
                            //setPageNum(1); console.log(pageNum)
                        }
                        }}> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <polyline points="9 6 15 12 9 18" />
                    </svg></span>
                </p>
            </div>
         </div>
    )
}
export default Container