import { useEffect, useState } from 'react'
import moment from 'moment'
import { useLocation } from 'react-router-dom'
import TitleCard from '../../components/Cards/TitleCard'
// import LineChart from '../../components/LineChart'
import { INITIAL_NODES } from '../../utils/dummyData'

import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon'
import { parseLabel } from '../../utils/helpers'
import StatsCard from '../../components/StatsCard'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

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

const logs = [
  {
    timestamp: '2025-01-25T10:30:15Z',
    logType: 'State Change',
    message: "Instance transitioned from 'Pending' to 'Running'",
    instanceId: 'i-0a1b2c3d4e5f6g7h8',
    user: 'admin',
    region: 'us-east-1',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
  },
  {
    timestamp: '2025-01-25T09:45:12Z',
    logType: 'Network Traffic',
    message: 'Received 4.5 MB of inbound traffic.',
    instanceId: 'i-0a1b2c3d4e5f6g7h8',
    region: 'us-west-2',
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15'
  },
  {
    timestamp: '2025-01-25T09:30:00Z',
    logType: 'CPU Utilization',
    message: 'CPU usage spiked to 85%.',
    instanceId: 'i-1a2b3c4d5e6f7g8h9',
    region: 'eu-central-1',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
  },
  {
    timestamp: '2025-01-25T08:15:42Z',
    logType: 'Error',
    message: "Failed to attach volume 'vol-123abc456def'.",
    instanceId: 'i-2a3b4c5d6e7f8g9h0',
    region: 'ap-southeast-1',
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15'
  },
  {
    timestamp: '2025-01-24T23:55:05Z',
    logType: 'State Change',
    message: "Instance transitioned from 'Running' to 'Stopped'.",
    instanceId: 'i-1a2b3c4d5e6f7g8h9',
    region: 'us-east-1',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
  },
  {
    timestamp: '2025-01-24T20:10:00Z',
    logType: 'Security Group Update',
    message: "Security group 'web-traffic' updated to allow port 80 traffic.",
    instanceId: 'i-0a1b2c3d4e5f6g7h8',
    region: 'us-west-1',
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15'
  }
]

function ResourceDetail() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get('id')
  const [currentStat, setCurrentStat] = useState(statsData[0])
  const [currentInstance, setCurrentInstance] = useState(null)

  useEffect(() => {
    if (id) {
      const node = INITIAL_NODES.find((node) => node.id === id)
      const { name, type, status } = parseLabel(node.data.label)
      setCurrentInstance({ ...node, name, type, status })
    }
  }, [id])

  const handleCardClick = (d) => {
    console.log(d)
    setCurrentStat(d)
  }

  return (
    <>
      {currentInstance && (
        <div className='grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6 '>
          <div className='col-flex-1 p-4 bg-white card shadow-md'>
            <p className='text-lg'>
              <strong>Instance Id:</strong> {currentInstance.id}
            </p>
            <p className='text-lg'>
              <strong>Name:</strong> {currentInstance.name}
            </p>
            <p className='text-lg'>
              <strong>Status:</strong> {currentInstance.status}
            </p>
            <p className='text-lg'>
              <strong>Created At:</strong>{' '}
              {moment(currentInstance.createdAt).format('DD MMM YY HH:mm:ss')}
            </p>
          </div>
        </div>
      )}
      <div className='grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6'>
        {statsData.map((d, k) => {
          return (
            <StatsCard
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
                  <th>Region</th>
                  <th>Message</th>
                  <th>User Agent</th>
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
                      <td>{log.region}</td>
                      <td>{log.message}</td>
                      <td>{log.userAgent}</td>
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

function LineChart({ title }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    }
  }

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ]

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: '',
        data: labels.map(() => {
          return Math.random() * 100 + 1
        }),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }

  return (
    <TitleCard title={title} topMargin='mt-6'>
      <Line
        data={data}
        options={options}
        style={{ maxHeight: '400px', width: '100%' }}
      />
    </TitleCard>
  )
}

export default ResourceDetail
