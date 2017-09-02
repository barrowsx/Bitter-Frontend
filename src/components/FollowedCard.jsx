import React from 'react'
import {Card, Button, Segment, Image, Divider} from 'semantic-ui-react'

class FollowedCard extends React.Component {
  render() {
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            <h1>Following</h1>
            <Divider />
          </Card.Header>
          <div>
            At some point there will be
            followed here but for now
            it's just empty
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default FollowedCard;
