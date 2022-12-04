import { Typography, Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns=[
        {
            field: 'id',
            headerName: 'ID',
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            cellClassName: 'name-column--cell'
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            headerAlign: 'left',
            align: 'left',
            flex:1,
        },
        {
            field: 'phone',
            headerName: 'Phone',
            flex: 1,
        },
        {
            field: 'access',
            headerName: 'Access level',
            flex: 1,
            renderCell: ({row: {access}}) => {
                return(
                    <Box width='60%' m='0 auto' p='5px' display='flex' justifyContent='center' backgroundColor={
                        access === 'admin' ? colors.redAccent[600] : access === 'user' ? colors.greenAccent[600] : colors.blueAccent[600]
                    } borderRadius='4px'>
                        {access === 'admin' ? <AdminPanelSettingsOutlinedIcon /> : access === 'User' ? <LockOpenOutlinedIcon /> : <SecurityOutlinedIcon />}
                        <Typography color={colors.grey[100]} sx={{ml: '5px'}}>
                            {access}
                        </Typography>
                    </Box>
                )
            },
        }
    ]

    return ( 
        <Box m='20px'>
            <Header title='TEAM' subtitle='Welcome to the Team Members'></Header>
            <Box m='40px 0 0 0' height='75vh' sx={{
                "& .MuiDataGrid-root": {
                    border: 'none'
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: 'none'
                },
                "& .MuiDataGrid--cell": {
                    color: colors.greenAccent[300]
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: 'none'
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400]
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: 'none',
                    backgroundColor: colors.blueAccent[700]
                }
            }}>
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
     );
}
 
export default Team;