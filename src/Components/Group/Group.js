import React, { Component } from 'react'

export default class Group extends Component {
  render() {
    return (
      <div>
        <div class='ui cards'>
  <div class='ui card'>
    <div class='content'>
      <img src='/images/avatar/large/steve.jpg' class='ui mini right floated image' />
      <div class='header'>Steve Sanders</div>
      <div class='meta'>Friends of Elliot</div>
      <div class='description'>
        Steve wants to add you to the group <strong>best friends</strong>
      </div>
    </div>
    <div class='extra content'>
      <div class='ui two buttons'>
        <button class='ui green basic button' role='button'>
          Approve
        </button>
        <button class='ui red basic button' role='button'>
          Decline
        </button>
      </div>
    </div>
  </div>
  <div class='ui card'>
    <div class='content'>
      <img src='/images/avatar/large/molly.png' class='ui mini right floated image' />
      <div class='header'>Molly Thomas</div>
      <div class='meta'>New User</div>
      <div class='description'>
        Molly wants to add you to the group <strong>musicians</strong>
      </div>
    </div>
    <div class='extra content'>
      <div class='ui two buttons'>
        <button class='ui green basic button' role='button'>
          Approve
        </button>
        <button class='ui red basic button' role='button'>
          Decline
        </button>
      </div>
    </div>
  </div>
  <div class='ui card'>
    <div class='content'>
      <img src='/images/avatar/large/jenny.jpg' class='ui mini right floated image' />
      <div class='header'>Jenny Lawrence</div>
      <div class='meta'>New User</div>
      <div class='description'>Jenny requested permission to view your contact details</div>
    </div>
    <div class='extra content'>
      <div class='ui two buttons'>
        <button class='ui green basic button' role='button'>
          Approve
        </button>
        <button class='ui red basic button' role='button'>
          Decline
        </button>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }
}
