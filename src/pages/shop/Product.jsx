import styled from "styled-components"
import { useParams } from "react-router-dom"
import data from "../../component/Data"
import { Rate, SharedLayout } from "../../component"
import { img } from "../../assets"
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
import { devices } from '../../config/mediaquery'

const Product = () => {
  const {item} = useParams()

  const product = data.find((singleItem) => {
    return (
      singleItem.id === Number(item)
    )
  })

  return (
    <SharedLayout>
      <Container>
        <div className="flexProd">
          <div className="singleImg">
            <img src={img} />
          </div>

          <div>
            <h2>Chinese Good chair</h2>
            <div className="rating"><Rate rating={3} /></div>

            <div className="price">
              <span>#</span>
              <span>30000</span>
            </div>

            <div className="status">In stock</div>

            <div className='quantity'>
                <span className='decrease'><AiOutlinePlus /></span>
                <span className='qty'>2</span>
                <span className='decrease'><AiOutlineMinus /></span>
            </div>
            <div className="btnWrap">
              <button className="add">Add to cart</button>
              <button className="buy">Buy now</button>
            </div>
            
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Tempore illo laudantium atque laborum perspiciatis hic ad
            </div>
            <div className="category">
              <span> Category: </span>
              <span> Chair </span>
            </div>
          </div>

        </div>
      </Container>
    </SharedLayout>
  )
}

const Container = styled.div`
padding:2rem 2rem 4rem 2rem;
margin:2rem 2rem 0 2rem;

.category{
  margin-bottom:1rem;
  font-weight:500;
}
.rating{
  display:flex;
  margin-bottom:1rem;
}

.price{
  margin-bottom:1rem;
  font-weight:500;
}

.status{
  margin-bottom:1rem;
}
.quantity{
  margin-bottom:1rem;
  font-weight:500;
}

.add,
.buy{
  border:none;
  outline:none;
  padding:1rem;
  margin-right:2rem;
  width:9rem;
  background:${({theme}) => theme.colors.primary};
  color:white;
  font-weight:bold;
  cursor:pointer; 
  @media all and (max-width:960px){
   width:7rem;
  }
}

.buy{
  background:white;
  color:black;
  border:1.5px solid ${({theme}) => theme.colors.primary};
}
.btnWrap{
  margin-bottom:1rem;
  display:inline-flex;
}

.desc{
  max-width:400px;
  margin-bottom:1rem;
}

.singleImg{
  height:400px;
  width:50%;
  object-fit:cover;
  @media all and (max-width:768px){
    width:400px;
  }
  @media all and (max-width:520px){
    width:300px;
    height:300px;
  }
  @media all and (max-width:425px){
    width:250px;
    height:250px;
  }
}
  .singleImg>img{
    width:100%;
    height:100%;
  }

.flexProd{
  display:flex;
  column-gap:2rem;
  justify-content:center;
  @media all and (max-width:960px){
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
}
.qty{
  border:2px solid black;
  height:1rem;
  width:1rem;
  padding:0.5rem;
  display:inline-flex;
  justify-content:center;
  align-items:center;
  margin:0 1rem 0 1rem;
  @media all and ${devices.tablet}{
      height:0.5rem;
      width:0.5rem;
      margin:0 0.5rem 0 0.5rem;
      padding:0.35rem;
  }
}

.increase,
.decrease{
  font-size:1.2rem;
  cursor:pointer;
  @media all and ${devices.tablet}{
      font-size:1rem; 
  }
}
`

export default Product