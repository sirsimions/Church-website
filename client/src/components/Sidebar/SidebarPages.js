import react from 'react'
import Pulpit from './Pulpit';
import { Route, Routes } from 'react-router-dom';
import Outreach from './Outreach';
import Choir from './Choir';
import Development from './Development';
import SundaySchool from './Sundayschool'
import Signup from './Signup';
import Upload from './UploadVideo';



function SidebarPages(){

    return (
        <>
        <sidemenu />
      <Routes basename={process.env.PUBLIC_URL}>
        <Route exact path = '/pulpitministry' element={<Pulpit/>} />
        <Route exact path = '/outreach' element={<Outreach/>} />
        <Route exact path = '/sundayschool' element={<SundaySchool/>} />
        <Route exact path = '/choir' element={<Choir/>} />
        <Route exact path = '/development' element={<Development/>} />
        <Route exact path = '/signup' element={<Signup/>} />
        <Route exact path = '/upload' element={<Upload/>} />
        {/* <Route exact path = '/menfellowship' element={<MenFellowship/>} />
        <Route exact path = '/womenfellowship' element={<WomenFellowship/>} /> */}
      </Routes>
        </>
    )
}
export default SidebarPages;