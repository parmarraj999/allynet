import React, { useContext } from 'react'
import './filter.css';
import { LayoutContext } from '../../../layout/main/layoutContext';

function Filter() {

  const { collapse, setCollapse } = useContext(LayoutContext)

  return (
    <div className='feed-filter-container' style={collapse ? {justifyContent:'center'} : {}}>
      <div className='sort-btn' >Sort by
        <svg style={{ width: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} >
        <input placeholder='#hastag' className='search-input' />
        {/* <div className='search-btn' >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
        </div> */}
      </div>
    </div>
  )
}

export default Filter