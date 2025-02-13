import './App.css';
import MyProfile from './Components/Content/MyProfile';
import Sidebar from './Components/Sidebar/sidebar';


import Toggle from './Components/Toggle/Toggle';

function App() {
  return (
    <div>
      <div className="row m-0 p-0">
        <div className="col-xl-2 col-lg-2 p-0 m-0 d-lg-block d-none ">
          <Sidebar />
        </div>
        <div className="col-12 d-lg-none d-inline-block p-0 m-0 sticky-top bg-white"><Toggle /></div>
        <div className="column2 col-xl-10 col-lg-10 p-0 m-0 vh-100 ">
          <MyProfile/>
        </div>
      </div>
    </div>
  )
}

export default App;
