import React from 'react'
import styleConfig from '../../../configurations/style';

export default function Pagination() {
  return (
    <>
    <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center" style={{color: styleConfig.mainColor}}>
            <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1" style={{color: styleConfig.mainColor}}>Previous</a>
            </li>
            <li className="page-item"><a className="page-link" style={{color: styleConfig.mainColor}} href="#">1</a></li>
            <li className="page-item"><a className="page-link" style={{color: styleConfig.mainColor}} href="#">2</a></li>
            <li className="page-item"><a className="page-link" style={{color: styleConfig.mainColor}} href="#">3</a></li>
            <li className="page-item">
            <a className="page-link" href="#" style={{color: styleConfig.mainColor}}>Next</a>
        </li>
        </ul>
    </nav>
    </>
  )
}
