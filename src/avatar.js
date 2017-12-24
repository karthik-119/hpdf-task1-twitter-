import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    marginLeft: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

function Avatar(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar
        alt="Karthik"
        src="https://lh3.googleusercontent.com/-uuiMcQcUYq4/WQiz80CaI2I/AAAAAAAAEuk/iCwJM7DOxSwJFejEvEBad6TKdAElwSfDQCEwYBhgL/w140-h139-p/DSC_0972.JPG"
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
  );
}

Avatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Avatar);

