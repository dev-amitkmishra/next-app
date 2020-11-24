import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ImgMediaCard from './card';
import brand from '../public/branding.svg';
import development from '../public/development.svg';
import marketing from '../public/marketing.svg';
import MediaControlCard from './mediaCard';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  topText: {
   position: 'relative',
   float: 'left',
   width: '100%',
   margin: 0,
   padding: 0,
   color: '#fff',
}, bottomText: {
   float:'left'
}
}));

const brandMessage = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;
const developmentMessage = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;
const marketingMessage = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function AutoGridNoWrap() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{backgroundColor: '#242424', color: '#fff', marginBottom: '200px'}}>
        {/* <div className="row"> */}
            <Grid container wrap="nowrap" style={{paddingBottom: '150px', paddingTop: '10%'}}>
                <Grid item xs={6} style={{padding:'7% 0 0 15%'}}>
                    <div className={classes.topText}>
                        <Typography variant="h4" style={{paddingLeft: '110px'}}>Branding</Typography>
                    </div>
                    <div className={classes.bottomText}>
                        <Typography style={{transform:'translate(23%, 0%)'}}>{brandMessage}</Typography>
                        <Button variant="contained" color="primary"  style={{background: 'rgb(227 51 52)', color: '#fff', borderRadius: '20px', textTransform: 'capitalize', marginLeft: '110px'}}>
                            Know more
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <img src={ brand } alt="logo" width="500px" />
                </Grid>
            </Grid>
            <Grid container wrap="nowrap" style={{paddingBottom: '150px', paddingTop: '10%'}}>
                <Grid item xs={6}style={{padding:'7% 0 0 15%'}}>
                    <div className={classes.topText}>
                        <Typography variant="h4" style={{paddingLeft: '110px'}}>Development</Typography>
                    </div>
                    <div className={classes.bottomText}>
                        <Typography style={{transform:'translate(23%, 0%)'}}>{developmentMessage}</Typography>
                        <Button variant="contained" color="primary"  style={{background: 'rgb(227 51 52)', color: '#fff', borderRadius: '20px', textTransform: 'capitalize', marginLeft: '110px'}}>
                            Know more
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <img src={ development } alt="logo" width="500px" />
                </Grid>
            </Grid>
            <Grid container wrap="nowrap" style={{paddingBottom: '150px', paddingTop: '10%'}}>
                <Grid item xs={6}style={{padding:'7% 0 0 15%'}}>
                    <div className={classes.topText}>
                        <Typography variant="h4" style={{paddingLeft: '110px'}}>Marketing</Typography>
                    </div>
                    <div className={classes.bottomText}>
                        <Typography style={{transform:'translate(23%, 0%)'}}>{marketingMessage}</Typography>
                        <Button variant="contained" color="primary"  style={{background: 'rgb(227 51 52)', color: '#fff', borderRadius: '20px', textTransform: 'capitalize', marginLeft: '110px'}}>
                            Know more
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <img src={ marketing } alt="logo" width="500px" />
                </Grid>
            </Grid>
    </div>
  );
}
