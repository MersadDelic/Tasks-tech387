
## TASK 1
![image](https://user-images.githubusercontent.com/52496724/134902289-e0310da0-0692-4534-a7c3-0a9e0635fa2e.png)


## TASK 2

This small project(CRUD operations) was generated with Angular CLI version 11.2.14.

- Download or clone the code from this repository. If you download as a zip file, be sure to unzip it.
- Navigate to the media-library folder. There should be a package.json file in this folder.
- In a command window type npm install. This creates a node_modules folder and installs all packages from the package.json file into that folder.
- Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

![image](https://user-images.githubusercontent.com/52496724/135042131-5aa16955-d5e0-4525-9274-df25e4091cdf.png)
![image](https://user-images.githubusercontent.com/52496724/135042348-21555580-6dee-4fac-88ae-5a90bc156e55.png)
![image](https://user-images.githubusercontent.com/52496724/135042417-a95cff57-42ff-4d33-8304-abaeb13110cf.png)


## TASK 3
```javascript
  a = [{id:1, value:3}, {id:2, value:7}, {id:3, value:3}, {id:4, value:1}, {id:5, value:4}]

  const repeatMap = new Map();     // (broj, brojPonavaljanja)
  //let arrayKeys = Array.from(repeatMap.keys());
  // let arrayValues = a.values();

  a.forEach(item => {

      if (!Array.from(repeatMap.keys()).includes(item.value)) {
          repeatMap.set(item.value, 1)
      } else {
          repeatMap.set(item.value, repeatMap.get(item.value) + 1)
      }
  }
  );

  Array.from(repeatMap.keys()).forEach(key => {
      if (repeatMap.get(key) < 2)
          repeatMap.delete(key);
  })

  let nextNum = repeatMap.entries().next().value + 1;
  while(true) {
      if (!Array.from(repeatMap.keys()).includes(nextNum))
          break;
      else
          nextNum ++;
  }

  let maxId = // find max id in the first array

  let solution = { maxId, sljedeciBroj }
  
  ```
