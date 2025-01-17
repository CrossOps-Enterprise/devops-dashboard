import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Instances from '../../features/Instances'

function InternalPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPageTitle({ title: 'Instances' }))
  }, [])

  return <Instances />
}

export default InternalPage
