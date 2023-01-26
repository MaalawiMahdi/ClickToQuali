import ImportForm from './importForm'
import NavMenu from './NavMenu'
import SideMenu from './SideMenu'
import './style.css'

export default function Dashboard(){
    return(
        <>
<header>
    <SideMenu/>
    <NavMenu/>
</header>

<main style={{"marginTop": "58px"}}>
  <div className="container pt-4">
    <ImportForm/>
  </div>
</main>
        </>
    )
}