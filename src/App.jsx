
import './App.css';
import Head from './component/Dashboard Components/Head';
import ListContainer from './component/Dashboard Components/ListContainer';
import Sidebar from './component/Dashboard Components/SideBarComponents/Sidebar';
import './index.css'
import DashboardPage from './Pages/DashboardPage';
import Routing from './Routing/Routing';

function App() {
  return (
    <div>
      <Routing />
      <div className='w-screen p-6'>
        {/* <Head /> */}
        {/* <ListContainer /> */}
        {/* <Sidebar /> */}
        {/* <DashboardPage /> */}
      </div>

    </div>
  );
}

export default App;



