import * as Yup from 'yup';

export const EditSchema = Yup.object().shape({
    fullname: Yup.string().min(4, 'Minimal 4 character'),
    phonenumber: Yup.number().min(9).required('Minimal 9 characther with number')
})

export const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address format').required('Required'),
    password: Yup.string().min(8, 'password must 8 character').required('Required')
  })

export const TopupSchema = Yup.object().shape({
    balance: Yup.number().min(10000, 'Minnimal input Rp.10.000').required('Required')
})