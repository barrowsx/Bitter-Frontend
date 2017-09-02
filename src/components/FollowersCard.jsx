import React from 'react'
import {Card, Button, Segment, Image, Divider} from 'semantic-ui-react'

class FollowersCard extends React.Component {
  render() {
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            <h1>Followers</h1>
            <Divider />
          </Card.Header>
          <div>
            At some point there will be
            followers here but for now
            it's just empty
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default FollowersCard;
