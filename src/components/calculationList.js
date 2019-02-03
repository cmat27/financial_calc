import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";

const styles = theme => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    maxWidth: "450px",
    margin: "auto",
    backgroundColor: '#FFF0CE',
    borderRadius: 20,
    boxShadow: '-30px 24px 36px 10px rgba(2, 2, 2, .6)',
    marginTop: '30px',
  },
  star: {
    color: "#D55534"
  },
  text: {
    fontSize: '1.1em',
    fontWeight:'bold',
  },
  listItems:{
    '&:focus': {
        backgroundColor: '#83b4b3',

      },
  }
});




function InsetList(props) {

  const { classes } = props;
  const formulas = ['Compound Interest', 'Post Tax Return', 'Inflation',
                    'Purchasing Power','Effective Annual Rate', 'Rule of 72',
                    'Compounded Annual Growth Rate (CAGR)','Loan EMI', 'Future Value of SIP',
                    'Liquidity Ratio'];
  const formulaList = formulas.map(formula => (
    <ListItem button 
        divider='true' 
        variant='inset' 
        className={classes.listItems}
        >
      <ListItemIcon>
        <StarIcon className={classes.star} />
      </ListItemIcon>
      <ListItemText disableTypography='true' className={classes.text}
    primary={formula}
  />
    </ListItem>
  ));

  return (
    <List component="nav" className={classes.root}>
      {formulaList}
    </List>
  );
}

InsetList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InsetList);
