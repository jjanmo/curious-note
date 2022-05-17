import styled from '@emotion/styled'
import Layout from 'components/Layout'
import PostList from 'components/PostList'
import { PostsSortingContextProvider } from 'contexts/PostsSortingContext'
import React from 'react'

interface Props {
  location: {
    search: string
  }
}

const Home = ({ location: { search } }: Props) => {
  return (
    <PostsSortingContextProvider search={search}>
      <Layout>
        <Main>
          <PostList />
        </Main>
      </Layout>
    </PostsSortingContextProvider>
  )
}

export default Home

const Main = styled.main`
  min-width: 40rem;
  max-width: 76.8rem;
  width: 100%;
  margin: auto;
`
