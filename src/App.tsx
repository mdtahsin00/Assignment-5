import './App.css'
import ExploreTech from './component/ExplorTech'
import Footer from './component/footer'
import HeroSection from './component/Hero'
import Navbar from './component/navbar'
// import TechExplor from './component/test'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      {/* <TechExplor></TechExplor> */}
      <ExploreTech/>
      <Footer></Footer>
      {/* <Suspense fallback={<p>Loading............</p>}> */}
        {/* <ExploreTech dataPromies={dataPromies}></ExploreTech> */}
      {/* </Suspense> */}
    </>
  )
}

export default App
