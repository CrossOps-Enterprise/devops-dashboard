import '@xyflow/react/dist/style.css'

import {
  ReactFlow,
  Background,
  useEdgesState,
  addEdge,
  useNodesState
} from '@xyflow/react'

import DashboardStats from './components/DashboardStats'

import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon'
import { useCallback } from 'react'

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

const initialNodes = [
  {
    id: 'main-group',
    data: { label: 'Region: us-east-1 (ohio)' },
    position: { x: 100, y: 40 },
    style: { width: 800, height: 400, fontWeight: 'bold' },
    draggable: false
  },
  {
    id: 'vpc1',
    data: { label: 'VPC 1\nCIDR: 10.0.0.0/16' },
    position: { x: 40, y: 50 },
    parentId: 'main-group',
    style: { width: 250, height: 250 },
    draggable: false
  },
  {
    id: 'vpc2',
    data: { label: 'VPC 2\nCIDR: 192.168.0.0/16' },
    position: { x: 460, y: 50 },
    parentId: 'main-group',
    style: { width: 250, height: 250 },
    draggable: false
  },
  {
    id: 'ec1',
    sourcePosition: 'bottom',
    type: 'input',
    data: { label: 'EC2 Instance 1\nType: t2.micro\nStatus: Running' },
    position: { x: 50, y: 40 },
    parentId: 'vpc1',
    extent: 'parent',
    style: { whiteSpace: 'pre-wrap' }
  },
  {
    id: 'ec2',
    type: 'input',
    sourcePosition: 'top',
    data: { label: 'EC2 Instance 2\nType: t2.micro\nStatus: Stopped' },
    position: { x: 50, y: 150 },
    parentId: 'vpc1',
    extent: 'parent',
    style: { whiteSpace: 'pre-wrap' }
  },
  {
    id: 'ec3',
    targetPosition: 'bottom',
    data: { label: 'EC2 Instance 3\nType: t2.micro\nStatus: Running' },
    position: { x: 50, y: 40 },
    parentId: 'vpc2',
    style: { whiteSpace: 'pre-wrap' }
  },
  {
    id: 'ec4',
    data: { label: 'EC2 Instance 4\nType: t2.micro\nStatus: Stopped' },
    position: { x: 50, y: 150 },
    parentId: 'vpc2',
    style: { whiteSpace: 'pre-wrap' }
  },
  {
    id: 'db1',
    targetPosition: 'left',
    sourcePosition: 'right',
    data: { label: 'Database 1\nType: RDS\nStatus: Available' },
    position: { x: 300, y: 150 },
    parentId: 'main-group',
    extent: 'parent',
    style: { whiteSpace: 'pre-wrap' }
  }
]
const initialEdges = [
  { id: '1-1', source: 'ec1', target: 'db1' },
  { id: '1-2', source: 'ec2', target: 'db1' },
  { id: '1-3', source: 'db1', target: 'ec3' },
  { id: '1-4', source: 'db1', target: 'ec4' }
]

function Dashboard() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback((connection) => {
    setEdges((eds) => addEdge(connection, eds))
  }, [])

  return (
    <>
      <div className='grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6'>
        {statsData.map((d, k) => {
          return <DashboardStats key={k} {...d} colorIndex={k} />
        })}
      </div>
      <div
        style={{
          height: '75%',
          marginTop: '10px',
          paddingBottom: '10px',
          border: '1px solid blue',
          borderRadius: '10px'
        }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          // fitView
          // fitViewOptions={{}}
          // attributionPosition='bottom-left'
        >
          <Background color='#ddd' gap={16} />
          {/* <MiniMap nodeStrokeColor={(node) => node.style.backgroundColor} /> */}
        </ReactFlow>
      </div>
    </>
  )
}

export default Dashboard
