import image from './macd.png';
import './sidebar.css'

/*----Sidebard Component----* */
function Sidebar(){

    return(

    <div className='side-bar'>

        <div className="top-menu">

            <div className="icon-menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>

            <div className="logo-text">
                <p>Smartwage</p>
            </div>

        </div>

        <div className="bottom-menu">

            <div className="line-spacer"></div>

            <div className="items-full-wrapper">

                <div className="item-logo">
                    <img src={image} alt="MacD" />
                </div>

                <div className="item-text">
                    <p className="title-shop">Mike Metelerkamp</p>
                    <p className="text">McDonalds</p>
                </div>

                <div className="item-icon">

                    <div className="div-last">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="6 15 12 9 18 15" />
                        </svg> 
                    </div>

                    <div className="div">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </div>

                </div>

            </div>
            
        </div>
    
    </div>
    )
}

export default Sidebar;