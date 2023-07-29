import Sidebar from './components/Sidebar'
import Sidebar1 from './components/Sidebar1'
import Header from './components/Header'
import Departments from './components/Departments'
import Fields from './components/Fields'
import Facilities from './components/Facilities'
import Footer from './components/Footer'
import Highlights from './components/Highlights'

function App() {
  return (
    <div className="main">
      
      <Sidebar />
      <div className="container">
        <Header style={{boxShadow:'none', borderRadius: '0'}}/>
        <Departments />
        <div class="ui divider"></div>
        <Fields />
        <div class="ui divider"></div>
        <Facilities />
        <div class="ui divider"></div>
        <Highlights />
        <Footer />
        <div className = "ui inverted huge header">75th Platinum Jubilee </div>
      </div>
      <Sidebar1 />
    </div>
  )
}

export default App
