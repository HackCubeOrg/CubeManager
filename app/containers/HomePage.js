// @flow
import React, { Component } from 'react';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

import Paper from 'material-ui/Paper';

import Home from '../components/Home';

export default class HomePage extends Component {
  render() {
    return (
      <div className="desktop-wrapper">
        <Paper className="desktop-panel desktop-left" zDepth={1}>
          dasd
        </Paper>
        <Paper className="desktop-panel desktop-right" zDepth={1}>
          adsd
        </Paper>
      </div>
    );
  }
}
