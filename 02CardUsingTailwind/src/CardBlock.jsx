import React from 'react'
import Card from './Card'

const CardBlock = () => {
  return (
    <div className="flex flex-row gap-6 flex-wrap justify-evenly">
        <Card
            className="flex-auto"
            img="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            head="Card 1"
            desc="Card 1 description"
            btnName="Read"
          />
          <Card
            className="flex-auto"
            img="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            head="Card 2"
            desc="Card 2 description"
            btnName="Visit Me"
          />
          <Card
            className="flex-auto"
            img="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            head="Card 3"
            desc="Card 3 description"
            btnName="Click Me"
          />
          <Card
            className="flex-auto"
            img="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            head="Card 4"
            desc="Card 4 description"
            btnName="Click"
          />
    </div>
  )
}

export default CardBlock