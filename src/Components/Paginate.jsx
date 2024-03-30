import { Pagination } from "react-bootstrap";

const Paginate = ({prev,next,handlePages}) => {

    const handleNext = () => {
        let [,data] = next.split("?")
        handlePages(data)
    }

    const handlePrev = () => {
        let [,data] = prev.split("?")
        handlePages(data)
    }

    return (
        <Pagination>
            
        {prev && <Pagination.Prev onClick={handlePrev} />}

        {next && <Pagination.Next onClick={handleNext} />}

        </Pagination>
    )
}

export default Paginate