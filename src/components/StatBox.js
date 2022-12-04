import {Box, Typography, useTheme} from '@mui/material';
import { tokens } from '../theme';
import ProgressCircle from './ProgressCircle';


const StatBox = ({title, subtitle, icon, progress, increase}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return ( 
        <Box width='100%' m='0 30px'>
            <Box display='flex' justifyContent='space-evenly' alignItems='center' mb='20px'>
                <Box>
                    {icon}
                    <Typography variant='h4' fontWeight='bold' color={colors.grey[100]}>{title}</Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={progress}></ProgressCircle>
                </Box>
            </Box>
                <Box display='flex' justifyContent='space-evenly'>
                    <Typography variant='h5' color={colors.greenAccent[500]}>{subtitle}</Typography>
                    <Typography variant='h5' fontStyle='italic' color={colors.greenAccent[600]}>{increase}</Typography>
                </Box>
        </Box>
     );
}
 
export default StatBox;