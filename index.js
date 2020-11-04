function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}
//  1) returns an object with the orignal key value pairs and the new key value pair
//  2) does not modify the original object, but rather returns a clone with the new data
//  3) returns an object with an updated key value pair

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object;
}
// 1) updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object
