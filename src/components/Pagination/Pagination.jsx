import { PaginationWrapper, ArrowButton, PageInfo } from './styles'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


const Pagination = ({ page, totalPages, onNext, onPrevious }) => {
  return (
    <PaginationWrapper>
      <ArrowButton onClick={onPrevious} disabled={page === 1}>
        <FaArrowLeft />
      </ArrowButton>
      <PageInfo>
        Page {page} of {totalPages}
      </PageInfo>
      <ArrowButton onClick={onNext} disabled={page === totalPages}>
        <FaArrowRight />
      </ArrowButton>
    </PaginationWrapper>
  )
}

export default Pagination
