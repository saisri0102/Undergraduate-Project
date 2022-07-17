// require for JSX -> React.createElement() to work
import React from 'react'
import {Link} from 'react-router-dom'

function Home(){
    return (
        <main >
            <div class="jumbotron ">
                    <h1 class="display-3">Workshops App</h1>
                    <hr class="my-2" />
                    <p class="lead">View details and workshops around you. and vote on sessions. you can checkout workshops <Link to="/workshops">here</Link> </p>
            </div>
        </main>
    )
}

export default Home