import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/Protip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
// import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles';
import wizwork from '../public/WizWork.svg';
import footerdivider from '../public/footerdivider.png';
import ImgMediaCard from '../components/card';
import { Grid } from '@material-ui/core';
import SpacingGrid from '../components/grid';
import TitlebarGridList from '../components/gridlist';
import AutoGridNoWrap from '../components/branding';
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';
import CustomParallax from '../components/parallax';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={styles.container}>
        <Box my={20} style={{textAlign: 'center'}}>
          <Typography variant="h3">
            A creative studio that <span style={{color: 'orange'}}>strategizes, designs</span>
          </Typography>
          <Typography variant="h3">
            & <span style={{color: 'red'}}>develops</span> brands for a digital world
          </Typography>
        </Box>
        <AutoGridNoWrap />
        <SpacingGrid />
        {/* <Box my={20} style={{width: '100%'}}>
          <Typography variant="h5">
            A creative studio that <span style={{color: 'orange'}}>strategizes, designs</span>
          </Typography>
        </Box>
        
        <Box my={20} style={{width: '100%', paddingLeft: '150px'}}>
          <Typography variant="h4">
            dummy data
          </Typography>
        </Box> */}
      <footer className={styles.footer} id="btmn">
          <form className={classes.root} noValidate autoComplete="off" style={{color: '#fff', width: '50%'}}>
            <Typography variant="h3">
              Lets talk
            </Typography>
            <Typography variant="h6">
              example.n@wizwork.in
            </Typography>
            <Typography variant="h6">
              +919886711727
            </Typography>
          </form>
          <form className={classes.root} noValidate style={{color: '#fff', width: '50%', textAlign: 'center'}}>
            <div>
              <img src={ wizwork } alt="logo" />
            </div>
            <div>
              <a href="https://www.facebook.com/" target="_blank" style={{display: 'inline-block'}}>fb</a>&nbsp;
              <a href="https://www.linkedin.com/" target="_blank" style={{display: 'inline-block'}}>in</a>
            </div>
          </form>
          {/* <form className={classes.root} noValidate style={{color: '#fff', width: '50%', textAlign: 'center'}}>
              <img src={ footerdivider } alt="logo" />
          </form> */}
      </footer>
    </div>
  )
}
