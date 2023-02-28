import React, { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.bucket);

  const submitUpdate = (value) => {

    // Update the dit variable: keep id and eagerness, and swap out the value prop for the value that's being passed in
    setEdit({ ...edit, value: value });
    props.editBucketItem(edit)

    // TODO: Set the key:value pairs in the `edit` object back to empty straings

  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    // TODO: Add a className of `bucket row complete ${item.eagerness}` for completed items, and `bucket-row ${item.eagerness}` for non-completed items
    // TODO: Add a key attribute set to the value of the index position
    // Hint: use a ternary operator
    <div className={index} key={item.id}>

      {/* TODO: Add an onClick event that invokes the `completeBucketItem` method passing the item id as a argument */}

      <div key={item.id} onClick={() => props.completeBucketItem(item.id)}>
          Mark as Complete
      </div>
      <div className="icons">
        {/* here is where we tell React that the current item being clicked on is the item we want to edit */}
        <p onClick={() => setEdit({
          id: item.id, 
          value: item.text,
          eagerness: item.eagerness
        })}> ✏️</p>

        {/* TODO: Add an onClick event that will invoke the removeBucketItem method passing in the `item.id` */}
        <p onClick={() => setEdit({
          id: item.id,
          value: item.text,
          eagerness: item.eagerness
        })}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;
