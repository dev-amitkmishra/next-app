import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import ImgMediaCard from './card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root}>
        <Grid item xs={12}>
            <Grid container justify="space-evenly">
                {[0, 1].map((value) => (
                <Grid key={value} item style={{margin: value === 1 ? '60px 0 60px 0': '0px'}}>
                    <ImgMediaCard />
                </Grid>
                ))}
            </Grid>
        <Grid container justify="space-evenly">
            {[0, 1].map((value) => (
            <Grid key={value} item style={{margin: value === 1 ? '60px 0 60px 0': '0px'}}>
                <ImgMediaCard />
            </Grid>
            ))}
        </Grid>
        </Grid>
    </Grid>
    // <Grid container className={classes.root} spacing={40}>
    //   <Grid item xs={12}>
    //     <Grid container justify="center" spacing={10}>
    //       {[0, 1].map((value) => (
    //         <Grid key={value} item>
    //           <ImgMediaCard />
    //         </Grid>
    //       ))}
    //     </Grid>
    //     <Grid container justify="center" spacing={10}>
    //       {[0, 1].map((value) => (
    //         <Grid key={value} item>
    //           <ImgMediaCard />
    //         </Grid>
    //       ))}
    //     </Grid>
    //   </Grid>
    // </Grid>
  );
}
