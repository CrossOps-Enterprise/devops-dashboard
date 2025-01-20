import { useCallback, useState } from 'react'
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  Background
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
  },
  {
    title: 'Active Users',
    value: '5.6k',
    icon: <UsersIcon className='w-8 h-8' />,
    description: '↙ 300 (18%)'
  }
]

const initialNodes = [
  {
    id: '1',
    type: 'ResizableNode',
    data: { label: 'VPS' },
    position: { x: 300, y: 100 }
  },
  {
    id: '2',
    type: 'ResizableNode',
    data: { label: 'EC2 Instance 1' },
    position: { x: 100, y: 300 }
  },
  {
    id: '3',
    type: 'ResizableNode',
    data: { label: 'EC2 Instance 2' },
    position: { x: 500, y: 300 }
  }
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' }
]
// const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

function Dashboard() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const [nodeName, setNodeName] = useState('Node 1')
  const [nodeBg, setNodeBg] = useState('#dbdbdb')
  const [nodeHidden, setNodeHidden] = useState(false)

  // const onConnect = useCallback(
  //   (params) => setEdges((eds) => addEdge(params, eds)),
  //   [setEdges],
  // );

  return (
    <>
      <div className='grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6'>
        {statsData.map((d, k) => {
          return <DashboardStats key={k} {...d} colorIndex={k} />
        })}
      </div>
      <div style={{ height: '800vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          // defaultViewport={defaultViewport}
          minZoom={1}
          maxZoom={1}
          attributionPosition='bottom-left'>
          <Background />
        </ReactFlow>
      </div>
    </>
  )
}

export default Dashboard
