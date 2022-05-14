import "./Dashboard.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Dashboard = () => {
  return (
    <div className='dashboard'>  
      
        <Navbar />
        <Sidebar />
    </div>
  )
}


export default Dashboard
