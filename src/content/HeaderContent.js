import React from 'react'
import {Header, Icon, Image, Progress, Input, Button, Divider, Table} from 'semantic-ui-react'

class HeaderContent extends React.Component{
	constructor(){
		super()
		this.state = {
			soal: 1, //soalke
			quiz: 0, //0=stop, 1=mulai, 2=[pause] 3= selesai
			percent: 0, //percent bar
			time: 0, //detik
			angka1: 0, //soal
			angka2: 0, //soal
			score: 0,
			jawabSementara: 0, //jawaban yang diketik
			pengecekan: '', //jawabn benar/salah
			nickname: '',
		}
	}

	start(){
		document.getElementById("f").focus()

		this.setState({
			quiz: 1,
		})

		setInterval(() => this.detik(), 1000)

		this.setState({
			percent: 10,
			angka1: Math.floor(Math.random() * 100),
			angka2: Math.floor(Math.random() * 100),
		})
	}

	pause(){
		this.setState({
			quiz: 2,
		})

		this.waktu = this.state.time
	}

	resume(){
		document.getElementById("answerHere").focus()

		this.setState({
			quiz: 1,
			angka1: Math.floor(Math.random() * 100),
			angka2: Math.floor(Math.random() * 100),
		})
	}

	cek(e){
		e.preventDefault()
		//if soal sudah 10
		if(this.state.soal == 10){
			this.setState({
				quiz: 3,
				soal: 1, //soalke
				percent: 0, //percent bar
				time: 0, //detik
				angka1: 0, //soal
				angka2: 0, //soal
				score: 0,
				jawabSementara: 0, //jawaban yang diketik
				pengecekan: '',
			})
		}else{

			let jawaban = this.state.angka1 + this.state.angka2;

			this.setState({
					pengecekan: 'Salah',
				})
			if (parseInt(this.state.jawabSementara) === jawaban) {
				this.setState({
					pengecekan: 'Benar',
					score: this.state.score + 10,
				})
			}

			document.getElementById("f").reset()
			this.setState({
				percent: this.state.percent + 10,
				angka1: Math.floor(Math.random() * 100),
				angka2: Math.floor(Math.random() * 100),
				soal: this.state.soal + 1,
			})
		}
		//

	}

	componentWillUnmount(){
		clearInterval(this.waktu)
	}

	detik(){
		if(this.state.quiz == 1){

			this.setState({
				time: this.state.time + 1
			})
		}
	}

	inputNickname(e){
		this.setState({
			nickname: e.target.value,
		})		
	}

	componentDidMount(){

	}

	render(){
		return(
			<div>
			    <Image
			      centered
			      size='small'
			      src='https://www.diecoding.com/wp-content/uploads/2019/05/square.diecoding.google.bgwhite.512.png'
			    />
			    <div style={{textAlign:"center", display: this.state.quiz == 0 || this.state.quiz == 2 ? "none" : ""}}>
			    	<div style={{display: this.state.quiz == 3 ? 'none' : ''}}>
				    	<Header as='h2'>{this.state.time}</Header>
				    	<Progress percent={this.state.percent} indicating >{this.state.soal}/10 </Progress>
					    <Header as='h1'>{this.state.angka1} + {this.state.angka2}</Header>

					    <form id="f" onSubmit={(e) => this.cek(e)}>
					    <Input id="answerHere" autoFocus action={{
						      color: 'teal',
						      labelPosition: 'right',
						      icon: 'send',
						      content: 'Press Enter to Check',
						    }} 
						    placeholder='Answer Here...'
						    onChange={ (e) => this.setState({jawabSementara: e.target.value}) } />
						</form>
						<Header as="h4">Answer: {this.state.pengecekan}</Header> 
					</div>

					<Header as='h3'>Score: {this.state.score}</Header>
					
			    </div>

			    <br/><br/><br/>
				<Divider />
				<div  style={{textAlign: "center"}}>
				 	<Input autoFocus icon='user' iconPosition='left' placeholder='Input Nickname' onChange={(e) => this.inputNickname(e)}/> 
				 	&nbsp;
					<Button disabled={this.state.nickname == '' ? 'disabled' : null} icon  primary  labelPosition="left" onClick={() => this.state.quiz == 0 || this.state.quiz == 3 ? this.start() : this.state.quiz == 1 ? this.pause() : this.resume() }>
				      <Icon name= {this.state.quiz === 0 || this.state.quiz == 3 ? 'play' : this.state.quiz === 1 ? 'pause' : this.state.quiz === 2 ? 'play' : ''} />
				      {this.state.quiz === 0 || this.state.quiz == 3 ? 'Play' : this.state.quiz === 1 ? 'Pause' : this.state.quiz === 2 ? 'Resume' : ''}
				    </Button>
			    </div>

			    <br/><br/>
			    <div style={{textAlign: "center"}}>
			    	<Header as="h3">HighScore</Header>
			    	<Table stackable>
					    <Table.Header>
					      <Table.Row>
					      	<Table.HeaderCell>#</Table.HeaderCell>
					        <Table.HeaderCell>Name</Table.HeaderCell>
					        <Table.HeaderCell>Score</Table.HeaderCell>
					        <Table.HeaderCell>Time</Table.HeaderCell>
					      </Table.Row>
					    </Table.Header>

					    <Table.Body>
					      <Table.Row>
					      	<Table.Cell>1</Table.Cell>
					        <Table.Cell>John</Table.Cell>
					        <Table.Cell>10</Table.Cell>
					        <Table.Cell>100 s</Table.Cell>
					      </Table.Row>
					    </Table.Body>
					  </Table>
			    </div>
			</div>
		)
	}
}

export default HeaderContent