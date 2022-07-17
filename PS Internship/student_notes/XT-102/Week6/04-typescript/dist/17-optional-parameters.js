var DateFormat;
(function (DateFormat) {
    DateFormat[DateFormat["Standard"] = 0] = "Standard";
    DateFormat[DateFormat["Display"] = 1] = "Display";
})(DateFormat || (DateFormat = {}));
// all the optional arguments must be the final arguments
// For example, we cannot make date optional, while making formt mandatory
function formatDate(date, format) {
    if (format) {
        // .. return formatted date as per required format
    }
    else {
        // return date in a  default format
    }
}
formatDate(new Date()); // second argument which is optional need not be passed
formatDate(new Date(), DateFormat.Standard);
export {};
