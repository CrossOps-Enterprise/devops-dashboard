import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
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

  const dispatch = useDispatch()

  useEffect(() => {
    let title = 'Resource: '

    if (params.name === 'sba') title += 'SpringBoot Application'
    if (params.name === 'os3') title += 'S3 Storage'
    if (params.name === 'ddo') title += 'EC2 Instance'

    dispatch(setPageTitle({ title }))
  }, [dispatch, params])

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
