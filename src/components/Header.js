
function Header({setPageState}) {
    return (
        <div className="Header">
            <nav>
                <div class="nav-wrapper blue-grey darken-2">
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="#profile_image" class="green-text text-lighten-3" onClick={() => {setPageState('Profile')}}>Profile</a></li>
                        <li><a href="#Projects" class="green-text text-lighten-3" onClick={() => {setPageState('Projects')}}>Projects</a></li>
                        <li><a href="#contact_me" class="green-text text-lighten-3" onClick={() => {setPageState('Contacts')}}>Contact Me</a></li>
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
