import React from 'react'

const Nav = ({onChangePage,pages}) =>{
    const pageNames = Object.keys(pages);

    return (
        <>
            {pageNames.map(page => 
            <button onClick={()=>onChangePage(page)}>
                {pages[page].text}
            </button>
            )}
        </>
    )
}

export default Nav;