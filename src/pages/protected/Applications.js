import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Applications from '../../features/Applications'

function InternalPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPageTitle({ title: 'Applications' }))
  }, [])

  return <Applications />
}

export default InternalPage
