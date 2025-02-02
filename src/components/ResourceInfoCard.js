const ResourceInfoCard = ({ title, items }) => {
  return (
    <div className='bg-white dark:bg-slate-700 rounded-lg shadow-sm border border-gray-200 dark:border-slate-600 p-6'>
      <h2 className='text-sm font-bold text-gray-500 dark:text-gray-400 mb-4'>
        {title || 'Title'}
      </h2>
      <div className='space-y-3'>
        {items?.map((info) => {
          return (
            <div className='flex justify-between'>
              <span className='text-sm text-gray-500 dark:text-gray-400'>
                {info.label}
              </span>
              <span
                className={`text-sm font-medium text-gray-900 dark:text-white ${info.active ? 'text-green-600' : ''}`}>
                {info.value}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ResourceInfoCard
