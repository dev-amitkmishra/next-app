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
    <>
    <Container style={{backgroundImage: "url(" + `${require("../public/banner_illust@2x.png")}` + ")" }}>
            <Box my={2}>
            {[...new Array(120)]
                .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                )
                .join('\n')}
            </Box>
        </Container>
        <footer className={styles.footer} id="btmn">
            <form className={classes.root} noValidate autoComplete="off" style={{color: '#fff', width: '50%'}}>
              <Typography variant="h5">
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
      </>
  )
}
