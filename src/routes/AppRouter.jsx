import { createBrowserRouter, createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import Landing from '../pages/Landing.jsx';
import AuthForm from '../pages/auth/AuthForm.jsx';
import ProtectedRoute from '../auth/ProtectedRoute.jsx';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import CompanyLayout from '../layouts/CompanyLayout.jsx';
import FacultyLayout from '../layouts/FacultyLayout.jsx';
import StudentHome from '../pages/student/Home.jsx';
import InternshipSearch from '../pages/student/Search.jsx';
import MyApplications from '../pages/student/Applications.jsx';
import ActiveInternship from '../pages/student/ActiveInternship.jsx';
import TrainingHub from '../pages/student/TrainingHub.jsx';
import ReportsCertificates from '../pages/student/ReportsCertificates.jsx';
import Profile from '../pages/student/Profile.jsx';
import Messages from '../pages/student/Messages.jsx';
import StudentNotifications from '../pages/student/Notifications.jsx';

// Company pages
import CompanyHome from '../pages/company/Home.jsx';
import PostInternship from '../pages/company/PostInternship.jsx';
import CompanyApplications from '../pages/company/Applications.jsx';
import InterviewScheduler from '../pages/company/Interviews.jsx';
import InternManagement from '../pages/company/Interns.jsx';
import CompanyReports from '../pages/company/Reports.jsx';
import CompanyProfile from '../pages/company/Profile.jsx';
import CompanyNotifications from '../pages/company/Notifications.jsx';

// Faculty pages
import FacultyHome from '../pages/faculty/Home.jsx';
import StudentManagement from '../pages/faculty/Students.jsx';
import InternshipMonitoring from '../pages/faculty/Monitoring.jsx';
import CompanyPartnerships from '../pages/faculty/Partnerships.jsx';
import FacultyReports from '../pages/faculty/Reports.jsx';
import CreditManagement from '../pages/faculty/Credits.jsx';
import AnalyticsInsights from '../pages/faculty/Analytics.jsx';
import TrainingManagement from '../pages/faculty/Training.jsx';
import CommunicationHub from '../pages/faculty/Communication.jsx';
import FacultySettings from '../pages/faculty/Settings.jsx';
import FacultyNotifications from '../pages/faculty/Notifications.jsx';

const createRouter = import.meta.env.PROD ? createHashRouter : createBrowserRouter;
const basename = import.meta.env.PROD ? '/' : import.meta.env.BASE_URL;

const router = createRouter([
  {
    path: '/',
    element: <Landing />,
  },
  // Student auth
  { path: '/student/login', element: <AuthForm role="student" mode="login" /> },
  { path: '/student/signup', element: <AuthForm role="student" mode="signup" /> },
  // Company auth
  { path: '/company/login', element: <AuthForm role="company" mode="login" /> },
  { path: '/company/signup', element: <AuthForm role="company" mode="signup" /> },
  // Faculty auth
  { path: '/faculty/login', element: <AuthForm role="faculty" mode="login" /> },
  { path: '/faculty/signup', element: <AuthForm role="faculty" mode="signup" /> },
  {
    path: '/student',
    element: <ProtectedRoute allowRole={'student'} />,
    children: [
      { element: <DashboardLayout />, children: [
          { index: true, element: <StudentHome /> },
          { path: 'search', element: <InternshipSearch /> },
          { path: 'applications', element: <MyApplications /> },
          { path: 'active', element: <ActiveInternship /> },
          { path: 'training', element: <TrainingHub /> },
          { path: 'reports', element: <ReportsCertificates /> },
          { path: 'profile', element: <Profile /> },
          { path: 'messages', element: <Messages /> },
          { path: 'notifications', element: <StudentNotifications /> },
      ]},
    ],
  },
  {
    path: '/company',
    element: <ProtectedRoute allowRole={'company'} />,
    children: [
      { element: <CompanyLayout />, children: [
          { index: true, element: <CompanyHome /> },
          { path: 'post', element: <PostInternship /> },
          { path: 'applications', element: <CompanyApplications /> },
          { path: 'interviews', element: <InterviewScheduler /> },
          { path: 'interns', element: <InternManagement /> },
          { path: 'reports', element: <CompanyReports /> },
          { path: 'profile', element: <CompanyProfile /> },
          { path: 'notifications', element: <CompanyNotifications /> },
      ]},
    ],
  },
  {
    path: '/faculty',
    element: <ProtectedRoute allowRole={'faculty'} />,
    children: [
      { element: <FacultyLayout />, children: [
          { index: true, element: <FacultyHome /> },
          { path: 'students', element: <StudentManagement /> },
          { path: 'monitoring', element: <InternshipMonitoring /> },
          { path: 'partnerships', element: <CompanyPartnerships /> },
          { path: 'reports', element: <FacultyReports /> },
          { path: 'credits', element: <CreditManagement /> },
          { path: 'analytics', element: <AnalyticsInsights /> },
          { path: 'training', element: <TrainingManagement /> },
          { path: 'communication', element: <CommunicationHub /> },
          { path: 'settings', element: <FacultySettings /> },
          { path: 'notifications', element: <FacultyNotifications /> },
      ]},
    ],
  },
], { basename });

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
