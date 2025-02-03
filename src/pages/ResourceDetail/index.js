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
import SpringBootResource from './SpringbootResource'
import S3Resource from './S3Resource'
import Ec2Resource from './EC2Resource'

const performanceData = Array.from({ length: 20 }, (_, i) => ({
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
    let title = 'Resource: '

    if (params.name === 'sba') title += 'SpringBoot Application'
    if (params.name === 'os3') title += 'S3 Storage'
    if (params.name === 'ddo') title += 'EC2 Instance'

    dispatch(setPageTitle({ title }))
  }, [dispatch])

  function getComponent() {
    if (params.name === 'sba') return <SpringBootResource />
    if (params.name === 'os3')
      return <S3Resource performanceData={performanceData} />
    if (params.name === 'ddo')
      return <Ec2Resource performanceData={performanceData} />
  }

  return getComponent()
}

export default ResourceDetail
