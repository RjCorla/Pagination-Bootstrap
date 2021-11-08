import React, { useState, useEffect } from 'react'

import { postsdata } from './components/data'
import Pagination from './components/Pagination'
import Posts from './components/Posts'

function App() {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    setPosts(postsdata)
  }, [])

  // ? get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // ? change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className='container mt-4'>
      <h1 className='text-primary mb-3'>Pagination</h1>
      <Posts posts={currentPosts} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  )
}

export default App
