import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './About'
import Navlayout from './Navlayout'
import FirstComponent from './FirstComponent'
import AddProduct from './AddProduct'
import ExpressionEvaluation from './ExpressionEvaluation'
import Demo from './Demo'
import ShowPortfolio from './ShowPortfolio'
import Gallery1 from './Gallery1'
import Inlinecss from'./InlineCss'
import Like from './Like'
import Viewtodo from './Viewtodo'
export default function RouteConfig() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navlayout/>}>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/showportfolio' element={<ShowPortfolio/>}/>
                <Route path='/firstcomponent' element={<FirstComponent/>}/>
                <Route path='/expression' element={<ExpressionEvaluation/>}/>
                <Route path='/demo' element={<Demo/>}/>
                <Route path='/product' element={<AddProduct/>}/>
                <Route path='/gallery1' element={<Gallery1/>}/>
                <Route path='/inlinecss' element={<Inlinecss/>}/>
                <Route path='/likedislike' element={<Like/>}/>
                <Route path='/todolist' element={<Viewtodo/>}/>
        
          
        </Route>
    </Routes>
    </BrowserRouter>
  )
}
