/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
    var len,
        firstLoverElement,
        secondLoverElement,
        thirdLoverElement,
        firstLoverIndex,
        secondLoverIndex,
        thirdLoverIndex,
        tringleCount = 0;
    for (firstLoverIndex = 0, len = preferences.length; firstLoverIndex < len; firstLoverIndex++) {
        if (preferences[firstLoverIndex] != null && preferences[firstLoverIndex] !== 0 && preferences[firstLoverIndex] !== firstLoverIndex+1) {
           firstLoverElement = preferences[firstLoverIndex];
           secondLoverIndex = firstLoverElement - 1;
           if (preferences[secondLoverIndex] != null && preferences[secondLoverIndex] !== 0 && preferences[secondLoverIndex] !== secondLoverIndex+1) {
               secondLoverElement = preferences[secondLoverIndex];
               thirdLoverIndex = secondLoverElement - 1;
               if (preferences[thirdLoverIndex] != null && preferences[thirdLoverIndex] !== 0 && preferences[thirdLoverIndex] !== thirdLoverIndex+1) {
                   thirdLoverElement = preferences[thirdLoverIndex];
                   if (thirdLoverElement === firstLoverIndex + 1) {
                       tringleCount = tringleCount + 1;
                       preferences[firstLoverIndex] = null;
                       preferences[secondLoverIndex] = null;
                       preferences[thirdLoverIndex] = null;
                   }
               }
           }
        }
    }
    return tringleCount;
};