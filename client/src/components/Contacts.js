import React, {useState} from 'react'
function Contacts(){

    const styles = {
        paperContainer: {
            height: 657,
            backgroundImage: `url(${'https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=600'})`
        }
    };

    const [reverend, setReverend] = useState('')
    const [respastor, setRespastor] = useState('')
    const [council, setCouncil] = useState('')

    let nyam=['Joel Nyamai Phone: 07xxxxxx; Email: joel@xxxx.com']
    let kal=['Daniel Kalama Phone: 07xxxxxx; Email: kalama@xxxx.com']
    let kas=['Richard Kasyoki Phone: 07xxxxxx; Email: kasyoki@xxxx.com']



    function handleReverend() {
        setReverend(nyam)
        
    }

    function handleCouncil() {
        setCouncil(kas)
    }

    function handleRespastor() {
        setRespastor(kal)
    }

    return (
        <>
            {/* <p>𝖂𝖊𝖑𝖈𝖔𝖒𝖊 𝖙𝖔 𝕮𝖍𝖆𝖕𝖊𝖑 𝖋𝖊𝖑𝖑𝖔𝖜𝖘𝖍𝖎𝖕 𝕸𝖎𝖘𝖙𝖗𝖎𝖊𝖘</p> */}
            <div id='buts'>
                <div className='txt'><button onClick={handleReverend} className='bt'>Reverend</button></div>
                <div className='texti'>{reverend}</div>
                <div className='txt'><button onClick={handleRespastor} className='bt'>Resident Pst.</button></div>
                <div className='texti'>{respastor}</div>
                <div className='txt'><button onClick={handleCouncil} className='bt'>Council Chair</button></div>
                <div className='texti'>{council}</div>
            </div>
            
            <div className='bgimage' style={styles.paperContainer}></div>


        </>
    )
}
export default Contacts;