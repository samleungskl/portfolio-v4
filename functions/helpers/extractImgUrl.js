//extract ImgUrl from the list of Objects, and put it back into the array.
const extractImgUrl = (dataAryOfObj) => {
    const result = dataAryOfObj.map(element => {
        // if image field is not empty, AND it is an array(because after extraction it is no longer an array, without this it will causes error)
        if (element.projectImage !== undefined && Array.isArray(element.projectImage)) {
            const imgUrl = element.projectImage[0].url;
            element.projectImage = imgUrl;
        }
        return element;
    });
    return result;
};

module.exports = { extractImgUrl }