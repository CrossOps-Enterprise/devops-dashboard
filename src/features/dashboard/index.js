import {
  ReactFlow,
  Background,
  useEdgesState,
  useNodesState
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

import DashboardStats from './components/DashboardStats'

import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon'

const statsData = [
  {
    title: 'Running Instances',
    value: '2',
    icon: <CreditCardIcon className='w-8 h-8' />,
    description: 'Instances'
  },
  {
    title: 'Memory Usage',
    value: '500',
    icon: <CircleStackIcon className='w-8 h-8' />,
    description: 'MB'
  }
]

// const initialNodes = [
//   // {
//   //   id: 'us-region',
//   //   data: { label: 'US Region' },
//   //   position: { x: 50, y: 50 },
//   //   parentId: 'aws',
//   //   style: { width: 700, height: 350 } // US Region as child of AWS
//   // },
//   // {
//   //   id: 'production-vps',
//   //   data: { label: 'Production VPC' },
//   //   position: { x: 50, y: 50 },
//   //   parentId: 'us-region',
//   //   style: { width: 600, height: 250 } // Production VPC as child of US Region
//   // },
//   // {
//   //   id: '1',
//   //   data: { label: 'Subnet 1\nCIDR: 192.168.1.0/24' },
//   //   position: { x: 20, y: 40 },
//   //   parentId: 'production-vps' // First child node of Production VPC
//   // },
//   // {
//   //   id: '2',
//   //   data: { label: 'Subnet 2\nCIDR: 192.168.2.0/24' },
//   //   position: { x: 20, y: 150 },
//   //   parentId: 'production-vps' // Second child node of Production VPC
//   // },
//   // {
//   //   id: '3',
//   //   data: { label: 'Subnet 3\nCIDR: 192.168.3.0/24' },
//   //   position: { x: 400, y: 80 },
//   //   parentId: 'production-vps' // Third child node of Production VPC
//   // }
// ]

const initialNodes = [
  {
    id: 'main-group',
    data: { label: 'Region: us-east-1 (ohio)' },
    position: { x: 50, y: 50 },
    style: { width: 800, height: 400, fontWeight: 'bold' },
    draggable: false
  },
  {
    id: 'vpc-1',
    data: { label: 'VPC 1\nCIDR: 10.0.0.0/16' },
    position: { x: 60, y: 60 },
    parentId: 'main-group',
    style: { width: 350, height: 300 },
    draggable: false
  },
  {
    id: 'vpc-2',
    data: { label: 'VPC 2\nCIDR: 192.168.0.0/16' },
    position: { x: 420, y: 60 },
    parentId: 'main-group',
    style: { width: 350, height: 300 },
    draggable: false
  },
  {
    id: 'ec2-1',
    data: { label: 'EC2 Instance 1\nType: t2.micro\nStatus: Running' },
    position: { x: 20, y: 40 },
    parentId: 'vpc-1',
    extent: 'parent',
    style: { whiteSpace: 'pre-wrap' }
  },
  {
    id: 'ec2-2',
    data: { label: 'EC2 Instance 2\nType: t2.micro\nStatus: Stopped' },
    position: { x: 20, y: 150 },
    parentId: 'vpc-1',
    extent: 'parent',
    style: { whiteSpace: 'pre-wrap' }
  },
  {
    id: 'ec23',
    data: { label: 'EC2 Instance 3\nType: t2.micro\nStatus: Running' },
    position: { x: 20, y: 40 },
    parentId: 'vpc-2',
    extent: 'parent',
    style: { whiteSpace: 'pre-wrap' }
  },
  {
    id: 'ec24',
    data: { label: 'EC2 Instance 4\nType: t2.micro\nStatus: Stopped' },
    position: { x: 20, y: 150 },
    parentId: 'vpc-2',
    extent: 'parent',
    style: { whiteSpace: 'pre-wrap' }
  },
  {
    id: 'db-1',
    data: { label: 'Database 1\nType: RDS\nStatus: Available' },
    position: { x: 180, y: 100 },
    parentId: 'vpc-1',
    extent: 'parent',
    style: { whiteSpace: 'pre-wrap' }
  },
  {
    id: 'db-2',
    data: { label: 'Database 2\nType: RDS\nStatus: Available' },
    position: { x: 180, y: 100 },
    parentId: 'vpc-2',
    extent: 'parent',
    style: { whiteSpace: 'pre-wrap' }
  }
]
const initialEdges = [
  { id: 'ec24-ec23', source: 'ec23', target: 'ec24' },
  { id: 'ec23-ec24', source: 'ec24', target: 'ec23' }
]

function Dashboard() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  return (
    <>
      <div className='grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6'>
        {statsData.map((d, k) => {
          return <DashboardStats key={k} {...d} colorIndex={k} />
        })}
      </div>
      <div
        style={{
          height: '800px'
          // marginTop: '20px',
          // border: '1px solid #ddd',
          // borderRadius: '10px'
        }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          fitViewOptions={{}}
          attributionPosition='bottom-left'>
          <Background color='#ddd' gap={16} />
          {/* <MiniMap nodeStrokeColor={(node) => node.style.backgroundColor} /> */}
        </ReactFlow>
      </div>
    </>
  )
}

export default Dashboard
