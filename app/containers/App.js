// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import AppBar from 'material-ui/AppBar';


const recentsIcon = <FontIcon className="material-icons">desktop</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">manage</FontIcon>;
const nearbyIcon = <FontIcon className="material-icons">contact</FontIcon>;

export default class App extends Component {
  props: {
    children: Children
  };

  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({ selectedIndex: index });

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <div className="main-content">
            {this.props.children}
          </div>
          <footer className="footer">
            <Paper>
              <BottomNavigation selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                  label="Pulpit"
                  icon={recentsIcon}
                  onClick={() => this.select(0)}
                />
                <BottomNavigationItem
                  label="Zarządzaj"
                  icon={favoritesIcon}
                  onClick={() => this.select(1)}
                />
                <BottomNavigationItem
                  label="Kontakt"
                  icon={nearbyIcon}
                  onClick={() => this.select(2)}
                />
              </BottomNavigation>
            </Paper>
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}
