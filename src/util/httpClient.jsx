import React from 'react'

const API = "https://api.themoviedb.org/3"
const get = (path) => {
  return (
     fetch(API + path, {
        headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjIxZjE2ODRhYzg1Mzc5MGM4Zjk5ZGM5OWVhMTYyNCIsInN1YiI6IjY2M2JiNzM2Yzg3MDU5YWNmNTY3ZWNjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TUpl1sxtFB8bpakM21hmpv87Yn6ljTfmQ-xyllk2_cs",
            "Content-Type": "application/json;charset=utf-8",
          }
     })
      .then((results) => results.json())
  )
}

export default get