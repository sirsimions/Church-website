import react from 'react'
import { useState } from 'react';
function Home() {

    const styles = {
        paperContainer: {
            height: 657,
            backgroundImage: `url(${"https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=600"})`
        }
    };

    const [location, setLocation] = useState('')
    const [contact, setContact] = useState('')
    const [branch, setBranch] = useState('')

    function handleLocation() {
        setLocation('Located in Malindi, Kilifi county.')
    }

    function handleBranch() {
        setBranch('Reach us through postal address xxxx email chapelxxxx@gmail.com')
    }

    function handleContact() {
        setContact('Malindi town branch, Msabaha branch')
    }

    return (
        <>
            {/* <p>𝖂𝖊𝖑𝖈𝖔𝖒𝖊 𝖙𝖔 𝕮𝖍𝖆𝖕𝖊𝖑 𝖋𝖊𝖑𝖑𝖔𝖜𝖘𝖍𝖎𝖕 𝕸𝖎𝖘𝖙𝖗𝖎𝖊𝖘</p> */}
            <div id='buts'>
                <div className='txt'><button onClick={handleLocation} className='bt'>Headquarter</button></div>
                <div className='text'>{location}</div>
                <div className='txt'><button onClick={handleContact} className='bt'>Branches</button></div>
                <div className='text'>{contact}</div>
                <div className='txt'><button onClick={handleBranch} className='bt'>Contact us</button></div>
                <div className='text'>{branch}</div>
            </div>
            <div className='summary'>Chapel Fellowship Ministries is a Bible living church in Kenya. The church is located in Malindi, Kilifi county. The church has its headquarter in Malindi town Kwa Chocha area and has a branch in Msabaha. <br/><span className='state'>Our Mision:</span> To Reach the unreached and preach the word of God <br/><span className='state'>Our Vision:</span> To become the source of truth to the entire world about our Lord Jesus Christ and accomplish His mission</div>
            <div className='bgimage' style={styles.paperContainer}></div>


        </>
    )
}
export default Home;

