import React, { PureComponent } from 'react';
import Collection from './Collection';

export default class CollectionList extends PureComponent {
  render() {
    const testCollection = {
      name: "B&W Collection",
      description: `They were six beautiful children but the youngest
       was the prettiest of them all. Her skin was as clear and delicate 
       as a rose-leaf and her eyes as blue as the deepest sea. But like 
       all the others she had no feet and her body ended in a fish’s tail.`,
      previewLink: null
    };
    return (
      <div>
        <Collection data={testCollection}/>
      </div>
    );
  }
}
