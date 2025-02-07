// All components mapping with path for internal routes

import { lazy } from 'react'
import ResourceDetail from '../pages/ResourceDetail'

const CloudInfra = lazy(() => import('../pages/CloudInfra'))
const Applications = lazy(() => import('../pages/protected/Applications'))
const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Leads = lazy(() => import('../pages/protected/Leads'))
const Integration = lazy(() => import('../pages/protected/Integration'))
const Calendar = lazy(() => import('../pages/protected/Calendar'))
const Team = lazy(() => import('../pages/protected/Team'))
const Transactions = lazy(() => import('../pages/protected/Transactions'))
const Billing = lazy(() => import('../pages/Billing'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
const GettingStarted = lazy(() => import('../pages/GettingStarted'))
const DocFeatures = lazy(() => import('../pages/DocFeatures'))
const DocComponents = lazy(() => import('../pages/DocComponents'))
const Templates = lazy(() => import('../pages/Templates'))

const routes = [
  {
    path: '/applications',
    component: Applications
  },
  {
    path: '/productions/:name',
    component: CloudInfra
  },
  {
    path: '/productions/:name/resource/:name',
    component: ResourceDetail
  },
  {
    path: '/billing/:resourceName',
    component: Billing
  },
  {
    path: '/templates',
    component: Templates
  },
  // {
  //   path: '/welcome', // the url
  //   component: Welcome // view rendered
  // },
  // {
  //   path: '/leads',
  //   component: Leads
  // },
  // {
  //   path: '/settings-team',
  //   component: Team
  // },
  // {
  //   path: '/calendar',
  //   component: Calendar
  // },
  // {
  //   path: '/transactions',
  //   component: Transactions
  // },
  // {
  //   path: '/settings-profile',
  //   component: ProfileSettings
  // },
  // {
  //   path: '/getting-started',
  //   component: GettingStarted
  // },
  // {
  //   path: '/features',
  //   component: DocFeatures
  // },
  // {
  //   path: '/components',
  //   component: DocComponents
  // },
  // {
  //   path: '/integration',
  //   component: Integration
  // },
  {
    path: '/404',
    component: Page404
  },
  {
    path: '/blank',
    component: Blank
  }
]

export default routes
