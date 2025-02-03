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
import { colors } from '../../constants'
import ResourceInfoCard from '../../components/ResourceInfoCard'
import ResourceCard from '../../components/ResourceCard'

function S3Resource({ performanceData }) {
  const [timeRange, setTimeRange] = useState('24h')

  return (
    <div className='min-h-screen bg-gray-50 dark:bg-slate-800'>
      {/* Header */}
      <div className='bg-white dark:bg-slate-700 border-b border-gray-200 dark:border-slate-600 px-6 py-4'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='flex items-center gap-2'>
              <Server className='w-6 h-6 text-primary' />
              <h1 className='text-xl font-semibold text-gray-900 dark:text-white'>
                S3 Bucket: my-bucket
              </h1>
              <span className='px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full'>
                Active
              </span>
            </div>
            <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
              Region: US East (N. Virginia)
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <button className='px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-50 dark:hover:bg-slate-600'>
              Empty
            </button>
            <button className='px-4 py-2 text-sm font-medium text-white bg-error rounded-md'>
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='p-6'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
          <ResourceInfoCard
            title='Bucket Details'
            items={[
              {
                label: 'Bucket Name',
                value: 'my-bucket'
              },
              {
                label: 'Region',
                value: 'us-east-1'
              },
              {
                label: 'Storage Class',
                value: 'Standard'
              },
              {
                label: 'Created On',
                value: '2023-01-01'
              }
            ]}
          />
          <ResourceInfoCard
            title='Security'
            items={[
              {
                label: 'Public Access',
                value: 'Blocked'
              },
              {
                label: 'Encryption',
                value: 'AES-256'
              },
              {
                label: 'Versioning',
                value: 'Enabled'
              },
              {
                label: 'Logging',
                value: 'Enabled',
                active: true
              }
            ]}
          />
          <ResourceInfoCard
            title='Storage'
            items={[
              {
                label: 'Total Objects',
                value: '1500'
              },
              {
                label: 'Total Size',
                value: '500 GB'
              },
              {
                label: 'Storage Class',
                value: 'Standard'
              }
            ]}
          />
        </div>
        {/* Metrics Controls */}
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Performance Metrics
          </h2>
          <div className='flex items-center gap-2'>
            <select
              className='px-3 py-2 text-sm border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300'
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}>
              <option value='1h'>Last 1 hour</option>
              <option value='6h'>Last 6 hours</option>
              <option value='24h'>Last 24 hours</option>
              <option value='7d'>Last 7 days</option>
            </select>
            <button className='px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md hover:bg-gray-50 dark:hover:bg-slate-600'>
              Refresh
            </button>
          </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
          <ResourceCard
            icon={Cpu}
            title='CPU Utilization'
            stats='20%'
            dataKey='cpu'
            change='↓ 5%'
            performanceData={performanceData}
          />
          <ResourceCard
            icon={Database}
            title='Memory Usage'
            dataKey='memory'
            stats='78%'
            change='↑ 12%'
            performanceData={performanceData}
          />
          <ResourceCard
            icon={ArrowDown}
            dataKey='network'
            title='Network I/O'
            stats='1.2 MB/s'
            change='↓ 0.3 MB/s'
            performanceData={performanceData}
          />
          <ResourceCard
            icon={HardDrive}
            title='Disk I/O'
            dataKey='diskIO'
            stats='156 IOPS'
            change='↑ 23 IOPS'
            performanceData={performanceData}
          />
        </div>
        {/* Detailed Charts */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='bg-white dark:bg-slate-700 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-slate-600'>
            <h3 className='text-sm font-bold text-gray-500 dark:text-gray-400 mb-4'>
              CPU & Memory Usage
            </h3>
            <div className='h-[300px]'>
              <ResponsiveContainer width='100%' height='100%'>
                <AreaChart data={performanceData}>
                  <XAxis
                    dataKey='time'
                    className='text-gray-500 dark:text-gray-400'
                  />
                  <YAxis className='text-gray-500 dark:text-gray-400' />
                  <Tooltip />
                  <Area
                    type='monotone'
                    dataKey='cpu'
                    stackId='1'
                    stroke={colors.hd1}
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

          <div className='bg-white dark:bg-slate-700 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-slate-600'>
            <h3 className='text-sm font-bold text-gray-500 dark:text-gray-400 mb-4'>
              Network Traffic
            </h3>
            <div className='h-[300px]'>
              <ResponsiveContainer width='100%' height='100%'>
                <AreaChart data={performanceData}>
                  <XAxis
                    dataKey='time'
                    className='text-gray-500 dark:text-gray-400'
                  />
                  <YAxis className='text-gray-500 dark:text-gray-400' />
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

export default S3Resource
