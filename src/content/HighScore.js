import React from 'react'
import {Header, Table} from 'semantic-ui-react'

function DataHighScore(props){
	
	let data = props.data.map((item, key) => 
		<Table.Row>
	      	<Table.Cell>{key + 1}</Table.Cell>
	        <Table.Cell>{item.name}</Table.Cell>
	        <Table.Cell>{item.score}</Table.Cell>
	        <Table.Cell>{item.time}</Table.Cell>
	      </Table.Row>
	)

	return data
	
}

class HighScore extends React.Component{
	constructor(){
		super()

	}

	render(){
		return(
			<div style={{textAlign: "center"}}>
		    	<Header as="h3">HighScore</Header>
		    	<Table fixed>
				    <Table.Header>
				      <Table.Row>
				        <Table.HeaderCell>#</Table.HeaderCell>
				        <Table.HeaderCell>Name</Table.HeaderCell>
				        <Table.HeaderCell>Score</Table.HeaderCell>
				        <Table.HeaderCell>Time</Table.HeaderCell>
				      </Table.Row>
				    </Table.Header>

				    <Table.Body>
				      
		    			<DataHighScore data={this.props.data} />
				    </Table.Body>
				  </Table>
				    
		    </div>
		)
	}
}

export default HighScore