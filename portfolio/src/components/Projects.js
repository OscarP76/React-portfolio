function Projects() {

    return(
        <div class="row" id="Projects">
        <div class="col s6">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="./assets/dashboard-grab.png">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">Weather Dashboard<i
                            class="material-icons right">more_vert</i></span>
                    <p><a href="https://oscarp76.github.io/op-week6-homework/" class="green-text text-darken-3">Weather
                            Dashboard Link</a></p>
                            <p><a href="https://github.com/OscarP76/op-week6-homework" class="green-text text-darken-3">Github Repo Link</a></p>       
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Weather Dashboard<i
                            class="material-icons right">close</i></span>
                    <p>This weather dashboard was created using HTML, CSS, Bootstrap, JavaScript, & JQuery. <br>
                        I created a 5 day forecast using an API key from openweathermap.org.<br>
                        The weather forecast uses logic to include the weather patterns for the present and for the next 5 days.
                        The text area input saves to local storage. </p>
                </div>
            </div>
        </div>

        <div class="col s6">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="./assets/daily-planner-grab.png">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">Daily Planner<i
                            class="material-icons right">more_vert</i></span>
                    <p><a href="https://oscarp76.github.io/daily-work-planner/" class="green-text text-darken-3">Daily
                            Planner Link</a></p>
                            <p><a href="https://github.com/OscarP76/daily-work-planner" class="green-text text-darken-3">Github Repo Link</a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Work Day Scheduler<i
                            class="material-icons right">close</i></span>
                    <p>This project was built using HTML, CSS, Bootstrap, JavaScript, & JQuery.<br>
                        The daily planner includes logic to determine past present and future with regards to the time of day. <br>
                        The text area inputs save to local storage and also deletes from local storage. </p>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
            <div class="col s8 offset-s2">
                <div class="card">
                    <div class="card-image">
                        <img
                            src="https://user-images.githubusercontent.com/89271807/139503807-58fab0d3-4d74-4965-9b46-890ed0e9d4bc.png">
                        <span class="card-title green-text text-lighten-3">Giphy Meets Movies</span>
                    </div>
                    <div class="card-content">
                        <p class="flow-text text-align center">This is the first team project that I got to work on. This is a webpage that my team and I
                            created for movie lovers. <br>
                            We call the site Giphy meets Movies. a user types in a movie of their choosing and is given
                            relevant information about <br>
                            the movie they entered. Then they are shown Gif's that accompany their chosen movie
                            selection. <br>
                            Click on the link below and enjoy!</p>
                    </div>
                    <div class="card-action">
                        <a href="https://hayvant.github.io/giphymeetsmovies/" class="green-text text-darken-3">Giphy
                            Meets Movies!</a>
                        <p><a href="https://github.com/hayvant/giphymeetsmovies" class="green-text text-darken-3">Github Repo Link</a></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col s8 offset-s2">
                <div class="card">
                    <div class="card-image">
                        <img
                            src="./assets/project2Image.png">
                        <span class="card-title green-text text-lighten-3">Joint Effort</span>
                    </div>
                    <div class="card-content">
                        <p class="flow-text text-align center">This is the second team project that I got to work on. This is a webpage that my team and I
                            created for lovers of food truck cuisine and cannabis. <br>
                            We call the site Joint Effort. <br> 
                            A user chooses their cannabis preference<br>
                            and then selects a genre of food truck
                            and are given the locations<br>
                            of the closest ones in thier area. There is also functionallity built into  <br>
                            the page to allow saving of their previous selections if they are logged in. <br>
                            Click on the link below to get started.</p>
                    </div>
                    <div class="card-action">
                        <a href="https://joint-effort-kohmm.herokuapp.com/" class="green-text text-darken-3">Joint Effort</a>
                        <p><a href="https://github.com/mteubnerfoster/joint-effort" class="green-text text-darken-3">Github Repo Link</a></p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Projects;