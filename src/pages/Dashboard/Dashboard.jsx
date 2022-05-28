import Sidebar from '../../components/sidebar/Sidebar'
import ContentContainer from "../../components/ContentContainer/ContentContainer"
import ChannelBar from '../../components/ChannelBar/ChannelBar'

const Dashboard = () => {
  return (
    <div className='flex'>    
        <Sidebar />
        {/* <ChannelBar /> */}
        <ContentContainer />
    </div>
  )
}


export default Dashboard
 