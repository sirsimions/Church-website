import react from 'react'
import Pulpit from './Pulpit';
import { Route, Routes } from 'react-router-dom';
import Outreach from './Outreach';
import SundaySchool from './Sundayschool'

function SidebarPages(){

    return (
        <>
        <sidemenu />
      <Routes>
        <Route exact path = '/pulpitministry' element={<Pulpit/>} />
        <Route exact path = '/outreach' element={<Outreach/>} />
        <Route exact path = '/sundayschool' element={<SundaySchool/>} />
        {/* <Route exact path = '/choir' element={<Choir/>} />
        <Route exact path = '/development' element={<Development/>} />
        <Route exact path = '/menfellowship' element={<MenFellowship/>} />
        <Route exact path = '/womenfellowship' element={<WomenFellowship/>} /> */}
      </Routes>
        </>
    )
}
export default SidebarPages;