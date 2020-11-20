import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import GoalList from '../components/GoalList'




const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
}));

const GoalContainer = ({ 
  openEditorPane, 
  filterUserGoals,
  formatDateTime,
  completeGoal,
  archiveGoal
}) => {

  const classes = useStyles();
  const [sortQuery, setSortQuery] = React.useState(false)

  const compareGoalCategory = (a, b) => {
    let stringA = a.attributes.category
    let stringB = b.attributes.category
    if (stringA < stringB) {
      return -1;
    }
    if (stringA > stringB) {
      return 1;
    }
  else {
    return 0;
  }
  }

  const sortGoalsByCategory = () => {
    return filterUserGoals().sort(compareGoalCategory)
  }

  const handleSortQuery = () => {
    setSortQuery(!sortQuery)
  }

  const renderUserGoals = () => {
    return sortQuery ? sortGoalsByCategory() : filterUserGoals()
  }

  return (
    <div>
      <div className={classes.root}>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={() => openEditorPane("goal", "new")}>New Goal</Button>
          <Button onClick={() => openEditorPane("goal", "edit")}>Edit Goal</Button>
          <Button onClick={() => openEditorPane("goal", "delete")}>Delete Goal</Button>
          {
            sortQuery ? 
            <Button 
              onClick={handleSortQuery}
              color="secondary"
              >
               <strong>
               Sort by Category A-Z
               </strong>
            </Button>
            :
            <Button onClick={handleSortQuery}>Sort by Category A-Z</Button>
          }
        </ButtonGroup>
        
        <GoalList 
         renderUserGoals={renderUserGoals}
         sortQuery={sortQuery}
         formatDateTime={formatDateTime}
         completeGoal={completeGoal}
         archiveGoal={archiveGoal}
         /> 
         
      </div>
    </div>
  );
};


export default GoalContainer
