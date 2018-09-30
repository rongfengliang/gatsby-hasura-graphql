import React from "react"

const AuthorList = ({ authors }) => (
  <div>
    {authors.map((a, i) => (
      <div key={i}>
        <h2>{a.name}</h2>
        <p>{a.id}</p>
      </div>
    ))}
  </div>
)

export default AuthorList;
