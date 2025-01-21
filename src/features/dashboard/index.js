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

const initialNodes = [
  {
    id: 'aws',
    data: { label: 'AWS' },
    position: { x: 10, y: 10 },
    style: { width: 800, height: 450 } // AWS as the top-level parent
  },
  {
    id: 'us-region',
    data: { label: 'US Region' },
    position: { x: 50, y: 50 },
    parentId: 'aws',
    style: { width: 700, height: 350 } // US Region as child of AWS
  },
  {
    id: 'production-vps',
    data: { label: 'Production VPC' },
    position: { x: 50, y: 50 },
    parentId: 'us-region',
    style: { width: 600, height: 250 } // Production VPC as child of US Region
  },
  {
    id: '1',
    data: { label: 'Subnet 1\nCIDR: 192.168.1.0/24' },
    position: { x: 20, y: 40 },
    parentId: 'production-vps' // First child node of Production VPC
  },
  {
    id: '2',
    data: { label: 'Subnet 2\nCIDR: 192.168.2.0/24' },
    position: { x: 20, y: 150 },
    parentId: 'production-vps' // Second child node of Production VPC
  },
  {
    id: '3',
    data: { label: 'Subnet 3\nCIDR: 192.168.3.0/24' },
    position: { x: 400, y: 80 },
    parentId: 'production-vps' // Third child node of Production VPC
  }
]

const initialEdges = [{ id: 'e1-2', source: '1', target: '3' }]

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
          height: '800px',
          marginTop: '20px',
          border: '1px solid #ddd',
          borderRadius: '10px'
        }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          // fitView
          // attributionPosition="bottom-left"
        >
          <Background color='#ddd' gap={16} />
          {/* <MiniMap nodeStrokeColor={(node) => node.style.backgroundColor} /> */}
        </ReactFlow>
      </div>
    </>
  )
}

export default Dashboard
