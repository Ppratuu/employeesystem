import React from 'react'
import Graphchart from './Graphchart'
import Card from './Card'
import { Button} from 'semantic-ui-react';

const Dashboard = () => {
  return (
    <>
    <Button> <a href="/read">List</a></Button>
    <Button> <a href="/signup">LogOut</a></Button>
        <Card/>
        <Graphchart/>
    </>
   
  )
}

export default Dashboard