import {React,useRef} from 'react'

export default function ReturnBook({book}) {

  const id = useRef(0);
  const name = useRef('');

  return (
    <div className="modal fade" data-bs-backdrop="static" id="returnBook" tabIndex="-1" aria-labelledby="returnBook" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Return</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div style={{backgroundColor: 'rgba(2,18,43,255)',color: 'white',padding: '2vh 3px'}}>
                <h6>
                   {`${book.bookName} - ${book.author}`} 
                </h6>
      </div>
      <div className="modal-body">
      <div className="mb-3">
            <label htmlFor="customer" className="form-label">Customer id:</label>
            <input id='customer' ref={id} className="form-control" type="number" min={0} placeholder="0" aria-label="default input example"/>
        </div>
        <div className="mb-3">
            <label htmlFor="customer" className="form-label">Customer fullname:</label>
            <input id='customer' ref={name} className="form-control" type="text" placeholder="Kushtrim Ukiqi" aria-label="default input example"/>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button style={{backgroundColor: 'rgba(2,18,43,255)'}} type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  )
}
