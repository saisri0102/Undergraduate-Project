/**
         * Use object spread to make a shallow copy of the following object.
        * Again, use array and object spread (as required) to create a deep copy of the object.
        * Test out if making a change to name and front camera details on the iPhone11 object affects
        the shallow copy.
        * What about the deep copy? Is it affected?
        ```
        const iPhone11 = {
        name: 'iPhone 11',
        manufacturer: 'Apple',
        price: 699,
        specs: {
        color: 'White',
            memory: {
            value: 128,
            unit: 'MB'
            },
            cameras: {
            front: '12 MP Wide',
            rear: '12 MP Ultra Wide'
            },
        availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
        }
        }
        ```

 */
const iPhone11 = {
    name: 'iPhone 11',
    manufacturer: 'Apple',
    price: 699,
    specs: {
    color: 'White',
        memory: {
        value: 128,
        unit: 'MB'
        },
        cameras: {
        front: '12 MP Wide',
        rear: '12 MP Ultra Wide'
        },
    availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
    }
}

const iPhone11ShallowCopy ={
    ...iPhone11
}
const iPhone11DeepCopy ={
    ...iPhone11,
    name: iPhone11.name,
    specs:{
        ...iPhone11.specs,
        memory:{
            ...iPhone11.specs.memory
        },
        cameras:{
            ...iPhone11.specs.cameras
        }
    }

}

iPhone11.name="iPhone";
iPhone11.specs.cameras.front='13 MP Wide';
console.log('iPhone11 =', iPhone11);

/**
 * iPhone11 = {
  name: 'iPhone',
  manufacturer: 'Apple',
  price: 699,
  specs: {
    color: 'White',
    memory: { value: 128, unit: 'MB' },
    cameras: { front: '13 MP Wide', rear: '12 MP Ultra Wide' },
    availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
  }
}
 */
console.log('iPhone11ShallowCopy =', iPhone11ShallowCopy);
/**
*   iPhone11ShallowCopy = {
     name: 'iPhone 11',
    manufacturer: 'Apple',
    price: 699,
    specs: {
        color: 'White',
        memory: { value: 128, unit: 'MB' },
        cameras: { front: '13 MP Wide', rear: '12 MP Ultra Wide' },
        availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
    }
    }
 */
console.log('iPhone11DeepCopy=', iPhone11DeepCopy);
/**
*   iPhone11DeepCopy= {
     name: 'iPhone 11',
    manufacturer: 'Apple',
    price: 699,
    specs: {
        color: 'White',
        memory: { value: 128, unit: 'MB' },
        cameras: { front: '12 MP Wide', rear: '12 MP Ultra Wide' },
        availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
    }
    }
 */
iPhone11ShallowCopy.specs.cameras.front='14 MP Wide';
iPhone11ShallowCopy.name ='iPhone11ShallowCopy';
console.log('iPhone11 =', iPhone11);
/**
 * iPhone11 = {
  name: 'iPhone',
  manufacturer: 'Apple',
  price: 699,
  specs: {
    color: 'White',
    memory: { value: 128, unit: 'MB' },
    cameras: { front: '14 MP Wide', rear: '12 MP Ultra Wide' },
    availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
  }
}
 */
console.log('iPhone11ShallowCopy =', iPhone11ShallowCopy);
/**
*   iPhone11ShallowCopy = {
     name: 'iPhone11ShallowCopy',
    manufacturer: 'Apple',
    price: 699,
    specs: {
        color: 'White',
        memory: { value: 128, unit: 'MB' },
        cameras: { front: '14 MP Wide', rear: '12 MP Ultra Wide' },
        availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
    }
    }
 */
console.log('iPhone11DeepCopy=', iPhone11DeepCopy);

/**
*   iPhone11DeepCopy= {
     name: 'iPhone 11',
    manufacturer: 'Apple',
    price: 699,
    specs: {
        color: 'White',
        memory: { value: 128, unit: 'MB' },
        cameras: { front: '12 MP Wide', rear: '12 MP Ultra Wide' },
        availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
    }
    }
 */


