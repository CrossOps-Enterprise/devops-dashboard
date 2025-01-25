import { useState } from 'react'
import moment from 'moment'
import TitleCard from '../../components/Cards/TitleCard'
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import DoughnutChart from './components/DoughnutChart'
import PieChart from './components/PieChart'
import ScatterChart from './components/ScatterChart'
import StackBarChart from './components/StackBarChart'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon'
import DashboardStats from '../dashboard/components/DashboardStats'

const statsData = [
  {
    title: 'CPU Usage',
    value: '20%',
    icon: <UsersIcon className='w-8 h-8' />,
    description: ''
  },
  {
    title: 'Memory Usage',
    value: '78%',
    icon: <CreditCardIcon className='w-8 h-8' />,
    description: ''
  },
  {
    title: 'Network In',
    value: '1.2 MB',
    icon: <CircleStackIcon className='w-8 h-8' />,
    description: ''
  },
  {
    title: 'Network out',
    value: '3.4 MB',
    icon: <CircleStackIcon className='w-8 h-8' />,
    description: ''
  }
]

function Charts() {
  const [currentStat, setCurrentStat] = useState(statsData[0])

  const logs = [
    {
      timestamp: '2025-01-25T10:30:15Z',
      logType: 'State Change',
      message: "Instance transitioned from 'Pending' to 'Running'",
      instanceId: 'i-0a1b2c3d4e5f6g7h8'
    },
    {
      timestamp: '2025-01-25T09:45:12Z',
      logType: 'Network Traffic',
      message: 'Received 4.5 MB of inbound traffic.',
      instanceId: 'i-0a1b2c3d4e5f6g7h8'
    },
    {
      timestamp: '2025-01-25T09:30:00Z',
      logType: 'CPU Utilization',
      message: 'CPU usage spiked to 85%.',
      instanceId: 'i-1a2b3c4d5e6f7g8h9'
    },
    {
      timestamp: '2025-01-25T08:15:42Z',
      logType: 'Error',
      message: "Failed to attach volume 'vol-123abc456def'.",
      instanceId: 'i-2a3b4c5d6e7f8g9h0'
    },
    {
      timestamp: '2025-01-24T23:55:05Z',
      logType: 'State Change',
      message: "Instance transitioned from 'Running' to 'Stopped'.",
      instanceId: 'i-1a2b3c4d5e6f7g8h9'
    },
    {
      timestamp: '2025-01-24T20:10:00Z',
      logType: 'Security Group Update',
      message: "Security group 'web-traffic' updated to allow port 80 traffic.",
      instanceId: 'i-0a1b2c3d4e5f6g7h8'
    }
  ]

  const handleCardClick = (d) => {
    console.log(d)
    setCurrentStat(d)
  }

  return (
    <>
      <div className='grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6'>
        {statsData.map((d, k) => {
          return (
            <DashboardStats
              onClick={() => handleCardClick(d)}
              key={k}
              {...d}
              colorIndex={k}
            />
          )
        })}
      </div>
      {currentStat && <LineChart title={currentStat?.title} />}
      <div>
        <TitleCard title='Instance Logs' topMargin='mt-4'>
          <div className='overflow-x-auto w-full'>
            <table className='table w-full'>
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Log Type</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {moment(log.timestamp).format('DD MMM YY HH:mm:ss')}
                      </td>
                      <td>{log.logType}</td>
                      <td>{log.message}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </TitleCard>
      </div>
    </>
  )
}

export default Charts
