import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactFlow, useEdgesState, addEdge, useNodesState } from '@xyflow/react'

import DashboardStats from './components/DashboardStats'

import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon'

import '@xyflow/react/dist/style.css'

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

const initialNodes = [
  {
    id: 'main-group',
    data: { label: 'Region: us-east-1 (ohio)' },
    position: { x: 50, y: 20 },
    style: { width: 650, height: 400, fontWeight: 'bold' },
    draggable: false
  },
  {
    id: 'vpc1',
    data: { label: 'VPC 1\nCIDR: 10.0.0.0/16' },
    position: { x: 20, y: 50 },
    parentId: 'main-group',
    style: { width: 200, height: 250 },
    draggable: false
  },
  {
    id: 'vpc2',
    data: { label: 'VPC 2\nCIDR: 192.168.0.0/16' },
    position: { x: 400, y: 50 },
    parentId: 'main-group',
    style: { width: 200, height: 250 },
    draggable: false
  },
  {
    id: 'ec1',
    sourcePosition: 'bottom',
    type: 'input',
    data: { label: 'EC2 Instance 1\nType: t2.micro\nStatus: Running' },
    position: { x: 20, y: 40 },
    parentId: 'vpc1',
    extent: 'parent',
    style: { whiteSpace: 'pre-wrap' }
  },
  {
    id: 'ec2',
    type: 'input',
    sourcePosition: 'top',
    data: { label: 'EC2 Instance 2\nType: t2.micro\nStatus: Stopped' },
    position: { x: 20, y: 150 },
    parentId: 'vpc1',
    extent: 'parent',
    style: { whiteSpace: 'pre-wrap' }
  },
  {
    id: 'ec3',
    targetPosition: 'bottom',
    data: { label: 'EC2 Instance 3\nType: t2.micro\nStatus: Running' },
    position: { x: 20, y: 40 },
    parentId: 'vpc2',
    style: { whiteSpace: 'pre-wrap' }
  },
  {
    id: 'ec4',
    data: { label: 'EC2 Instance 4\nType: t2.micro\nStatus: Stopped' },
    position: { x: 20, y: 150 },
    parentId: 'vpc2',
    style: { whiteSpace: 'pre-wrap' }
  },
  {
    id: 'db1',
    targetPosition: 'left',
    sourcePosition: 'right',
    data: { label: 'Database 1\nType: RDS\nStatus: Available' },
    position: { x: 235, y: 150 },
    parentId: 'main-group',
    extent: 'parent',
    style: { whiteSpace: 'pre-wrap' }
  }
]
const initialEdges = [
  { id: '1-1', source: 'ec1', target: 'db1', animated: true },
  { id: '1-2', source: 'ec2', target: 'db1', animated: true },
  { id: '1-3', source: 'db1', target: 'ec3', animated: true },
  { id: '1-4', source: 'db1', target: 'ec4', animated: true }
]

function Dashboard() {
  const navigate = useNavigate()
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback((connection) => {
    setEdges((eds) => addEdge(connection, eds))
  }, [])

  const onNodeClick = (event, node) => {
    if (!node.id.includes('ec')) {
      return
    }
    navigate(`/app/stats/?id=${node.id}`)
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
            {initialNodes?.map(
              (node) =>
                !node.parentId && (
                  <div key={node.id} className='border-b-2 border-l-2 p-1'>
                    <div className='font-bold'>{node.data.label}</div>
                    <div className='ml-2'>
                      {initialNodes
                        .filter((child) => child.parentId === node.id)
                        .map((child) => (
                          <div
                            key={child.id}
                            className='border-b-2 border-l-2 p-1 mt-1 mb-1'>
                            <div className='font-bold'>
                              {child.data.label.split('\n')[0]}
                            </div>
                            <div className='ml-2'>
                              {initialNodes
                                .filter(
                                  (grandChild) =>
                                    grandChild.parentId === child.id
                                )
                                .map((grandChild) => (
                                  <div
                                    key={grandChild.id}
                                    className='border-b-2 border-l-2 p-1 mt-1 mb-1'>
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
        <div
          className=' shadow-md rounded-lg lg:ml-4 lg:mt-0 flex-grow h-[75%] pb-10'
          style={{
            border: '1px solid blue',
            borderRadius: '5px'
          }}>
          <div className='text-center font-bold mb-4'>{cloud}</div>
          <ReactFlow
            nodes={nodes}
            edges={edges}
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
