import React from 'react'

 function MemoComp() {
  return (
    <div>
      Memo will only re-render when its needed for functional component similar to pure components which was for class --hence performance improvement
    </div>
  )
}

export default React.memo(MemoComp)