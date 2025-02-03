import React from 'react'
import { Line, LineChart, ResponsiveContainer } from 'recharts'
import { colors } from '../constants'
import { Cpu } from 'lucide-react'

function ResourceCard({
  performanceData,
  title,
  stats,
  change,
  icon: Icon,
  dataKey
}) {
  return (
    <div className='bg-white dark:bg-slate-700 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-slate-600'>
      <div className='flex items-center justify-between mb-2'>
        <span className='text-sm font-medium text-gray-500 dark:text-gray-400'>
          {title}
        </span>
        <Icon className='w-5 h-5 text-blue-500' />
      </div>
      <div className='flex items-baseline'>
        <span className='text-2xl font-bold text-gray-900 dark:text-white'>
          {stats}
        </span>
        <span className='ml-2 text-sm text-green-600 dark:text-green-300'>
          {change}
        </span>
      </div>
      <div className='mt-4 h-[50px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={performanceData.slice(-10)}>
            <Line
              type='monotone'
              dataKey={dataKey}
              stroke={colors.hd1}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ResourceCard
