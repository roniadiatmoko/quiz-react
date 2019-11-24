import React from 'react'
import { Container } from 'semantic-ui-react'
import HeaderContent from './HeaderContent'

class ContainerContent extends React.Component{
  render(){
    return(
      <div>
        <Container>
          <HeaderContent/>
        </Container>

      </div>
    )
  }
}

export default ContainerContent