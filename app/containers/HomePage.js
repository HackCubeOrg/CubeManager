// @flow
import React, { Component } from 'react';

import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

import Paper from 'material-ui/Paper';

import Home from '../components/Home';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }
  render() {
    return (
      <div className="desktop-wrapper">
        <Paper className="desktop-panel desktop-left" zDepth={1}>
          <Subheader>Status serwera</Subheader>
          <div className="serwer-status">
            <TextField disabled={true} hintText="Połączy" floatingLabelText="Status" floatingLabelFixed={true} />
            <TextField disabled={true} hintText="192.168.0.2" floatingLabelText="Serwer adres" floatingLabelFixed={true} />
          </div>
          <Divider />
          <List>
            <Subheader>Podłączone kostki</Subheader>
            <ListItem primaryText="/switch/kuchnia" leftIcon={<ContentInbox />} />
            <ListItem primaryText="/switch/sypialnia" leftIcon={<ContentInbox />} />
            <ListItem primaryText="/switch/telewizor" leftIcon={<ContentInbox />} />
            <ListItem primaryText="/temp/balkon" leftIcon={<ContentInbox />} />
            <ListItem primaryText="/temp/ogrod" leftIcon={<ContentInbox />} />
            <ListItem primaryText="/temp/salon" leftIcon={<ContentInbox />} />
            <ListItem primaryText="/display/korytarz" leftIcon={<ContentInbox />} />
          </List>
        </Paper>
        <Paper className="desktop-panel desktop-right" zDepth={1}>
          <Toolbar style={{ 'justify-content': 'flex-end'  }}>
            <ToolbarGroup>
              <RaisedButton label="Dodaj" primary={true} />
              <IconMenu
                iconButtonElement={
                  <IconButton touch={true}>
                    <NavigationExpandMoreIcon />
                  </IconButton>
                }
              >
                <MenuItem primaryText="Download" />
                <MenuItem primaryText="More Info" />
              </IconMenu>
            </ToolbarGroup>
          </Toolbar>
          <div className="create-form">
            <TextField disabled={true} hintText="Display" floatingLabelText="Typ urządzenia" floatingLabelFixed={true} />
            <TextField defaultValue="toDoGarage"  floatingLabelText="Nazwa urządzenia" floatingLabelFixed={true} />
            <TextField disabled={true} hintText="/display/todogarage" floatingLabelText="Adres urządzenia" floatingLabelFixed={true} />
          </div>
        </Paper>
      </div>
    );
  }
}
