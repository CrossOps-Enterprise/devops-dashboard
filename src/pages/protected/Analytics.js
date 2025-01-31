import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Analytics from '../../features/analytics'
import { setPageTitle } from '../../features/common/headerSlice'

function InternalPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPageTitle({ title: 'Analytics' }))
  }, [])

  return <Analytics />
}

export default InternalPage
