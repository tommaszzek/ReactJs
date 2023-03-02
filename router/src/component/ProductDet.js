import { useParams } from "react-router-dom";

export const ProductDet = () => {
  let params= useParams();

  return (
    <div className='component'>ProductDetail - {params.id}</div>
  )
}