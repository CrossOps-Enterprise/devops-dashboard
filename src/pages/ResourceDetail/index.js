// import { useEffect, useState } from 'react'
// import moment from 'moment'
// import { useLocation } from 'react-router-dom'
// import TitleCard from '../../components/Cards/TitleCard'
// // import LineChart from '../../components/LineChart'
// import { INITIAL_NODES } from '../../utils/dummyData'

// import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
// import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'
// import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon'
// import { parseLabel } from '../../utils/helpers'
// import StatsCard from '../../components/StatsCard'

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// } from 'chart.js'
// import { Line } from 'react-chartjs-2'
// import ResourceDetail from './redesign'

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// )

// const statsData = [
//   {
//     title: 'CPU Usage',
//     value: '20%',
//     icon: <UsersIcon className='w-8 h-8' />,
//     description: ''
//   },
//   {
//     title: 'Memory Usage',
//     value: '78%',
//     icon: <CreditCardIcon className='w-8 h-8' />,
//     description: ''
//   },
//   {
//     title: 'Network In',
//     value: '1.2 MB',
//     icon: <CircleStackIcon className='w-8 h-8' />,
//     description: ''
//   },
//   {
//     title: 'Network out',
//     value: '3.4 MB',
//     icon: <CircleStackIcon className='w-8 h-8' />,
//     description: ''
//   }
// ]

// const logs = [
//   {
//     timestamp: '2025-01-25T10:30:15Z',
//     logType: 'State Change',
//     message: "Instance transitioned from 'Pending' to 'Running'",
//     instanceId: 'i-0a1b2c3d4e5f6g7h8',
//     user: 'admin',
//     region: 'us-east-1',
//     userAgent:
//       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
//   },
//   {
//     timestamp: '2025-01-25T09:45:12Z',
//     logType: 'Network Traffic',
//     message: 'Received 4.5 MB of inbound traffic.',
//     instanceId: 'i-0a1b2c3d4e5f6g7h8',
//     region: 'us-west-2',
//     userAgent:
//       'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15'
//   },
//   {
//     timestamp: '2025-01-25T09:30:00Z',
//     logType: 'CPU Utilization',
//     message: 'CPU usage spiked to 85%.',
//     instanceId: 'i-1a2b3c4d5e6f7g8h9',
//     region: 'eu-central-1',
//     userAgent:
//       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
//   },
//   {
//     timestamp: '2025-01-25T08:15:42Z',
//     logType: 'Error',
//     message: "Failed to attach volume 'vol-123abc456def'.",
//     instanceId: 'i-2a3b4c5d6e7f8g9h0',
//     region: 'ap-southeast-1',
//     userAgent:
//       'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15'
//   },
//   {
//     timestamp: '2025-01-24T23:55:05Z',
//     logType: 'State Change',
//     message: "Instance transitioned from 'Running' to 'Stopped'.",
//     instanceId: 'i-1a2b3c4d5e6f7g8h9',
//     region: 'us-east-1',
//     userAgent:
//       'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
//   },
//   {
//     timestamp: '2025-01-24T20:10:00Z',
//     logType: 'Security Group Update',
//     message: "Security group 'web-traffic' updated to allow port 80 traffic.",
//     instanceId: 'i-0a1b2c3d4e5f6g7h8',
//     region: 'us-west-1',
//     userAgent:
//       'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15'
//   }
// ]

import React, { useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line
} from 'recharts'
import {
  Cpu,
  Database,
  ArrowDown,
  ArrowUp,
  Server,
  Shield,
  Clock,
  HardDrive
} from 'lucide-react'
import { INITIAL_NODES } from '../CloudInfra/data'
import { parseLabel } from '../../utils'
import { useLocation, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'

const performanceData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  cpu: Math.floor(Math.random() * 40) + 20,
  memory: Math.floor(Math.random() * 30) + 50,
  network: Math.floor(Math.random() * 100),
  diskIO: Math.floor(Math.random() * 60)
}))

function ResourceDetail() {
  const params = useParams()
  const [timeRange, setTimeRange] = useState('24h')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      setPageTitle({ title: `Resource: S3 Storage` || params.name || '' })
    )
  }, [dispatch, params])

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white border-b border-gray-200 px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='flex items-center gap-2'>
              <Server className='w-6 h-6 text-blue-600' />
              <h1 className='text-xl font-semibold text-gray-900'>
                i-0123456789abcdef0
              </h1>
              <span className='px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full'>
                Running
              </span>
            </div>
            <p className='mt-1 text-sm text-gray-500'>
              t2.xlarge • US East (N. Virginia)
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <button className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'>
              Connect
            </button>
            <button className='px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700'>
              Reboot
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='p-6'>
        {/* Instance Details */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
          <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
            <h2 className='text-sm font-medium text-gray-500 mb-4'>
              Instance Details
            </h2>
            <div className='space-y-3'>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>Instance ID</span>
                <span className='text-sm font-medium text-gray-900'>
                  i-0123456789abcdef0
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>Instance Type</span>
                <span className='text-sm font-medium text-gray-900'>
                  t2.xlarge
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>Availability Zone</span>
                <span className='text-sm font-medium text-gray-900'>
                  us-east-1a
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>Platform</span>
                <span className='text-sm font-medium text-gray-900'>
                  Amazon Linux 2
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>Private IP</span>
                <span className='text-sm font-medium text-gray-900'>
                  172.31.16.25
                </span>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
            <h2 className='text-sm font-medium text-gray-500 mb-4'>Security</h2>
            <div className='space-y-3'>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>Security Group</span>
                <span className='text-sm font-medium text-gray-900'>
                  sg-web-production
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>IAM Role</span>
                <span className='text-sm font-medium text-gray-900'>
                  EC2-Production-Role
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>Key Pair</span>
                <span className='text-sm font-medium text-gray-900'>
                  prod-key-pair
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>Monitoring</span>
                <span className='text-sm font-medium text-green-600'>
                  Enhanced
                </span>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6'>
            <h2 className='text-sm font-medium text-gray-500 mb-4'>Storage</h2>
            <div className='space-y-3'>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>Root Volume</span>
                <span className='text-sm font-medium text-gray-900'>
                  vol-0a1b2c3d4e
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>Size</span>
                <span className='text-sm font-medium text-gray-900'>
                  100 GB
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>Volume Type</span>
                <span className='text-sm font-medium text-gray-900'>gp3</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>IOPS</span>
                <span className='text-sm font-medium text-gray-900'>3000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Controls */}
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-lg font-semibold text-gray-900'>
            Performance Metrics
          </h2>
          <div className='flex items-center gap-2'>
            <select
              className='px-3 py-2 text-sm border border-gray-300 rounded-md bg-white text-gray-700'
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}>
              <option value='1h'>Last 1 hour</option>
              <option value='6h'>Last 6 hours</option>
              <option value='24h'>Last 24 hours</option>
              <option value='7d'>Last 7 days</option>
            </select>
            <button className='px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'>
              Refresh
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
          <div className='bg-white rounded-lg shadow-sm p-4 border border-gray-200'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-sm font-medium text-gray-500'>
                CPU Utilization
              </span>
              <Cpu className='w-5 h-5 text-blue-500' />
            </div>
            <div className='flex items-baseline'>
              <span className='text-2xl font-bold text-gray-900'>20%</span>
              <span className='ml-2 text-sm text-green-600'>↓ 5%</span>
            </div>
            <div className='mt-4 h-[50px]'>
              <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={performanceData.slice(-10)}>
                  <Line
                    type='monotone'
                    dataKey='cpu'
                    stroke='#3b82f6'
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-sm p-4 border border-gray-200'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-sm font-medium text-gray-500'>
                Memory Usage
              </span>
              <Database className='w-5 h-5 text-blue-500' />
            </div>
            <div className='flex items-baseline'>
              <span className='text-2xl font-bold text-gray-900'>78%</span>
              <span className='ml-2 text-sm text-yellow-600'>↑ 12%</span>
            </div>
            <div className='mt-4 h-[50px]'>
              <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={performanceData.slice(-10)}>
                  <Line
                    type='monotone'
                    dataKey='memory'
                    stroke='#3b82f6'
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-sm p-4 border border-gray-200'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-sm font-medium text-gray-500'>
                Network I/O
              </span>
              <ArrowDown className='w-5 h-5 text-blue-500' />
            </div>
            <div className='flex items-baseline'>
              <span className='text-2xl font-bold text-gray-900'>1.2 MB/s</span>
              <span className='ml-2 text-sm text-green-600'>↓ 0.3 MB/s</span>
            </div>
            <div className='mt-4 h-[50px]'>
              <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={performanceData.slice(-10)}>
                  <Line
                    type='monotone'
                    dataKey='network'
                    stroke='#3b82f6'
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-sm p-4 border border-gray-200'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-sm font-medium text-gray-500'>
                Disk I/O
              </span>
              <HardDrive className='w-5 h-5 text-blue-500' />
            </div>
            <div className='flex items-baseline'>
              <span className='text-2xl font-bold text-gray-900'>156 IOPS</span>
              <span className='ml-2 text-sm text-red-600'>↑ 23 IOPS</span>
            </div>
            <div className='mt-4 h-[50px]'>
              <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={performanceData.slice(-10)}>
                  <Line
                    type='monotone'
                    dataKey='diskIO'
                    stroke='#3b82f6'
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Detailed Charts */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-200'>
            <h3 className='text-sm font-medium text-gray-500 mb-4'>
              CPU & Memory Usage
            </h3>
            <div className='h-[300px]'>
              <ResponsiveContainer width='100%' height='100%'>
                <AreaChart data={performanceData}>
                  <XAxis dataKey='time' />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type='monotone'
                    dataKey='cpu'
                    stackId='1'
                    stroke='#3b82f6'
                    fill='#3b82f6'
                    fillOpacity={0.2}
                  />
                  <Area
                    type='monotone'
                    dataKey='memory'
                    stackId='2'
                    stroke='#10b981'
                    fill='#10b981'
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-200'>
            <h3 className='text-sm font-medium text-gray-500 mb-4'>
              Network Traffic
            </h3>
            <div className='h-[300px]'>
              <ResponsiveContainer width='100%' height='100%'>
                <AreaChart data={performanceData}>
                  <XAxis dataKey='time' />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type='monotone'
                    dataKey='network'
                    stroke='#6366f1'
                    fill='#6366f1'
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourceDetail
// function ResourceDetail() {
//   const location = useLocation()
//   const queryParams = new URLSearchParams(location.search)
//   const id = queryParams.get('id')
//   const [currentStat, setCurrentStat] = useState(statsData[0])
//   const [currentInstance, setCurrentInstance] = useState(null)

//   useEffect(() => {
//     if (id) {
//       const node = INITIAL_NODES.find((node) => node.id === id)
//       const { name, type, status } = parseLabel(node.data.label)
//       setCurrentInstance({ ...node, name, type, status })
//     }
//   }, [id])

//   const handleCardClick = (d) => {
//     console.log(d)
//     setCurrentStat(d)
//   }

//   return (
//     <>
//       {currentInstance && (
//         <div className='grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6 '>
//           <div className='col-flex-1 p-4 bg-white card shadow-md'>
//             <p className='text-lg'>
//               <strong>Instance Id:</strong> {currentInstance.id}
//             </p>
//             <p className='text-lg'>
//               <strong>Name:</strong> {currentInstance.name}
//             </p>
//             <p className='text-lg'>
//               <strong>Status:</strong> {currentInstance.status}
//             </p>
//             <p className='text-lg'>
//               <strong>Created At:</strong>{' '}
//               {moment(currentInstance.createdAt).format('DD MMM YY HH:mm:ss')}
//             </p>
//           </div>
//         </div>
//       )}
//       <div className='grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6'>
//         {statsData.map((d, k) => {
//           return (
//             <StatsCard
//               onClick={() => handleCardClick(d)}
//               key={k}
//               {...d}
//               colorIndex={k}
//             />
//           )
//         })}
//       </div>
//       {currentStat && <LineChart title={currentStat?.title} />}
//       <div>
//         <TitleCard title='Instance Logs' topMargin='mt-4'>
//           <div className='overflow-x-auto w-full'>
//             <table className='table w-full'>
//               <thead>
//                 <tr>
//                   <th>Timestamp</th>
//                   <th>Log Type</th>
//                   <th>Region</th>
//                   <th>Message</th>
//                   <th>User Agent</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {logs.map((log, index) => {
//                   return (
//                     <tr key={index}>
//                       <td>
//                         {moment(log.timestamp).format('DD MMM YY HH:mm:ss')}
//                       </td>
//                       <td>{log.logType}</td>
//                       <td>{log.region}</td>
//                       <td>{log.message}</td>
//                       <td>{log.userAgent}</td>
//                     </tr>
//                   )
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </TitleCard>
//       </div>
//     </>
//   )
// }

// function LineChart({ title }) {
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top'
//       }
//     }
//   }

//   const labels = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July'
//   ]

//   const data = {
//     labels,
//     datasets: [
//       {
//         fill: true,
//         label: '',
//         data: labels.map(() => {
//           return Math.random() * 100 + 1
//         }),
//         borderColor: 'rgb(53, 162, 235)',
//         backgroundColor: 'rgba(53, 162, 235, 0.5)'
//       }
//     ]
//   }

//   return (
//     <TitleCard title={title} topMargin='mt-6'>
//       <Line
//         data={data}
//         options={options}
//         style={{ maxHeight: '400px', width: '100%' }}
//       />
//     </TitleCard>
//   )
// }

// export default ResourceDetail
