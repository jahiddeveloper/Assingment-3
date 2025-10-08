/** Problem 04 - (Delete / Store) */

var fileName= "pdfData.jpg";

if(fileName === "result.pdf" || fileName === "data.docx" || fileName === "#exp.mp4") {
    console.log("Store");
}
else if(fileName === "pdfData.jpg" || fileName === "docx.txt" || fileName === "docx.xpdf" || fileName === "slipdf.txt") {
    console.log("Delete");
}