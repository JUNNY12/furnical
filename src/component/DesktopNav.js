import { Link } from "react-router-dom"
import styled from "styled-components"

const DesktopNav = () => {
  return (
    <Header>
      <div className="flex">
          <div className="info">info@gmail.com</div>
          <div className="info">09032869229</div>
          <div className="info">07068775422</div>
      </div>

      <div className="leftFlex">
       <div>
        <Link to='register'>Register</Link>
        <Link to='/account'>Login</Link>
       </div>

        <div className="leftNav">
          <span className="span">Fav</span>
          <span className="span">cart icon</span>
          <span className="span">Cart : #0 : 00</span>
        </div>
      </div>
    </Header>
  )
}

export default DesktopNav


const Header = styled.header`
background-color:${({theme}) => theme.colors.primary};
padding:${({theme}) => theme.padding.sm} ${({theme}) => theme.padding.xmd} ${({theme}) => theme.padding.sm}  ${({theme}) => theme.padding.xmd};
color:${({theme}) => theme.colors.white};
display:flex;
justify-content:space-between;
align-items:center;

a{
  text-decoration:none;
  margin-right:${({theme}) => theme.margin.sm};
  color:${({theme}) => theme.colors.white};
}
.flex{
display:flex;
align-items:center;
}

.info{
  margin-right:${({theme}) => theme.margin.sm};
}

.leftNav{
  background-color:#db9277;
  padding:${({theme}) => theme.padding.sm};
}

.leftFlex{
  display:flex;
  align-items:center;
  column-gap:2rem;
}

.span{
  margin-right:${({theme}) => theme.margin.sm};
}
`