import { Routes, Link, Route } from "react-router-dom";
import {Home} from './pages/Home'
import {World} from './pages/World'
import {Science} from './pages/Science'
import {Business} from './pages/Business'
import {Health} from './pages/Health'
import {More} from './pages/More'
import {Search} from './components/Search'
import {WorldTable} from './components/WorldTable'
import {Japan} from './components/Japan'
import {Australia} from './components/Australia'
import {Canada} from './components/Canada'
import {Switzerland} from './components/Switzerland'
import {UnitedStates} from './components/UnitedStates'
import { useEffect, useState } from "react";
import axios from "axios";
import logo from './img/800px-The_New_York_Times_logo.png'

function App() {


  const [data, setData] = useState([])
  const [date, setDate] = useState()
  const [isLoading, setLoading] = useState(false)
  
  
  const FetchData =async (state) => {
        await axios.get(`https://newsapi.org/v2/${state}&apiKey=de013d61d2c6460caba4d302f75d7f9b`)
        .then((res) => setData(res.data.articles))
    }

    const Time = () =>{
      const current = new Date();
      setDate(current.toUTCString())
    }
    setInterval(() => {
      Time();
    }, 1000);

    useEffect(()=>{
        FetchData('top-headlines?country=us')
    }, [])

    const Timer = () =>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      }, 1500)
    }

  return (
    <div className="App flex flex-col items-center">

      <div className="w-screen flex justify-around items-end">
        <div className="text-[12px] font-bold">
          <p>{date}</p>
        </div>
        <img src={logo} alt="logo" />
        <div className="text-[12px] font-bold">
          <span>Today’s Paper</span>
        </div>
      </div>
      <nav className="text-white header_nav w-screen h-10 flex justify-center items-center bg-stone-800">
        <ul className="flex gap-6">
          <li>
            <Link to="/" onClick={() => {FetchData('top-headlines?country=us'); Timer()}}>Home</Link>
          </li>
          <li>
            <Link to="/world" onClick={() => {FetchData('everything?domains=wsj.com'); Timer()}}>World</Link>
          </li>
          <li>
            <Link to="/science" onClick={()=>{FetchData('top-headlines?country=de&category=science'); Timer()}} >Science</Link>
          </li>
          <li>
            <Link to="/business" onClick={()=>{FetchData('top-headlines?country=us&category=business'); Timer()}} >Business</Link>
          </li>
          <li>
            <Link to="/health" onClick={()=>{FetchData('top-headlines?country=us&category=health'); Timer()}}>Health</Link>
          </li>
          <li>
            <Link to="/more" onClick={()=>{FetchData('top-headlines?country=us&category=entertainment'); Timer()}}>More</Link>
          </li>
        </ul>
      </nav>

    {
      isLoading 
      ? <div>
        <h1>Loading ...</h1>
      </div>  
      :    
      <Routes>  
        <Route path="/" element={<Home data={data}/>} />
        <Route path="/world" element={<World data={data} FetchData={FetchData}/>}>
            <Route index element={<WorldTable data={data}/>}/>
            <Route path="/world/australia" element={<Australia data={data}/>}/>
            <Route path="/world/canada" element={<Canada data={data}/>}/>
            <Route path="/world/japan" element={<Japan data={data}/>}/>
            <Route path="/world/switzerland" element={<Switzerland data={data}/>}/>
            <Route path="/world/us" element={<UnitedStates data={data}/>}/>
            <Route path="/world/search" element={<Search data={data}/>} />
            <Route path="/world/worldNews" element={<WorldTable data={data}/>}/>
        </Route>
        <Route path="/science" element={<Science data={data}/>} >
            <Route index element={<WorldTable data={data}/>}/>
            <Route path="/science/search" element={<Search data={data}/>} />
            <Route path="/science/worldNews" element={<WorldTable data={data}/>}/>
        </Route>
        <Route path="/business" element={<Business data={data}/>}>
            <Route index element={<WorldTable data={data}/>}/>
            <Route path="/business/search" element={<Search data={data}/>} />
            <Route path="/business/worldNews" element={<WorldTable data={data}/>}/>
        </Route>
        <Route path="/health" element={<Health data={data}/>}>
            <Route index element={<WorldTable data={data}/>}/>
            <Route path="/health/search" element={<Search data={data}/>} />
            <Route path="/health/worldNews" element={<WorldTable data={data}/>}/>
        </Route>
        <Route path="/more" element={<More data={data}/>}>
            <Route index element={<WorldTable data={data}/>}/>
            <Route path="/more/search" element={<Search data={data}/>} />
            <Route path="/more/worldNews" element={<WorldTable data={data}/>}/>
        </Route>

      </Routes> 
    }
      <div className="flex flex-col w-[90%] gap-5 mt-20">
        <div>
          <img src={logo} alt="logo" className="w-40 text-black"/>
        </div>
        <div className="text-[10px] mb-10 text-gray-600">
          <ul className="flex gap-4 flex-wrap justify-center">
            <li>© 2023 The New York Times Company</li>
            <li>NYTCo</li>
            <li>Contact Us</li>
            <li>Accessibility</li>
            <li>Work with us</li>
            <li>Advertise</li>
            <li>T Brand Studio</li>
            <li>Your Ad Choices</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Terms of Sale</li>
            <li>Site Map</li>
            <li>Help</li>
            <li>Subscriptions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
