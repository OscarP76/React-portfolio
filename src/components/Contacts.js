function Contacts({setPageState}) {
    return(
        <footer class="page-footer blue-grey lighten-1">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <i class="medium material-icons">description</i>
                        <h5 class="green-text text-darken-4">Contact Info</h5>
                        <p class="green-text text-lighten-4" id="contact_me">Contact Me:</p>
                        <ul>
                            <li>webdevop76@gmail.com</li>
                        </ul>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <i class="medium material-icons">link</i>
                        <h5 class="green-text text-darken-4">Links</h5>
                        <ul>
                            <li><a class="green-text text-lighten-4" href="mailto:bigop76.op@gmail.com">Email</a></li>
                            <li><a class="green-text text-lighten-4" href="https://www.linkedin.com/in/oscar-plumridge/">Linkedin</a></li>
                            <li><a class="green-text text-lighten-4" href="https://github.com/OscarP76">Github</a></li>
                            <li><a class="green-text text-lighten-4" href="https://drive.google.com/file/d/1SCMn1ub9rBdNKjiE5YhIRRjnfVBXVI4D/view?usp=sharing">Resume</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">   
                <div class="container green-text text-darken-4">
                    © 2021 webdevOP76
                </div>
            </div>
        </footer>
    )
}

export default Contacts;