import CategoryItem from './CategoryItem'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  margin: 2rem 0;
`

// dummy
const categoryList = {
  all: 5,
  react: 3,
  javascript: 1,
  nextjs: 3,
}

const CategoryList = () => {
  return (
    <Container>
      {Object.entries(categoryList).map(([key, value]) => (
        <CategoryItem key={key} text={key} count={value} />
      ))}
    </Container>
  )
}

export default CategoryList