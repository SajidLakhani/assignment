import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  options:{
      margin:'5px 15px',
      fontSize:'14px',
      cursor:'pointer',
      transition: 'transform .2s', 
      "&:hover": {
         
          cursor:'pointer',
          transform: 'scale(1.2)',
     },
  },
  heading: {
   margin:'0'
  },

  Main:{
      boxShadow:'unset',
     padding:'10px 15px',
     fontSize:'14px',
     fontFamily:'Poppins',
      backgroundColor:'transparent',
      color:'white',
      borderRadius:'none', 
      "&.MuiAccordion-root.Mui-expanded":{
          background:'#000000',
          color:'white'
      }
  },
  icon:{
      fill:'white'
  },
  list:{
    listStyleType: 'none',
    margin:'0',
    padding:'0',
    width:'100%'
  }
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className = {classes.Main}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className = {classes.icon}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 className={classes.heading}>Account</h3>
        </AccordionSummary>
        
          <ul className = {classes.list}>
              <li className = {classes.options} style ={{color:'#06EFF2'}}>Create Account</li>
              <li className = {classes.options}>Manage Account</li>
              <li className = {classes.options}>Manage Shifts </li>
          </ul>
     
      </Accordion>
      <Accordion className = {classes.Main}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className = {classes.icon}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 className={classes.heading}>Notifications</h3>
        </AccordionSummary>
        
          <ul className = {classes.list}>
              <li className = {classes.options} style ={{color:'#06EFF2'}}>By Clients</li>
              <li className = {classes.options}>By Emplyees</li>
          </ul>
     
      </Accordion>
      <Accordion className = {classes.Main}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className = {classes.icon}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 className={classes.heading}>Activities</h3>
        </AccordionSummary>
        
          <ul className = {classes.list}>
              <li className = {classes.options} style ={{color:'#06EFF2'}}>BF / Dinner / Lunch</li>
              <li className = {classes.options}>Medicine</li>
          </ul>
     
      </Accordion>
      <Accordion className = {classes.Main}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className = {classes.icon}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 className={classes.heading}>Patients</h3>
        </AccordionSummary>
        
          <ul className = {classes.list}>
              <li className = {classes.options} style ={{color:'#06EFF2'}}>Register Patient</li>
              <li className = {classes.options}>Manage Patient</li>
              <li className = {classes.options}>Feedbacks </li>
              <li className = {classes.options}>Schedule </li>
          </ul>
     
      </Accordion>
      <Accordion className = {classes.Main}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className = {classes.icon}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 className={classes.heading}>Reports</h3>
        </AccordionSummary>
        
          <ul className = {classes.list}>
              <li className = {classes.options} style ={{color:'#06EFF2'}}>Daily Reports</li>
              <li className = {classes.options}>Monthly Reports</li>
          </ul>
     
      </Accordion>
      <Accordion className = {classes.Main}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className = {classes.icon}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 className={classes.heading}>Payment Process</h3>
        </AccordionSummary>
        
          <ul className = {classes.list}>
              <li className = {classes.options} style ={{color:'#06EFF2'}}>Schedule Salaries</li>
              <li className = {classes.options}>Bills / Receipts</li>
          </ul>
     
      </Accordion>
     
    </div>
  );
}