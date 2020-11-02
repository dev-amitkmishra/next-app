import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/Protip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
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
            <Box id="btmn">
              sdjhfvdhjs
            </Box>
        </Container>
  )
}
