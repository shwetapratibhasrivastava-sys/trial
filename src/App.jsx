import React from 'react'
import Homepage from './Pages/Home/Homepage'
import{Routes,Route} from 'react-router-dom'
import AboutPage from './Pages/About/AboutPage'
import AlleryClinicPage from './Pages/AlleryClinic/AlleryClinicPage'
import VertigoClinicPage from './Pages/VertigoClinic/VertigoClinicPage'
import SnoringClinicPage from './Pages/SnoringClinic/SnoringClinicPage'
import TreatmentsPage from './Pages/Treatments/TreatmentsPage'
import GalleryPage from './Pages/Gallery/GalleryPage'
import ContactPage from './Pages/Contact/ContactPage'
import MainLayout from '../components/Layout/MainLayout'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
      <Route index element={<Homepage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/alleryclinic' element={<AlleryClinicPage/>}/>
      <Route path='/vertigoclinic' element={<VertigoClinicPage/>}/>
      <Route path='/snoringclinic' element={<SnoringClinicPage/>}/>
      <Route path='/treatments' element={<TreatmentsPage/>}/>
      <Route path='/gallery' element={<GalleryPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      </Route>
    </Routes>  
    </>
  )
}
export default App