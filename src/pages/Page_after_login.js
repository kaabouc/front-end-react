import React from 'react'
import Layout from '../layout/navbar'
import Questionnaire from '../Diagnostique/diagnostic'

export default function Questions() {
  return (
    <div> 
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Login />} />
          
       
          <Route path="/questionnaire" element={<Questionnaire />}/>
          <Route path="/GlobalResult" element={<Questionnaire />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
