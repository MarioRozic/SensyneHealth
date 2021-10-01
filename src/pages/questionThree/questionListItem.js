import React, { Fragment } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles(() => ({
  header: {
    fontWeight: "bold",
    display: "inline",
    marginRight: 4,
  },
  label: {
    display: "inline",
  },
}));

const QuestionListItem = (props) => {
  const {
    item: { icon, name, species, id, description },
    divider,
  } = props;
  const Icon = icon;
  const classes = useStyles();
  return (
    <Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <React.Fragment>
            <Typography>{`${name}: ${species ? species : "Other"}`}</Typography>
            <div>
              <Typography variant="subtitle2" className={classes.header}>
                Description:
              </Typography>
              <Typography variant="body2" className={classes.label}>
                {description}
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle2" className={classes.header}>
                Guid:
              </Typography>
              <Typography variant="body2" className={classes.label}>
                {id ? id : "ERROR "}
              </Typography>
            </div>
          </React.Fragment>
        </ListItemText>
      </ListItem>
      {divider && <Divider variant="middle" />}
    </Fragment>
  );
};

export default QuestionListItem;
