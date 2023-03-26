import react from 'react'
import { useState } from 'react';
function Home() {

    const styles = {
        paperContainer: {
            height: 657,
            backgroundImage: `url(${'https://images.pexels.com/photos/53959/summit-cross-peak-happiness-hochlantsch-mountain-53959.jpeg?auto=compress&cs=tinysrgb&w=600'})`
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
                <div id='im'><img width="200" height="100" src='https://media.istockphoto.com/id/657091114/photo/crucifixion-of-jesus-christ.jpg?b=1&s=612x612&w=0&k=20&c=-XtD_byAPIDtwB3Tjm8NlmW9Kjv5hhwd53uNklquzx4='></img></div>
            </div>
            <div className='summary'>Chapel Fellowship Ministries is a Bible living Church. <br/><span className='state'>Our Mision:</span> To Reach the unreached and preach the word of God <br/><span className='state'>Our Vision:</span> To become the source of truth to the entire world about our Lord Jesus Christ and accomplish His mission</div>
            <div className='bgimage' style={styles.paperContainer}></div>


        </>
    )
}
export default Home;

