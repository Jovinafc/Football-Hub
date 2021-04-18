import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Scorers from '../Scorers/Scorers';
import Matches from '../Matches/Matches';
import Teams from '../Teams/Teams';
import Welcome from '../Welcome/Welcome';
import Standings from '../Standings/Standings';
import './Main.css'


const Main = ({match}) => {
    return (
        <div className="mainContainer">
          <div className="leftContainer">
            <p><Link to={`/competion/${match.params.league_id}/teams`}>Teams</Link></p>
            <p><Link to={`/competion/${match.params.league_id}/standings`}>Standings</Link></p>
            <p><Link to={`/competion/${match.params.league_id}/matches`}>Matches</Link></p>
            <p><Link to={`/competion/${match.params.league_id}/scorers`}>Scorers</Link></p>
          </div>
          <div className="rightContainer">
              <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route exact path="/competion/:league_id/" component={Welcome}/>
                <Route exact path="/competion/:league_id/standings" component={Standings}/>
                <Route exact path="/competion/:league_id/teams" component={Teams}/>
                <Route exact path="/competion/:league_id/matches" component={Matches}/>
                <Route exact path="/competion/:league_id/scorers" component={Scorers}/>
              </Switch>
          </div>
        </div>
    )
}

export default Main;