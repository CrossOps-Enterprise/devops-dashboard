import React, { useState } from 'react'
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line
} from 'recharts'
import { Cpu, Database, Activity, Box, Clock } from 'lucide-react'
import ResourceInfoCard from '../../components/ResourceInfoCard'

const performanceData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  heapUsage: Math.floor(Math.random() * 30) + 50,
  threadCount: Math.floor(Math.random() * 20) + 80,
  responseTime: Math.floor(Math.random() * 100) + 100,
  requestCount: Math.floor(Math.random() * 500) + 1000
}))

function SpringBootResource({ viewBilling }) {
  const [timeRange, setTimeRange] = useState('1h')

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white border-b border-gray-200 px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='flex items-center gap-2'>
              <Box className='w-6 h-6 text-green-600' />
              <h1 className='text-xl font-semibold text-gray-900'>Jupiter</h1>
              <span className='px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full'>
                Healthy
              </span>
              <span className='px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full'>
                v2.5.1
              </span>
            </div>
            <p className='mt-1 text-sm text-gray-500'>
              Spring Boot 3.1.0 • Java 17 • Production
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <button className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'>
              View Logs
            </button>
            <button
              onClick={viewBilling}
              className='px-4 py-2 text-sm font-medium  dark:text-gray-300 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-blue-200 dark:hover:bg-slate-600 bg-blue-400 text-white'>
              View Billings
            </button>
            <button className='px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700'>
              Restart App
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='p-6'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
          <ResourceInfoCard
            title='Application Info'
            items={[
              { label: 'Application Name', value: 'ecommerce-service' },
              { label: 'Spring Boot Version', value: '3.1.0' },
              { label: 'Java Version', value: 'OpenJDK 17.0.2' },
              { label: 'Server', value: 'Tomcat 10.1.8' },
              { label: 'Profiles Active', value: 'production', active: true }
            ]}
          />
          <ResourceInfoCard
            title='JVM Memory'
            items={[
              { label: 'Heap Memory Used', value: '1.2 GB / 2 GB' },
              { label: 'Non-Heap Memory', value: '256 MB' },
              { label: 'GC Pauses', value: '125ms (last 1h)' },
              { label: 'Threads', value: '45 (5 blocked)' }
            ]}
          />
          <ResourceInfoCard
            title='Dependencies'
            items={[
              {
                label: 'Database',
                value: 'Connected',
                valueClass: 'text-green-600'
              },
              {
                label: 'Redis Cache',
                value: 'Connected',
                valueClass: 'text-green-600'
              },
              {
                label: 'Message Queue',
                value: 'Connected',
                valueClass: 'text-green-600'
              },
              {
                label: 'External APIs',
                value: '3/3 Available',
                valueClass: 'text-green-600'
              }
            ]}
          />
        </div>

        {/* Metrics Controls */}
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-lg font-semibold text-gray-900'>
            Runtime Metrics
          </h2>
          <div className='flex items-center gap-2'>
            <select
              className='px-3 py-2 text-sm border border-gray-300 rounded-md bg-white text-gray-700'
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}>
              <option value='15m'>Last 15 minutes</option>
              <option value='1h'>Last 1 hour</option>
              <option value='6h'>Last 6 hours</option>
              <option value='24h'>Last 24 hours</option>
            </select>
            <button className='px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'>
              Refresh
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
          <div className='bg-white rounded-lg shadow-sm p-4 border border-gray-200'>
            <div className='flex items-center justify-between mb-2'>
              <span className='text-sm font-medium text-gray-500'>
                Response Time
              </span>
              <Clock className='w-5 h-5 text-blue-500' />
            </div>
            <div className='flex items-baseline'>
              <span className='text-2xl font-bold text-gray-900'>156ms</span>
              <span className='ml-2 text-sm text-green-600'>↓ 12ms</span>
            </div>
            <div className='mt-4 h-[50px]'>
              <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={performanceData.slice(-10)}>
                  <Line
                    type='monotone'
                    dataKey='responseTime'
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
                Requests/sec
              </span>
              <Activity className='w-5 h-5 text-blue-500' />
            </div>
            <div className='flex items-baseline'>
              <span className='text-2xl font-bold text-gray-900'>1,234</span>
              <span className='ml-2 text-sm text-yellow-600'>↑ 23%</span>
            </div>
            <div className='mt-4 h-[50px]'>
              <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={performanceData.slice(-10)}>
                  <Line
                    type='monotone'
                    dataKey='requestCount'
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
                Heap Usage
              </span>
              <Database className='w-5 h-5 text-blue-500' />
            </div>
            <div className='flex items-baseline'>
              <span className='text-2xl font-bold text-gray-900'>60%</span>
              <span className='ml-2 text-sm text-green-600'>↓ 5%</span>
            </div>
            <div className='mt-4 h-[50px]'>
              <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={performanceData.slice(-10)}>
                  <Line
                    type='monotone'
                    dataKey='heapUsage'
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
                Active Threads
              </span>
              <Cpu className='w-5 h-5 text-blue-500' />
            </div>
            <div className='flex items-baseline'>
              <span className='text-2xl font-bold text-gray-900'>45</span>
              <span className='ml-2 text-sm text-yellow-600'>↑ 3</span>
            </div>
            <div className='mt-4 h-[50px]'>
              <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={performanceData.slice(-10)}>
                  <Line
                    type='monotone'
                    dataKey='threadCount'
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
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-sm font-medium text-gray-500'>
                Response Time Distribution
              </h3>
              <span className='text-xs text-gray-500'>
                95th percentile: 245ms
              </span>
            </div>
            <div className='h-[300px]'>
              <ResponsiveContainer width='100%' height='100%'>
                <AreaChart data={performanceData}>
                  <XAxis dataKey='time' />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type='monotone'
                    dataKey='responseTime'
                    stroke='#3b82f6'
                    fill='#3b82f6'
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-200'>
            <div className='flex items-center justify-between mb-4'>
              <h3 className='text-sm font-medium text-gray-500'>
                Memory & Threads
              </h3>
              <span className='text-xs text-gray-500'>Last GC: 2 mins ago</span>
            </div>
            <div className='h-[300px]'>
              <ResponsiveContainer width='100%' height='100%'>
                <AreaChart data={performanceData}>
                  <XAxis dataKey='time' />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type='monotone'
                    dataKey='heapUsage'
                    stackId='1'
                    stroke='#3b82f6'
                    fill='#3b82f6'
                    fillOpacity={0.2}
                  />
                  <Area
                    type='monotone'
                    dataKey='threadCount'
                    stackId='2'
                    stroke='#10b981'
                    fill='#10b981'
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

export default SpringBootResource
