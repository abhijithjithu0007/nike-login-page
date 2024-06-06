

const NavBar = ()=>{
    return (
        <div className="nav-bar">
          <nav className="container">
            <div>
              <img className='logo' src='https://logohistory.net/wp-content/uploads/2023/02/Nike-Logo.png' alt='logo'></img>
            </div>
            
              <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
                
              </ul>
             <button className='button'>Login</button>
            
          </nav>
        </div>
      );
}

export default NavBar