import React,{useState} from 'react'
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

function RestReviews({reviews}) {
    console.log(reviews);
    const [open, setOpen] = useState(false);

  return (
    <>
     <Button className= 'ps-0 ' variant='light'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Click to see Reviews
      </Button>
      <Collapse className='py-3' in={open} >
          <div id="example-collapse-text">
            
              {
                reviews.map(item=>(
                    <div>
                        <h6>{item.name} : (<span>{item.date}</span>)</h6>
                        <p>Rating : {item.rating}</p>
                        <p>Comments : {item.comments}</p>
                    </div>
                ))
              }
            
          </div>
        </Collapse>
    </>
  )
}

export default RestReviews