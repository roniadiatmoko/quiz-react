import React from 'react'
import {Header, Icon, Image, Progress, Input, Button, Divider} from 'semantic-ui-react'

class HeaderContent extends React.Component{
	constructor(){
		super()
		this.state = {
			soal: 0,
			quiz: 0,
			percent: 0,
			time: 0,
			angka1: 0,
			angka2: 0,
			score: 0,
		}
	}

	render(){
		return(
			<div>
			    <Image
			      centered
			      size='small'
			      src='https://www.diecoding.com/wp-content/uploads/2019/05/square.diecoding.google.bgwhite.512.png'
			    />

			    <div style={{textAlign:"center"}}>
			    	<Header as='h2'>Second</Header>
			    	<Progress percent={this.state.percent} indicating />
				    <Header as='h1'>2 + 1</Header>
				    <Input action={{
					      color: 'teal',
					      labelPosition: 'right',
					      icon: 'send',
					      content: 'Check',
					    }} placeholder='Answer Here...' />

					<Header as='h3'>Score: {this.state.score}</Header>
					
					<br/><br/><br/>
					<Divider />

					<Button icon labelPosition='center'>
				      <Icon name= {this.state.quiz === 0 ? 'play' : 'pause'} />
				      {this.state.quiz === 0 ? 'Play' : 'Pause'}
				    </Button>
			    </div>
			</div>
		)
	}
}

export default HeaderContent