import { useState } from 'react'
import { Box, TextField, MenuItem, List, ListItem, ListItemText, Divider, Button, Skeleton } from '@mui/material'
import { useStyles } from './App.style'
import axios from 'axios';

function App() {

  const classes = useStyles();
  const [inputText, setInputText] = useState('');
  const [period, setPeriod] = useState('');
  const [innerQueries, setInnerQueries] = useState();
  const [relatedQueries, setRelatedQueries] = useState();
  const [searchRegions, setSearchRegions] = useState();
  const [loading, setLoading] = useState(true);

  const handleSubmit = event => {
    setLoading(true)
    event.preventDefault();
    let searchData = {
      query: inputText,
      timeRange: period,
    }
    axios.post('/get/analytics', searchData)
      .then(res=>{
        console.log(res);
        console.log(res.data);
        setInnerQueries(res.data.innerQueries)
        setRelatedQueries(res.data.relatedQueries)
        setSearchRegions(res.data.searchRegions)
        setLoading(false)
      })
  }

  const SkeletonList = () => {

    return (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    )
  }

  return (
    <div>
      <header className="App-header">
        <Box className={classes.headerLine} />
      </header>
      <Box className={classes.appBody}>
        <Box className={classes.searchComponent} component="form" onSubmit={handleSubmit}>
          <h1 className={classes.textInputLabel}>Запрос</h1>
          <TextField 
            className={classes.textInput} 
            fullWidth 
            variant="filled"
            onChange={(e) => setInputText(e.target.value)}
            />
          <h3 className={classes.periodSelectLabel}>Период</h3>
          <TextField 
            variant="outlined"          
            className={classes.periodSelect} 
            select 
            defaultValue="last4" 
            fullWidth 
            onChange={(e) => setPeriod(e.target.value)}
            >
              <MenuItem key="1" value="last1">1 день</MenuItem>
              <MenuItem key="2" value="last4">4 дня</MenuItem>
              <MenuItem key="3" value="last30">30 дней</MenuItem>
          </TextField>
          <Button
            label="Найти"
            type="submit"
          >
            Найти
          </Button>
        </Box>
        <Box className={classes.middleContainer}>
          <Box className={classes.middleLeft}>
            <h2>Похожие запросы</h2>
            <List className={classes.similarRequestList}>
              {loading? SkeletonList()
            : 
            innerQueries.map((value, index) => (
              <>
              <ListItem
                key={index}
                disableGutters
              >
                <ListItemText primary={`${index + 1}  ${value.query}`} />
              </ListItem>
              <Divider />
            </>
            ))
            }
            </List>
          </Box>
          <Box className={classes.middleRight}>
            <h2>Смежные запросы</h2>
            <List>
              {loading? SkeletonList()
              :
              relatedQueries?.map((value, index) => (
                <>
                <ListItem
                  key={index}
                  disableGutters
                >
                  <ListItemText primary={`${index + 1}  ${value.query}`} />
                </ListItem>
                <Divider />
              </>
              ))}
            </List>
          </Box>
        </Box>
        <Box className={classes.searchRegions}>
          <h2>Регионы поиска </h2>
          <div className={classes.searchRegionsHeader}>
            <h5>Регионы</h5>
            <h5>Кол-во запросов</h5>
          </div>
          <List>  
              {loading? SkeletonList()
              :
              searchRegions?.map((value, index) => (
                <>
                <ListItem
                  key={index}
                  disableGutters
                  secondaryAction={
                    <div>{value.order}</div>
                  }
                >
                  <ListItemText primary={`${index + 1}  ${value.region}`} />
                </ListItem>
                <Divider />
              </>
              ))}
            </List>
        </Box>
      </Box>
    </div>
  );
}

export default App;
