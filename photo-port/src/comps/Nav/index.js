import React, {useEffect} from 'react';

const Nav = (props)=>{
   useEffect(()=>{
       document.title = currentTab.name
   }, [currentTab]);
const {
    tabs = [],
    currentTab,
    setCurrentTab,
} = props;
return(
    <section>
    {tabs.map((tab)=>{
<li>
    {currentTab.name}
    <span onClick={()=>{
        setCurrentTab(tab)
    }}>
    </span>
</li>
    })}
    </section>
)

}

export default Nav;