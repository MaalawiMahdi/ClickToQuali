export default function SideMenu(){
    return(<nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
        <a
          href="#"
          className="list-group-item list-group-item-action py-2 ripple active"
          aria-current="true"
        >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action py-2 ripple "
          aria-current="true"
        >
          <i className="fas fa-user-alt fa-fw me-3"></i><span>log out</span>
        </a>
       
      </div>
    </div>
  </nav>
  )
}