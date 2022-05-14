import "./Dashboard.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Dashboard = () => {
  return (
    <div className='dashboard flex'>
        
        <Navbar />
        <div className="dashboardContainer">container</div>
    </div>
  )
}


export default Dashboard
