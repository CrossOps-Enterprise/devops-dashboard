import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ReactFlow,
  useEdgesState,
  addEdge,
  useNodesState,
  Position,
  Handle
} from '@xyflow/react'

import DashboardStats from './components/DashboardStats'

import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon'

import '@xyflow/react/dist/style.css'
import { INITIAL_EDGES, INITIAL_NODES } from '../../utils/dummyData'
import { FaDatabase, FaServer, FaUser } from 'react-icons/fa6'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

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

const cloud = 'AWS'

function CustomAreaNode({ data, isConnectable }) {
  const { label, icon, description } = data
  return (
    <>
      <div className='h-[500px] w-[800px] bg-gray-100 rounded-md shadow-md flex flex-col items-start p-2'>
        <div className='flex items-center justify-center mb-2'>
          <FaServer /> <span className='font-bold ml-1'>{label}</span>
        </div>
        <div className='text-sm text-gray-500'>{description}</div>
      </div>
    </>
  )
}

function VerticalAreaNode({}) {
  return (
    <div className='flex flex-col p-2 bg-gray-300 rounded-md shadow-md h-[400px] w-[200px]'>
      <div className='font-bold flex items-center'>
        <FaServer /> &nbsp;Instances
      </div>
    </div>
  )
}

function CustomNode({ data, isConnectable }) {
  const { label, icon: Icon, description, status } = data

  return (
    <>
      <div className='h-auto w-[180px] bg-indigo-100 rounded-md shadow-md flex flex-col items-center p-2'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center'>
            <Icon /> <span className='ml-1'>{label}</span>
          </div>
          <div
            className={`w-3 h-3 rounded-full ${
              status?.toLowerCase() === 'active' ? 'bg-green-500' : 'bg-red-500'
            }`}></div>
        </div>
        {/* <div className='text-sm text-gray-500'>{description}</div> */}
      </div>

      <Handle
        type='target'
        position={Position.Bottom}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
    </>
  )
}

function Dashboard() {
  const nodeTypes = {
    custom: CustomNode,
    verticalArea: VerticalAreaNode,
    customArea: CustomAreaNode
  }

  const navigate = useNavigate()
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES)
  const [edges, setEdges, onEdgesChange] = useEdgesState(INITIAL_EDGES)

  const onConnect = useCallback((connection) => {
    setEdges((eds) => addEdge(connection, eds))
  }, [])

  const onNodeClick = (event, node) => {
    // if (!node.id.includes('ec')) {
    //   return
    // }
    // navigate(`/app/stats/?id=${node.id}`)
  }

  return (
    <>
      <div className='grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6'>
        {statsData.map((d, k) => {
          return <DashboardStats key={k} {...d} colorIndex={k} />
        })}
      </div>
      <div className='flex flex-col lg:flex-row mt-4 h-[100%]'>
        <div className='bg-white shadow-md rounded-lg p-2 lg:w-1/4 h-[75%]'>
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
        </div>
        <div className='shadow-md rounded-lg lg:ml-4 lg:mt-0 flex-grow h-[75%] border-2 border-indigo-500'>
          <ReactFlow
            nodes={nodes}
            style={{
              backgroundColor: 'white'
            }}
            edges={edges}
            nodeTypes={nodeTypes}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}></ReactFlow>
        </div>
      </div>
    </>
  )
}

export default Dashboard
