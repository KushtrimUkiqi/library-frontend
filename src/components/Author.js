import React from 'react'

export default function Author({author}) {
  return (
    <div className="card">
    <div className="card-body">
       {author.name} {author.surname}
    </div>
    </div>
  )
}
