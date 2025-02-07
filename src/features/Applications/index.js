import { useState } from 'react'
import { useDispatch } from 'react-redux'
import TitleCard from '../../components/Cards/TitleCard'
import { showNotification } from '../common/headerSlice'
import ArrowRight from '@heroicons/react/24/solid/ArrowRightIcon'
import { FaAws } from 'react-icons/fa6'
import { SiGooglecloud, SiJira } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'

const INITIAL_INTEGRATION_LIST = [
  {
    Icon: FaAws,
    name: 'Production One',
    icon: FaAws,
    iconColor: '#FF9900',
    isActive: true,
    path: 'aws',
    description:
      'Amazon Web Services (AWS) is a cloud computing platform that provides tools and services for businesses, developers, and organizations.'
  }
  // {
  //   name: 'Google Cloud (GCP)',
  //   icon: SiGooglecloud,
  //   isActive: false,
  //   path: 'gcp',
  //   iconColor: '#DB4437',
  //   description:
  //     'Google Cloud Platform (GCP) is a collection of cloud-based computing services that run on Google`s data centers.'
  // }
]

function Applications() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [integrationList, setIntegrationList] = useState(
    INITIAL_INTEGRATION_LIST
  )

  const updateIntegrationStatus = (index) => {
    let integration = integrationList[index]
    setIntegrationList(
      integrationList.map((i, k) => {
        if (k === index) return { ...i, isActive: !i.isActive }
        return i
      })
    )
    dispatch(
      showNotification({
        message: `${integration.name} ${integration.isActive ? 'disabled' : 'enabled'}`,
        status: 1
      })
    )
  }

  const handleNavigation = (path) => {
    navigate(`/app/applications/${path}`)
  }

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {integrationList.map((i, k) => {
          return (
            <TitleCard
              key={k}
              iconColor={i.iconColor}
              title={i.name}
              icon={i.icon}
              topMargin={'mt-2'}
              className='relative'>
              <div className='flex items-start'>
                <span className='text-left flex-1'>{i.description}</span>
              </div>
              <div
                className='absolute bottom-3 right-3 cursor-pointer'
                onClick={() => handleNavigation(i.path)}>
                <ArrowRight className='w-8 h-8 text-gray-800' />
              </div>
            </TitleCard>
          )
        })}
      </div>
    </>
  )
}

export default Applications
