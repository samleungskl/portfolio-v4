const { base } = require('./airtable');
const formattedReturn = require('./formattedReturn');
const { extractFieldData } = require('./extractFieldData');
const { extractImgUrl } = require('./extractImgUrl');
module.exports = async (event) => {
    try {
        const data = await Promise.all([
            base('projects').select({ view: 'display' }).all(),
        ]);

        const extractedData = data.map((element) => {
            const fieldData = extractFieldData(element);
            const imgExtractedFieldData = extractImgUrl(fieldData);
            return imgExtractedFieldData;
        });
        const result = {
            projects: extractedData,
        };

        return formattedReturn(200, result);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, { msg: 'Something went wrong' });
    };
};