import React from "react"
import Avatar from "react-avatar"
import moment from "moment"

const Profile = ({ name, createdAt }) => {
  return (
    <div className="">
      <Avatar name={name} size={30} round />
      <div className="">
        <span className="">{name}</span>
        <span className="">
          {moment(createdAt).fromNow()}
        </span>
      </div>
    </div>
  )
}

export default Profile
