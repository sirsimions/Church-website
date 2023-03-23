import react from 'react'
import Sidebar from './Sidebar';
function Departments() {

    return (
        <>
            <div className="App" id="outer-container">
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                <div id="page-wrap">
                    <h5>Chapel Fellowship Ministries has a total of seven ministries <br/> headed by various leaders appointed by Reverend and <br/> Resident Pastor</h5>
                    <div>Click the three bars on the top left to explore current ministries and leaders</div>
                </div>
            </div>
            
        </>
    )
}
export default Departments;