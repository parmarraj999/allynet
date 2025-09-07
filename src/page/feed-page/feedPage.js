import React, { useContext } from 'react'
import './feedPage.css'
import Filter from './feed-filters/filter'
import { LayoutContext } from '../../layout/main/layoutContext'
import Post from './feed-post-card/post'

function FeedPage() {

  const { collapse, setCollapse } = useContext(LayoutContext)

  return (
    <div className='feed-page-container' >
      <Filter />
      <div className='feed-page-wrapper' style={collapse ? { alignItems: 'center' } : { alignItems: "flex-start" }} >
        <Post />
      </div>
    </div>
  )
}

export default FeedPage