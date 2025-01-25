import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Providers from '../../features/Providers'

function InternalPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPageTitle({ title: 'Applications' }))
  }, [])

  return <Providers />
}

export default InternalPage
