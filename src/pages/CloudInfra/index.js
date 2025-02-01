import { useCallback, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ReactFlow, useEdgesState, addEdge, useNodesState } from '@xyflow/react'

import capitalize from 'lodash/capitalize'
import StatsCard from '../../components/StatsCard'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon'

import '@xyflow/react/dist/style.css'
import { INITIAL_EDGES, INITIAL_NODES } from './data'
import {
  CustomAreaNode,
  CustomGroup,
  CustomNode,
  SubNode,
  ConnectingNode,
  VerticalAreaNode
} from '../../components/react-flow-nodes'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import { getProductionNameFromUrl } from '../../utils'

const statsData = [
  {
    title: 'EC2 Instances Up',
    value: '4',
    icon: <CreditCardIcon className='w-8 h-8' />,
    description: 'Instances'
  },
  {
    title: 'Total VPCs',
    value: '2',
    icon: <UsersIcon className='w-8 h-8' />,
    description: 'VPCs'
  },
  {
    title: 'Databases Available',
    value: '1',
    icon: <CircleStackIcon className='w-8 h-8' />,
    description: 'Databases'
  }
]

function CloudInfra() {
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    const productionName = getProductionNameFromUrl(location.pathname)

    dispatch(
      setPageTitle({ title: `Production ${capitalize(productionName)}` })
    )
  }, [dispatch, location])

  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES)
  const [edges, setEdges, onEdgesChange] = useEdgesState(INITIAL_EDGES)

  const onConnect = useCallback((connection) => {
    setEdges((eds) => addEdge(connection, eds))
  }, [])

  const nodeTypes = {
    custom: CustomNode,
    verticalArea: VerticalAreaNode,
    customArea: CustomAreaNode,
    customGroup: CustomGroup,
    subNode: SubNode,
    connectingNode: ConnectingNode
  }

  return (
    <>
      <div className='grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6'>
        {statsData.map((d, k) => {
          return <StatsCard key={k} {...d} colorIndex={k} />
        })}
      </div>
      <div className='flex flex-col lg:flex-row mt-4 h-[100%]'>
        {/* <div className='bg-white shadow-md rounded-lg p-2 lg:w-1/4 h-[75%]'>
          <div className='text-center font-bold mb-4'>{cloud}</div>
          <div className='space-y-4'>
            {INITIAL_NODES?.map(
              (node) =>
                !node.parentId && (
                  <div key={node.id} className='border-b-2 border-l-2 p-1'>
                    <div className='font-bold'>{node.data.label}</div>
                    <div className='ml-2'>
                      {INITIAL_NODES.filter(
                        (child) => child.parentId === node.id
                      ).map((child) => (
                        <div
                          key={child.id}
                          className='border-b-2 border-l-2 p-1 mt-1 mb-1'>
                          <div className='font-bold'>
                            {child.data.label.split('\n')[0]}
                          </div>
                          <div className='ml-2'>
                            {INITIAL_NODES.filter(
                              (grandChild) => grandChild.parentId === child.id
                            ).map((grandChild) => (
                              <div
                                onClick={(e) => onNodeClick(e, grandChild)}
                                key={grandChild.id}
                                className='border-b-2 border-l-2 p-1 mt-1 mb-1 cursor-pointer'>
                                {grandChild.data.label.split('\n')[0]}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
            )}
          </div>
        </div> */}
        <div className='shadow-md rounded-lg lg:ml-4 lg:mt-0 flex-grow h-[75%] border-2 border-primary'>
          <ReactFlow
            nodes={nodes}
            style={{
              backgroundColor: ''
            }}
            edges={edges}
            nodeTypes={nodeTypes}
            onConnect={onConnect}
            // onNodeClick={onNodeClick}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}></ReactFlow>
        </div>
      </div>
    </>
  )
}

export default CloudInfra
