import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
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
            <p><NavLink activeClassName="active" to={`/competion/${match.params.league_id}/teams`}>Teams</NavLink></p>
            <p><NavLink activeClassName="active" to={`/competion/${match.params.league_id}/standings`}>Standings</NavLink></p>
            <p><NavLink activeClassName="active" to={`/competion/${match.params.league_id}/matches`}>Matches</NavLink></p>
            <p><NavLink activeClassName="active" to={`/competion/${match.params.league_id}/scorers`}>Scorers</NavLink></p>
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