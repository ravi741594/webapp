import data from "./tabledata"

function manipulateData(data) {
  let newArray = [];
  
  for (let obj of data) {
    let newObj = {};
    for (let objKey in obj) {
      if (objKey === 'interview') {
        for (let itwobj of obj[objKey]) {
          // let tempKey = objKey + '_round_' + itwobj['round']['count'];
          let tempKey = objKey + '_round_' + itwobj.round.count;
          newObj[tempKey] = itwobj['round']['type'];

          for (let itwObjKey in itwobj) {
            if (itwObjKey !== 'round') {
              if (typeof itwobj[itwObjKey] === 'object') {

                let nestedItwObj = itwobj[itwObjKey]
                for (let nestedObjKey in nestedItwObj) {
                 // newObj[tempKey + '_' + nestedObjKey + '_' + itwObjKey] = nestedItwObj[nestedObjKey];
                 newObj[tempKey + '_' + itwObjKey + '_' + nestedObjKey] = nestedItwObj[nestedObjKey];
                }

              } else {
                newObj[tempKey + '_' + itwObjKey] = itwobj[itwObjKey];
              }
            }
          }
        }
      } 
      else if (typeof obj[objKey] === 'object') {

        if (objKey === 'experience') {

          let expStr = '';
          let expObj = obj[objKey];
          for (let expObjKey in expObj) {
            expStr += obj[objKey][expObjKey] + " " + expObjKey + ' ';
          }
          newObj[objKey] = expStr.trim();

        } else {
          let nestedObj = obj[objKey]
          for (let nestedObjKey in nestedObj) {
            newObj[nestedObjKey + "_" + objKey] = nestedObj[nestedObjKey];
          }
        }

      } else {
        newObj[objKey] = obj[objKey];
      }
    }
    newArray.push(newObj);

  }

  return newArray;
}
const flatData= manipulateData(data);
export default flatData;

