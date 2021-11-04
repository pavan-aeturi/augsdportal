import React,{useState} from 'react';
import { Home } from './home';
import {Header} from "./Header"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { SignIn } from './update';
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export function Login(props) {
  const classes = useStyles();
  //const history = useHistory()

  let email="", password="";
  
  const onEmailChange=(event)=>{
      email=event.target.value;
  }
  const onPassWordChange=(event)=>{
    password=event.target.value;    
  }
  const [login,setLogin]=useState(false)
  const [err,setError]=useState("")
  if(!login){
      sessionStorage.removeItem("JWT");
  }
  return (
        
    !login?
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={onEmailChange}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={onPassWordChange}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {err===""?null:<div color="blue">{err}</div>}
              <Button
            fullWidth
            onClick={() => {
                console.log("hello")
                SignIn(email, password,setError,setLogin)
              }}            
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
    :
    <>
    <Header/>
    <div className="mainbody">
    <Home/>
    </div>
    </>
  );
}

