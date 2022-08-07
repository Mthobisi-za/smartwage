import Sidebar from "./Sidebar";
import Container from "./Container";

/*----Initial Page---*/ 
function PageOne({navigation}){
  
    return(
        <div className="App-container">
        <Sidebar/>
        <div className="content-area">
          <h1 className="title left">Surveys</h1>
          <Container navigation={navigation}/>
        </div>
        </div>
    )

}
/*----Initial Page---*/ 
export default PageOne