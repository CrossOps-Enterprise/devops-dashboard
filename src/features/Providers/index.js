import { useState } from 'react'
import { useDispatch } from 'react-redux'
import TitleCard from '../../components/Cards/TitleCard'
import { showNotification } from '../common/headerSlice'
import ArrowRight from '@heroicons/react/24/solid/ArrowRightIcon'
import { FaAws } from 'react-icons/fa6'
import { SiGooglecloud, SiJira } from 'react-icons/si'

const INITIAL_INTEGRATION_LIST = [
  {
    name: 'AWS',
    Icon: FaAws,
    icon: {
      color: '#FF9900',
      width: 14,
      height: 14
    },
    isActive: true,
    description:
      'Amazon Web Services (AWS) is a cloud computing platform that provides tools and services for businesses, developers, and organizations.'
  },
  {
    name: 'GCP',
    Icon: SiGooglecloud,
    icon: {
      color: '#DB4437',
      width: 14,
      height: 14
    },
    isActive: false,
    description:
      'Google Cloud Platform (GCP) is a collection of cloud-based computing services that run on Google`s data centers.'
  },
  {
    name: 'Jira',
    Icon: SiJira,
    icon: {
      color: '#0052CC',
      width: 12,
      height: 12
    },
    isActive: true,
    description:
      'Jira is a project management tool that helps teams plan, track, and report on their work.'
  }
]

function Providers() {
  const dispatch = useDispatch()

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

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {integrationList.map((i, k) => {
          return (
            <TitleCard
              key={k}
              title={i.name}
              topMargin={'mt-2'}
              className='relative'>
              <div className='flex items-start'>
                <div className='flex-shrink-0'>
                  <i.Icon
                    color={i.icon.color}
                    className={`w-${i.icon.width} h-${i.icon.height}`}
                  />
                </div>
                <span className='pl-4 text-left flex-1'>{i.description}</span>
              </div>
              <div className='absolute bottom-3 right-3 cursor-pointer'>
                <ArrowRight className='w-8 h-8 text-gray-800' />
              </div>
            </TitleCard>
          )
        })}
      </div>
    </>
  )
}

export default Providers
