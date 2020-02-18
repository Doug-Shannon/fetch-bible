import React from "react";
import { useState } from 'react'

export default () => {
  const [bible, setBible] = useState(null);

  function handleBibleClick() {
    const version = '06125adad2d5898a-01';
    const verse = 'JHN.3.16'
    //https://docs.api.bible/v1.2/reference
    fetch(`https://api.scripture.api.bible/v1/bibles/${version}/verses/${verse}?content-type=json`, { headers: { 'api-key': 'GET A KEY' } })
      .then(resp => {
        console.log('promise returned')
        console.log(resp)
        resp.json().then(data => {
          console.log(data)
          setBible(data)
        })
      })
      .catch(e => console.log(e))
      console.log('after promise called')
  }

  console.log(bible)
  return (
    <div>
      {bible != null ?
        <div> {bible.data.content[0].items[1].text}</div> :
        <button onClick={() => { handleBibleClick() }}>Get John 3:16</button>}
    </div>
  )
};
