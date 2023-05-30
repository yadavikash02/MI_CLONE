import React from 'react'

function Header() {
    const cartIcon = <svg className="temp" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
  return (
    <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
    <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.mi.com/in/">MI INDIA |</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP |</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP |</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ﹀</a>
        </li>
        
      </ul>
      <form className="d-flex text-light" role="search">
      <a className="nav-link text-light"  href="https://store.mi.com/in/site/login">SIGN IN  |</a>
                 <a  className="nav-link text-light" href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP  |</a> 
                 <a  className="nav-link text-light" href="https://store.mi.com/in/site/login"> {cartIcon} CART (0)</a>
      </form>
      {/* <div>
             <a className="nav-link"  href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
                 <a  className="nav-link" href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span>|</span>
                 <a  className="nav-link" href="https://store.mi.com/in/site/login"> {cartIcon} CART (0)</a>
               
             </div> */}
    </div>
    </div>
</nav>
  )
}

export default Header
