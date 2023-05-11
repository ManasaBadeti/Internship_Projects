import {Route, Navigate, Routes} from 'react-router-dom';
import React, {lazy, Suspense} from "react";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import NoteAddSharpIcon from '@mui/icons-material/NoteAddSharp';
import SummarizeSharpIcon from '@mui/icons-material/SummarizeSharp';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import OutboxIcon from '@mui/icons-material/Outbox';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
// import PendingRequests from '../pages/pending/PendingRequests';
// import Sentbox from '../pages/sentbox/Sentbox';
// const ViewCR = lazy(() => import("../pages/ViewCR/ViewCR"));


const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/auth/Login"));
const CreateRequest = lazy(() => import("../pages/CreateRequest"));
const Approval = lazy(() => import("../pages/approval/Approval"));
const Inbox = lazy(() => import("../pages/inbox/Inbox"));
const Sentbox = lazy(() => import("../pages/sentbox/Sentbox"));
const MyDepartmentReport = lazy(() => import("../pages/cmsMyDeptReports/MyDepartmentReport"))
const CMSStatisticsReport = lazy(() => import("../pages/cmsStats/CMSStatisticsReport"))
const CMSWorkStatisticsReport = lazy(() => import("../pages/cmsWorkStats/WorkStatistics"))
const MyCMSReport = lazy(() => import("../pages/cmsMyCMSReport/MyCMSReport"))
const PendingRequests  =lazy(() => import('../pages/pending/PendingRequests'))


export const menu = [
  {
    icon: <DashboardSharpIcon />,
    title: "Dashboard",
    pageLink: '/home',
    view: <Home/>,
  },
  {
    icon: <NoteAddSharpIcon />,
    title: "Create Request",
    pageLink: '/cr',
    view: <CreateRequest/>,
  },
  {
    icon: <MailSharpIcon />,
    title: "Inbox",
    pageLink: '/inbox',
    view: <Inbox/>,
  },
  {
    icon: <OutboxIcon />,
    title: "Sentbox",
    pageLink: '/sentbox',
    view: <Sentbox/>,
  },
  {
    icon: <AppRegistrationIcon />,
    title: "Manage Request",
    pageLink: '/approval',
    view: <Approval/>,
  },
  // {
  //   icon: <PendingActionsIcon />,
  //   title: "Pending Request" ,
  //   pageLink: '/pendingRequests',
  //   view: <PendingRequests/>,
  // },
  {
    icon: <SummarizeSharpIcon />,
    title: "CMS Reports",
    items: [
      {
        title: "My Department Report",
        pageLink: '/myDepartmentReport',
        view: <MyDepartmentReport />,
      },
      {
        title: "My CMS Report",
        pageLink: '/myCmsReport',
        view: <MyCMSReport />,
      },
      {
        title: "Section Wise CMS Report",
        pageLink: '/page1',
        view: <Home/>,
      },
      {
        title: "CMS Work Statistics Report",
        pageLink: '/cmsWorkStatisticsReport',
        view: <CMSWorkStatisticsReport />,
      },
      {
        title: "CMS Statistics Report",
        pageLink: '/cmsStatisticsReport',
        view: <CMSStatisticsReport />,
      },
      
      
    ]
   
  },
];

export const AppRoutes = () => {
  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/" element={<Login/>} exact />
        <Route path="/home" element={<Home/>} />
 
          {/* {menu.map((page, index) => {
            return (
              <Route
                exact
                element={page.pageLink}
                render={({match}) => <page.view />}
                key={index}
              />
            );
          })} */}
          {/* <Navigate to="/" /> */}
        </Routes>
      </Suspense>
  );
}
