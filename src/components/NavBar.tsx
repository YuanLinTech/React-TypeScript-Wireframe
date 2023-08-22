import './NavBar.css';

export default function NavBar(){
    return(
        <div>
            <ul>
                <li><img src={require('../images/company_logo.png')}  alt="Company logo"/></li>
                <li><a href="#inbox" id="inbox">Inbox</a></li>
                <li><a href="#files">Files</a></li>
            </ul>
        </div>
    );
}