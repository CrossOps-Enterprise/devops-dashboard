import { Handle, Position } from '@xyflow/react'
import { FaServer } from 'react-icons/fa6'
import { useLocation, useNavigate } from 'react-router-dom'
import { theme } from '../constants'

export function CustomAreaNode({ data, isConnectable }) {
  const { label, icon: Icon, description, className } = data
  return (
    <>
      <div
        className={`${className} rounded-md shadow-md flex flex-col items-start p-2 `}>
        <div className='flex items-center justify-center mb-2 ml-2'>
          {Icon && <Icon className='w-8 h-8' />}{' '}
          <span className='font-bold ml-2 text-xl text-tx1'>{label}</span>
        </div>
        <hr className='w-full border-t-2 border-gray-300' />
        <div className='text-sm text-gray-500'>{description}</div>
      </div>
    </>
  )
}

export function VerticalAreaNode() {
  return (
    <div className='flex flex-col p-2 bg-hl3a-300 rounded-md shadow-md h-[400px] w-[200px]'>
      <div className='font-bold flex items-center'>
        <FaServer /> &nbsp;Instances
      </div>
    </div>
  )
}

export function KrakenDNode({ data, isConnectable }) {
  const navigate = useNavigate()
  const location = useLocation()

  const { label, icon: Icon, description, status, services, className } = data

  const onNodeClick = (id) => {
    navigate(`${location.pathname}/resource/${id}`)
  }

  return (
    <>
      <Handle
        type='source'
        id='r1'
        position={Position.Right}
        style={{
          top: '20%',
          backgroundColor: theme.primary,
          height: 10,
          width: 10
        }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />

      <Handle
        type='source'
        position={Position.Right}
        style={{
          backgroundColor: 'green',
          height: 10,
          width: 10
        }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />

      <Handle
        type='source'
        id='r2'
        position={Position.Right}
        style={{
          top: '80%',
          backgroundColor: theme.secondary,
          height: 10,
          width: 10
        }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />

      <Handle
        type='target'
        id='api-target'
        position={Position.Bottom}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      {/* <Handle
        type='target'
        id='t2'
        position={Position.Bottom}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      /> */}

      <div
        className={`bg-hl3a rounded-md shadow-md flex flex-col pb-2 ${className}`}>
        <div className='p-2'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center w-4/5'>
              <Icon />
              <span className='ml-1 font-bold'>{label}</span>
            </div>
            <div
              className={`w-3 h-3 rounded-full ${
                status?.toLowerCase() === 'active'
                  ? 'bg-green-500'
                  : 'bg-red-500'
              }`}></div>
          </div>
          <div className='text-gray-500 w-full'>{description}</div>
        </div>
        {Boolean(services?.length) && (
          <div className='border-t border-black my-2'></div>
        )}

        {services?.map((item) => (
          <>
            <div
              onClick={() => onNodeClick(item?.id)}
              className='flex items-center w-full justify-center flex-col'>
              <div className='w-[90%] border-2 border-dashed border-gray-400 p-2 mt-2'>
                <div className='font-bold'>{item?.service}</div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export function CustomNode({ data, isConnectable }) {
  const navigate = useNavigate()
  const location = useLocation()

  const {
    label,
    icon: Icon,
    description,
    status,
    services,
    className,
    handlePosition1,
    handlePosition2
  } = data

  const onNodeClick = (id) => {
    navigate(`${location.pathname}/resource/${id}`)
  }

  return (
    <>
      <Handle
        type='source'
        position={handlePosition1 || Position.Right}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />

      <Handle
        type='target'
        position={handlePosition2 || Position.Left}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />

      <div
        className={`bg-hl3a rounded-md shadow-md flex flex-col pb-2 ${className}`}>
        <div className='p-2'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center w-4/5'>
              <Icon />
              <span className='ml-1 font-bold'>{label}</span>
            </div>
            <div
              className={`w-3 h-3 rounded-full ${
                status?.toLowerCase() === 'active'
                  ? 'bg-green-500'
                  : 'bg-red-500'
              }`}></div>
          </div>
          <div className='text-gray-500 w-full'>{description}</div>
        </div>
        {Boolean(services?.length) && (
          <div className='border-t border-black my-2'></div>
        )}

        {services?.map((item) => (
          <>
            <div
              onClick={() => onNodeClick(item?.id)}
              className='flex items-center w-full justify-center flex-col'>
              <div className='w-[90%] border-2 border-dashed border-gray-400 p-2 mt-2'>
                <div className='font-bold'>{item?.service}</div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export function SubNode({ data, isConnectable }) {
  const { label, description, status, handlePosition1, handlePosition2 } = data

  return (
    <>
      <div className='h-[200px] w-[280px] bg-hl1a rounded-md shadow-md flex flex-col p-2'>
        <div className='flex items-start justify-between w-full text-xs font-semibold'>
          <div className='flex items-center w-4/5'>
            <span className=''>{label}</span>
          </div>
          <div
            className={`w-3 h-3 rounded-full ${
              status?.toLowerCase() === 'active' ? 'bg-green-500' : 'bg-red-500'
            }`}></div>
        </div>
        <div className='text-tx1 w-full'>{description}</div>
      </div>

      <Handle
        type='target'
        position={handlePosition1 || Position.Bottom}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Handle
        type='source'
        position={handlePosition2 || Position.Bottom}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
    </>
  )
}

export function ConnectingNode({ data, isConnectable }) {
  const { label, description, handlePosition1, handlePosition2 } = data

  return (
    <>
      <div className='w-[180px] bg-orange-100 rounded-md shadow-md flex flex-col p-2'>
        <span className='text-xs font-bold'>{label}</span>
        <br />
        <span className={`text-gray-500 text-xs flex items-center`}>
          {description}
        </span>
      </div>

      <Handle
        type='target'
        position={handlePosition1 || Position.Left}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Handle
        type='source'
        position={handlePosition2 || Position.Bottom}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
    </>
  )
}

export function CustomGroup({ data, isConnectable }) {
  const { label } = data

  return (
    <>
      <div className='h-[600px] w-[800px]'>
        <div className='font-bold mb-1'>{label}</div>
        <div className='h-[580px] w-[750px] rounded-md shadow-md flex flex-col items-center p-2 border-dashed border-4 border-bro' />
      </div>
    </>
  )
}
