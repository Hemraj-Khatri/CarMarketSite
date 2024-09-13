import React from 'react'
import CarItems from '../components/CarItems'
import { useGetNewLIstingsQuery } from '../Slices/listingApiSlice'

function ConditionPage() {
  const {data:getNewListings, isloading, error} = useGetNewLIstingsQuery();
  console.log(getNewListings);
  
  return (
    <div>
      {/* new Condition */}
      <div>
        <h1>New Condition</h1>
       
      </div>

      {/* Used Or Second Hand */}
    </div>
  )
}

export default ConditionPage