
function Header({setPageState}) {
    return (
        <div className="Header">
            <nav>
                <div class="nav-wrapper blue-grey darken-2">
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="#Projects" class="green-text text-lighten-3" onClick={() => {setPageState('Projects')}}>Portfolio</a></li>
                        <li><a href="#Profile" class="green-text text-lighten-3" onClick={() => {setPageState('Profile')}}>About Me</a></li>
                        <li><a href="#Contacts" class="green-text text-lighten-3" onClick={() => {setPageState('Contacts')}}>Contact</a></li>
                        <li><a href="/assets/NewOPResume21-profile.pdf">Resume</a></li>
                    </ul>
                </div>
            </nav>
            <section>
                <h4 class="green-text text-darken-3 text-align center">Oscar Plumridge</h4>
            </section>
        </div>
    );
}

export default Header;
