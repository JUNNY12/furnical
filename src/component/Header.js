import React from 'react'
import DesktopNav from './DesktopNav'
import SearchSection from './SearchSection'
import SecondNav from './SecondNav'
import useWidth from '../hooks/useWidth'
import IpadNav from './IpadNav'
import MobileNav from './MobileNav'
import { useState } from 'react'
import BottomNav from './BottomNav'


const Header = () => {
  const width = useWidth()
  const [showSideBar, setShowSideBar] = useState(false)
  const [showCart, setShowCart] = useState(false)


  const isSmall = width < 320
  const isMobile = width >=320 && width <= 768
  const isTablet =  width >= 769 && width <= 990
  const isDesktop = !isSmall && !isMobile && !isTablet

  return (
    <header>
    {
      isSmall && <MobileNav
      showSideBar={showSideBar}
      setShowSideBar={setShowSideBar}
      />
    }
    {
      isMobile &&
      <div>
         <MobileNav
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        />
        <div>
          <BottomNav />
        </div>
      </div>
    }

    {
      isTablet && <IpadNav
      showSideBar={showSideBar}
      setShowSideBar={setShowSideBar}
      showCart={showCart}
      setShowCart={setShowCart}
      /> 
    }

    {
      isDesktop && 
      <div>
        <DesktopNav 
        showCart={showCart}
        setShowCart={setShowCart}
        />
        <SearchSection />
        <SecondNav />
      </div>
    }

    </header>
  )
}

export default Header