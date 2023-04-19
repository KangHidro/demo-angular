import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  compareTwoArrayString(arr1: Array<string>, arr2: Array<string>, checkIndex?: boolean): boolean {
    if (arr1 === arr2) { return true; }
    if (arr1 === null || arr2 === null) { return false; }
    if (arr1.length !== arr2.length) { return false; }

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
    if (checkIndex) { // Fillblank check
      for (let i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) { return false; }
      }
    } else { // Multichoice check
      const tempArr1 = arr1.sort();
      const tempArr2 = arr2.sort();
      for (let i = 0; i < tempArr1.length; ++i) {
        if (tempArr1[i] !== tempArr2[i]) { return false; }
      }
    }
    return true;
  };

  compareTwoObj(obj1: any, obj2: any): boolean {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    if (!this.compareTwoArrayString(Object.keys(obj1), Object.keys(obj2))) {
      return false;
    }
    for (const [key, value] of Object.entries(obj1)) {
      if (obj2[key] !== value) {
        return false;
      }
    }
    return true;
  };

}
