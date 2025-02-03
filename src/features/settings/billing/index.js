import { useState, useEffect } from 'react'
import {
  Download,
  CreditCard,
  Calendar,
  Info,
  Server,
  BarChart2
} from 'lucide-react'
import TitleCard from '../../../components/Cards/TitleCard'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { useParams } from 'react-router-dom'

const placeholderData = [
  {
    id: 'os3',
    name: 'S3 Storage',
    usage: '500 GB',
    cost: 15.0,
    status: 'Pending',
    billingDate: '2023-10-01',
    billingPeriod: '2023-09-01 to 2023-09-30',
    description: 'Amazon S3 storage service',
    usageDetails: {
      totalRequests: 15000,
      storageClass: 'Standard',
      region: 'us-east-1'
    },
    monthlyBilling: [
      { month: 'Jul', cost: 12.5 },
      { month: 'Aug', cost: 14.2 },
      { month: 'Sep', cost: 15.0 },
      { month: 'Oct', cost: 16.3 }
    ]
  },
  {
    id: 'sba',
    name: 'Spring Boot App',
    usage: '300 GB',
    cost: 20.0,
    status: 'Paid',
    billingDate: '2023-10-01',
    billingPeriod: '2023-09-01 to 2023-09-30',
    description: 'Spring Boot application hosting',
    usageDetails: {
      totalRequests: 20000,
      storageClass: 'Standard',
      region: 'us-west-2'
    },
    monthlyBilling: [
      { month: 'Jul', cost: 18.0 },
      { month: 'Aug', cost: 19.5 },
      { month: 'Sep', cost: 20.0 },
      { month: 'Oct', cost: 21.0 }
    ]
  },
  {
    id: 'cs3',
    name: 'Customer S3',
    usage: '700 GB',
    cost: 25.0,
    status: 'Overdue',
    billingDate: '2023-10-01',
    billingPeriod: '2023-09-01 to 2023-09-30',
    description: 'Customer S3 storage service',
    usageDetails: {
      totalRequests: 25000,
      storageClass: 'Infrequent Access',
      region: 'eu-central-1'
    },
    monthlyBilling: [
      { month: 'Jul', cost: 22.0 },
      { month: 'Aug', cost: 23.5 },
      { month: 'Sep', cost: 25.0 },
      { month: 'Oct', cost: 26.5 }
    ]
  },
  {
    id: 'ddo',
    name: 'Demeter API',
    usage: '1000 GB',
    cost: 30.0,
    status: 'Pending',
    billingDate: '2023-10-01',
    billingPeriod: '2023-09-01 to 2023-09-30',
    description: 'Demeter API hosted on EC2',
    usageDetails: {
      totalRequests: 30000,
      storageClass: 'Standard',
      region: 'ap-southeast-1'
    },
    monthlyBilling: [
      { month: 'Jul', cost: 28.0 },
      { month: 'Aug', cost: 29.0 },
      { month: 'Sep', cost: 30.0 },
      { month: 'Oct', cost: 31.5 }
    ]
  }
]

const billingLogs = [
  {
    timestamp: '2023-10-01 10:15:32',
    action: 'Billing cycle started',
    severity: 'info'
  },
  {
    timestamp: '2023-10-05 14:22:11',
    action: 'Usage data processed',
    severity: 'info'
  },
  {
    timestamp: '2023-10-07 09:45:03',
    action: 'Cost calculation complete',
    severity: 'info'
  },
  {
    timestamp: '2023-10-10 11:30:45',
    action: 'Potential overusage detected',
    severity: 'warning'
  }
]

function Billing() {
  const { resourceName } = useParams()
  const [resourceData, setResourceData] = useState(null)

  useEffect(() => {
    const resource = placeholderData.find((r) => r.id === resourceName)
    setResourceData(resource)
  }, [resourceName])

  const getPaymentStatusBadge = (status) => {
    const statusClasses = {
      Paid: 'bg-green-100 text-green-800',
      Pending: 'bg-blue-100 text-blue-800',
      Overdue: 'bg-red-100 text-red-800'
    }
    return (
      <div
        className={`px-3 py-1 rounded-full font-semibold inline-flex items-center ${statusClasses[status] || 'bg-gray-100 text-gray-800'}`}>
        <CreditCard className='w-4 h-4 mr-2' />
        {status}
      </div>
    )
  }

  const downloadPDF = () => {
    alert('Download PDF functionality is not implemented yet.')
  }

  if (!resourceData) {
    return (
      <div className='p-6 bg-gray-100 min-h-screen flex items-center justify-center'>
        <h1 className='text-xl font-bold text-red-500'>Resource Not Found</h1>
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <TitleCard
        title={`Billing for ${resourceData.name}`}
        topMargin='mt-0'
        topRight={
          <button
            className='flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
            onClick={downloadPDF}>
            <Download className='w-5 h-5 mr-2' />
            Download PDF
          </button>
        }>
        <div className='grid md:grid-cols-2 gap-6'>
          {/* Billing Details Column */}
          <div>
            <h2 className='text-lg font-semibold mb-4 flex items-center'>
              <Info className='w-6 h-6 mr-2 text-blue-500' />
              Billing Information
            </h2>
            <div className='space-y-3'>
              <div className='flex justify-between items-center'>
                <span className='text-gray-600 font-medium flex items-center'>
                  <Server className='w-4 h-4 mr-2' />
                  Resource ID
                </span>
                <span className='text-gray-800 font-semibold'>
                  {resourceData.id}
                </span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-gray-600 font-medium flex items-center'>
                  <Calendar className='w-4 h-4 mr-2' />
                  Billing Period
                </span>
                <span className='text-gray-800'>
                  {resourceData.billingPeriod}
                </span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-gray-600 font-medium'>Usage</span>
                <span className='text-gray-800'>{resourceData.usage}</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-gray-600 font-medium'>Cost</span>
                <span className='text-green-600 font-bold'>
                  ${resourceData.cost.toFixed(2)}
                </span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-gray-600 font-medium'>
                  Payment Status
                </span>
                {getPaymentStatusBadge(resourceData.status)}
              </div>
            </div>
          </div>

          {/* Extended Details Column */}
          <div>
            <h2 className='text-lg font-semibold mb-4 flex items-center'>
              <Info className='w-6 h-6 mr-2 text-green-500' />
              Additional Details
            </h2>
            <div className='space-y-3 bg-gray-50 p-4 rounded-lg'>
              <div>
                <span className='text-gray-600 block mb-1'>Description</span>
                <p className='text-gray-800'>{resourceData.description}</p>
              </div>
              {resourceData.usageDetails && (
                <div>
                  <span className='text-gray-600 block mb-1'>
                    Usage Breakdown
                  </span>
                  <div className='grid grid-cols-2 gap-2'>
                    <div>
                      <span className='text-xs text-gray-500'>
                        Total Requests
                      </span>
                      <p className='font-semibold'>
                        {resourceData.usageDetails.totalRequests}
                      </p>
                    </div>
                    <div>
                      <span className='text-xs text-gray-500'>
                        Storage Class
                      </span>
                      <p className='font-semibold'>
                        {resourceData.usageDetails.storageClass}
                      </p>
                    </div>
                    <div>
                      <span className='text-xs text-gray-500'>Region</span>
                      <p className='font-semibold'>
                        {resourceData.usageDetails.region}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </TitleCard>
      {/* Billing Trends Chart */}
      <TitleCard
        title={
          <h2 className='text-lg font-semibold flex items-center'>
            <BarChart2 className='w-6 h-6 mr-2 text-purple-500' />
            Monthly Billing Trends
          </h2>
        }
        topMargin='mt-6'>
        <div className=''>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={resourceData.monthlyBilling}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='month' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='cost' fill='#8884d8' name='Cost ($)' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </TitleCard>
      {/* Billing Logs */}
      <TitleCard title='Billing Logs' topMargin='mt-6'>
        <div className=''>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='bg-gray-100'>
                  <th className='p-2 text-left'>Timestamp</th>
                  <th className='p-2 text-left'>Action</th>
                  <th className='p-2 text-left'>Severity</th>
                </tr>
              </thead>
              <tbody>
                {billingLogs.map((log, index) => (
                  <tr key={index} className='border-b'>
                    <td className='p-2 text-gray-600'>{log.timestamp}</td>
                    <td className='p-2'>{log.action}</td>
                    <td className='p-2'>
                      <span
                        className={`
                        px-2 py-1 rounded text-xs
                        ${log.severity === 'warning' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}
                      `}>
                        {log.severity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </TitleCard>
    </div>
  )
}

export default Billing
