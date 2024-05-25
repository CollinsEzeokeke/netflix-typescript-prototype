import React from 'react'
import {Link} from 'react-router-dom'


function Navs() {
  return (
    <div>
        <Link to='/blog'><button>blog</button></Link>
            <Link to='/chats'><button>chats</button></Link>
            <Link to='/'><button>home</button></Link>
            <Link to='/about'><button>about</button></Link>
    </div>
  )
}

export default Navs