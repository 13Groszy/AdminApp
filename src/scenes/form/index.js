import {Box, Button, TextField} from '@mui/material'
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';

const initialValues = {
    firstName: '',
    secondName: '',
    email: '',
    contact: '',
    address1: '',
    postcode: '',
};

const phoneRegExp = /^(\+44[-\s]?)?[0]?(91)?[789]\d{9}$/;

const userSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    secondName: yup.string().required('Second Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    contact: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Contact is required'),
    address1: yup.string().required('Address is required'),
    postcode: yup.string(),
});



const Form = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)');
    const handleFormSubmit = (values) => {
        console.log(values)
    }
    return (
        <Box m='20px'>
            <Header title='CREATE USER' subtitle='Create a New User Profile!'></Header>
            <Formik 
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}>
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    }) => (
                    <form onSubmit={handleSubmit}>
                        <Box display='grid' gap='30px' gridTemplateColumns='repeat(4, minmax(0, 1fr))' 
                        sx={{
                            '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' }
                        }} >
                            <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='First Name'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstName}
                            name='firstName'
                            error={!!touched.firstName && !!errors.firstName}
                            helperText={touched.firstName && errors.firstName}
                            sx={{ gridColumn: 'span 2'}} 
                            />
                            <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Last Name'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.secondName}
                            name='secondName'
                            error={!!touched.secondName && !!errors.secondName}
                            helperText={touched.secondName && errors.secondName}
                            sx={{ gridColumn: 'span 2'}} 
                            />
                            <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Email'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name='email'
                            error={!!touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                            sx={{ gridColumn: 'span 4'}} 
                            />
                            <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Contact Number'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.contact}
                            name='contact'
                            error={!!touched.contact && !!errors.contact}
                            helperText={touched.contact && errors.contact}
                            sx={{ gridColumn: 'span 4'}} 
                            />
                            <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Address 1'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address1}
                            name='address1'
                            error={!!touched.address1 && !!errors.address1}
                            helperText={touched.address1 && errors.address1}
                            sx={{ gridColumn: 'span 4'}} 
                            />
                            <TextField
                            fullWidth
                            variant='filled'
                            type='text'
                            label='Post Code'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.postcode}
                            name='postcode'
                            error={!!touched.postcode && !!errors.postcode}
                            helperText={touched.postcode && errors.postcode}
                            sx={{ gridColumn: 'span 4'}} 
                            />
                        </Box>
                        <Box display='flex' justifyContent='end' mt='20px'>
                            <Button variant='contained' color='secondary' type='submit'>Create New User </Button>
                        </Box>
                    </form>
                )}

            </Formik>
        </Box>
        
     );
}
 
export default Form;