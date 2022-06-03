import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    appBody:{
      margin: '5vh 30vh'
    },
    headerLine: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      width: '100wv',
      minHeight: '75px'
    },
    searchComponent: {
      display: 'flex',
      flexDirection: 'row',
      minHeight: '100px',
      alignItems: 'center',
      justifyContent: 'flex-start',
      maxWidth: '45vw',
    },
    textInputLabel: {
      marginRight: '30px',
    },
    textInput: {
      maxWidth: '450px',
    },
    periodSelectLabel: {
      margin: '0 30px',
    },
    periodSelect: {
      maxWidth: '150px',
      outline: 'none', 
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      }
    },
    middleContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    middleLeft: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0.6',
    },
    middleRight: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0.4',
    },
    similarRequestList: {
      maxWidth: '650px',  
    },
    searchRegions: {
      display: 'flex', 
      maxWidth: '650px', 
      flexDirection: 'column', 
      marginTop: '50px'
    },
    searchRegionsHeader: {
      display:'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-between'
    },
  });

export default useStyles;