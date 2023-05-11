import React, {lazy, Suspense} from 'react'
import { Route, Navigate, Routes} from 'react-router-dom';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

// import Header from './components/Header';
// import Footer from './components/Footer';

// import {baseTheme} from './utils/Theme'
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { ColorModeContextProvider } from "./utils/ColorModeContext";
import  Header  from "./layouts/Header";
import  GStyle from './GStyle';


/*****Pages******/
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Page1 = lazy(() => import("./pages/cmsSectionWiseReports/Page1"))
const Page2 = lazy(() => import("./pages/cmsSectionWiseReports/Page2"))
const Page3 = lazy(() => import("./components/ChangeRequestId"))
const ViewCR = lazy(() => import("./pages/ViewCR/ViewCR"));
const NewPage = lazy(() => import("./pages/ViewCR/NewPage"));
const Approval = lazy(() => import("./pages/approval/Approval"));
// const DisplayData = lazy(() => import("./pages/approval/approval-components/DisplayData"))
const DataGrid = lazy(() => import("./pages/ViewCR/DataGrid"))
const DataGrid2 = lazy(() => import("./pages/ViewCR/DataGrid2"))
const CaseStatus = lazy(() => import("./pages/ViewCR/CaseStatus"));
const CRStatus = lazy(() => import("./pages/ViewCR/CRStatus"));
const Inbox = lazy(() => import("./pages/inbox/Inbox"));
const Sentbox = lazy(() => import("./pages/sentbox/Sentbox"));
const CreateRequest = lazy(() => import("./pages/CreateRequest"));
const CRStatusFromSentBox = lazy(() => import("./pages/ViewCR/CRStatusFromSentBox"))
const CMSStatisticsReport = lazy(() => import("./pages/cmsStats/CMSStatisticsReport"))
const CMSWorkStatisticsReport = lazy(() => import("./pages/cmsWorkStats/WorkStatistics"))
const MyDepartmentReport = lazy(() => import("./pages/cmsMyDeptReports/MyDepartmentReport"))
const MyCMSReport = lazy(() => import("./pages/cmsMyCMSReport/MyCMSReport"))
const PendingRequests = lazy(() => import('./pages/pending/PendingRequests'))
const Profile = lazy(() => import('./pages/ProfilePage'))



const App = () => {
  return (
    <>
      {/* <ThemeProvider theme={lightTheme}> */}
      <ColorModeContextProvider>
      {/* <ThemeProvider theme={GStyle}> */}
          <AppRoutes/>
          {/* </ThemeProvider> */}
      </ColorModeContextProvider>
      {/* </ThemeProvider> */}
    </>
  );
}


const AppRoutes = () => {
  return (
    <Suspense fallback={<div />}>
      {/* <Router> */}
      <Routes>
      <Route path="/" element={<Login/>} exact />
     
      <Route element={<Header />}>
        <Route path="/home" element={<Home/>} />
        <Route path="/newPage" element={<NewPage/>}></Route>
        <Route path="/viewCR" element={<ViewCR/>}></Route>
        <Route path="/dataGrid" element={<DataGrid/>}></Route>
        <Route path="/dataGrid2" element={<DataGrid2/>}></Route>
        <Route path="/approval" element={<Approval/>} />
        <Route path="/inbox" element={<Inbox/>} />
        <Route path="/sentbox" element={<Sentbox/>} />
        {/* <Route exact path="/dataTable" element={<DisplayData/>} /> */}
        <Route path="/CreateRequest" element={<CreateRequest/>} />
        <Route path="/CRStatusFromSentBox" element={<CRStatusFromSentBox />} />
        <Route exact path="/page1" element={<Page1 />}></Route>
        <Route exact path="/myCmsReport" element={<MyCMSReport />}></Route>
        <Route exact path="/page2" element={<Page2 />}></Route>
        <Route exact path="/cmsStatisticsReport" element={<CMSStatisticsReport />}></Route>
        <Route exact path="/cmsWorkStatisticsReport" element={<CMSWorkStatisticsReport />}></Route>
        <Route exact path="/myDepartmentReport" element={<MyDepartmentReport />}></Route>
        <Route exact path="/cri" element={<Page3 />}></Route>
        <Route exact path="/cr" element={<CreateRequest/>}></Route>
        <Route path="/newPage" element={<NewPage/>}></Route>
        <Route path="/viewCR" element={<ViewCR/>}></Route>
        <Route path="/caseStatus" element={<CaseStatus/>}></Route>
        <Route path="/crStatus" element={<CRStatus/>}></Route>
        <Route path = "/pendingRequests" element= {<PendingRequests />}> </Route>
        <Route path = "/profile" element={<Profile />}></Route>
        </Route>
      </Routes>
      {/* </Router> */}
    </Suspense>
  );
}


export default App
