import React from 'react'

export default function Post({data}) {
  return (
    <div>
        {data.title}
        <br/>
        {data.desc}
    </div>
  )
}
