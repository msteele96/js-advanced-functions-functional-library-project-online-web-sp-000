const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, alert) {
      const eachCollection = (array.length === undefined) ? Object.values(array) : array

      for (let index = 0; index < eachCollection.length; index++) 
        alert(eachCollection[index])

      return array
    },

    map: function(array, callback) {
      const mapCollection = (array.length === undefined) ? Object.values(array) : array
      const newMap = []
      for (let index = 0; index < mapCollection.length; index++) {
        newMap.push(callback(mapCollection[index]))
      }

      return newMap
    },

    reduce: function(collection, callback, acc) {
    // with initial: start from index 0
    // w/o initial: start from index 1

      let index = (!acc) ? 1 : 0
      let newAcc = (!acc) ? collection[0] : acc

      for ( ; index < collection.length; index++) {
        let element = collection[index];
        newAcc = callback(newAcc, element)
      }

      return newAcc
    },

    find: function(collection, predicate) {
      for (let index = 0; index < collection.length; index++) {
        let element = collection[index];
        if (predicate(element)) { 
          return element;
        }
      }
    },

    filter: function(collection, predicate) {
      const filtered = []
      for (let index = 0; index < collection.length; index++) {
        let element = collection[index];
        if (predicate(element)) {
          filtered.push(element)
        }
      }
      return filtered
    },

    size: function(collection) {
      return Object.values(collection).length
    },

    first: function(array, n) {
      const result = (!n) ? array[0] : array.slice(0,n)

      return result
    },

    last: function(array, n) {
      const result = (!n) ? array[array.length-1] : array.slice(array.length-n,array.length)

      return result
    },

    compact: function(array) {
      const compacted = []
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (!element === false) {
          compacted.push(element)
        }
      }
      return compacted
    },

    sortBy: function(array, callback) {
      const newArray = [...array]
      return newArray.sort(function(a,b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values
    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

  }
})()

fi.libraryMethod()
