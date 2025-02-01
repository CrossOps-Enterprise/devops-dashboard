const { MarkerType } = require('@xyflow/react')
const {
  FaArrowRight,
  FaGlobe,
  FaNetworkWired,
  FaUsers
} = require('react-icons/fa6')

const customMarker = {
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 15,
    height: 15,
    color: '#FF0072'
  },
  style: {
    strokeWidth: 3,
    stroke: '#FF0072'
  }
}

const greenMarker = {
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 15,
    height: 15,
    color: 'green'
  },
  style: {
    strokeWidth: 3,
    stroke: 'green'
  }
}

export const INITIAL_NODES = [
  {
    id: 'jioa',
    data: {
      label: 'One Diversified Production',
      icon: FaGlobe,
      className:
        'h-[600px] min-w-[800px] border border-primary border-dashed border-4'
    },
    position: { x: 50, y: 500 },
    type: 'customArea',
    draggable: false
  },
  {
    id: 'kraken',
    // extent: 'parent',
    // parentId: 'jioa',
    type: 'custom',
    draggable: false,
    data: {
      className: 'w-[600px] h-[200px]',
      status: 'active',
      icon: FaArrowRight,
      label: 'KrakenD',
      description: 'API gateway to every service',
      handlePosition1: 'bottom',
      handlePosition2: 'bottom'
    },
    position: { x: 750, y: 50 }
  },
  {
    id: 'jiods',
    extent: 'parent',
    parentId: 'jioa',
    type: 'custom',
    draggable: false,
    data: {
      className: 'w-[200px] h-[250px]',
      status: 'active',
      icon: FaGlobe,
      label: 'Jupiter',
      services: [
        { id: 'os3', service: 'S3 Storage' },
        { id: 'sba', service: 'SpringBoot Application' }
      ],
      description: 'Intelligent Orchestration Deployment Services'
    },
    position: { x: 50, y: 300 }
  },
  {
    id: 'ce',
    extent: 'parent',
    // parentId: 'jioa',
    type: 'customArea',
    draggable: false,
    data: {
      icon: FaUsers,
      className:
        'h-[600px] min-w-[800px] border border-secondary border-dashed border-4',
      label: 'Customer Environment',
      handlePosition1: 'bottom',
      handlePosition2: 'bottom'
    },
    position: { x: 1200, y: 500 }
  },
  {
    id: 'dioes',
    extent: 'parent',
    parentId: 'ce',
    type: 'custom',
    draggable: false,
    data: {
      className: 'w-[200px] h-250px]',
      status: 'active',
      icon: FaNetworkWired,
      handlePosition1: 'top',
      handlePosition2: 'left',
      label: 'Demeter',
      services: [
        { id: 'cs3', service: 'Customers S3 Storage' },
        { id: 'ddo', service: 'Demeter DevOps' }
      ],
      description: 'Intelligent Orchestration Environment  Services'
    },
    position: { x: 200, y: 100 }
  },
  {
    id: 'demeterAPI',
    extent: 'parent',
    parentId: 'jioa',
    type: 'connectingNode',
    draggable: false,
    data: {
      status: 'active',
      icon: FaArrowRight,
      description: 'Takes over deployment, management, logging etc',
      handlePosition2: 'right',
      label: 'Demeter API'
    },
    position: { x: 600, y: 300 }
  },
  {
    id: 'krakenApi',
    extent: 'parent',
    // parentId: 'jioa',
    type: 'connectingNode',
    draggable: false,
    data: {
      status: 'active',
      icon: FaArrowRight,
      handlePosition1: 'bottom',
      handlePosition2: 'top',
      label: 'KrakenD API',
      description: 'Demeter calls home for all updates, no direct connection'
    },
    position: { x: 960, y: 350 }
  }
]

export const INITIAL_EDGES = [
  {
    id: '1',
    source: 'jiods',
    target: 'demeterAPI',
    animated: true,
    label: '',
    type: 'smoothstep',
    ...customMarker
  },
  {
    id: '2',
    source: 'demeterAPI',
    target: 'dioes',
    animated: true,
    label: '',
    type: 'smoothstep',
    ...customMarker
  },
  {
    id: '3',
    source: 'dioes',
    target: 'krakenApi',
    animated: true,
    label: '',
    type: 'smoothstep',
    ...greenMarker
  },
  {
    id: '4',
    source: 'krakenApi',
    target: 'kraken',
    animated: true,
    label: '',
    type: 'smoothstep',
    ...greenMarker
  }
]
