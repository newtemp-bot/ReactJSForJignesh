import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Blogs, Contact, ErrorPage, Home, Layout} from './pages';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path='*' element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App