import React from 'react'
import Star from './Star';

function Stars({ count }) {

  const itemStars = [];
  if (typeof count === 'number' && count > 0 && count < 6) {
    for (let i = 1; i < count + 1; i++) {
      itemStars.push(i);
    }
  }
console.log(itemStars);
  return (
    <ul className="card-body-stars u-clearfix">
      {itemStars.map((item) => {
        return (
          <>
            <Star key={item} />
          </>
        )
      })}
    </ul>
  )
}

export default Stars