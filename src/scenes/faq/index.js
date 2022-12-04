import {Box, useTheme, Typography} from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {tokens} from '../../theme';



const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return ( 
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Questions' />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={ <ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque doloribus unde corrupti facilis tempore, suscipit autem numquam inventore ad?
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={ <ExpandMoreIcon />} >
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Lorem ipsum dolor sit amet.
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque doloribus unde corrupti facilis tempore, suscipit autem numquam inventore ad?
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={ <ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Lorem ipsum dolor sit amet.
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque doloribus unde corrupti facilis tempore, suscipit autem numquam inventore ad?
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={ <ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Lorem ipsum dolor sit.
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque doloribus unde corrupti facilis tempore, suscipit autem numquam inventore ad?
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={ <ExpandMoreIcon />} >
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Lorem ipsum dolor sit amet consectetur.
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque doloribus unde corrupti facilis tempore, suscipit autem numquam inventore ad?
                </AccordionDetails>
            </Accordion>
        </Box>
     );
}
 
export default FAQ;