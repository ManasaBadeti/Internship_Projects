import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { saveAs } from 'file-saver';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
export const generatePDF= ({rows, columns,date, header, subheader, filename, empName}) => {
    const tableRows = [];
    rows.forEach((row) =>{
        const rowData = [];
        columns.forEach((columns) => {
            rowData.push(row[columns.dataKey]);
        });
        tableRows.push(rowData);
    });
    const columnWidth = (500/columns.length) -10;
    const docDefinition = {
        content: [
            {
                text: header,
                fontSize: 16,
                bold: true,
                margin: [0, 10, 2, 5],
                // style: 'header'
            },
            {
                text: empName,
                fontSize: 12,
                fontWeight: 600,
                margin: [0, 2, 2, 5],
            },
            {
              text: subheader,
              // style:'subheader',
              fontSize: 8,
              margin: [0, 2, 2, 5],
            },
            {
              text: `Date: ${date}`,
              fontSize: 10,
              // bold: true,
              margin: [0, 2, 0, 15], // --- top --- ----
              alignment: 'right',
            },
            {
                layout: 'lightHorizontalLines',
                table:{
                    headerRows:1,
                    widths: columns.map((column) => columnWidth),
                    body: [columns.map((column) => ({text: column.label, fontSize: 6})), 
                      ...tableRows.map((row) => row.map((cell) => ({text: cell, fontSize: 5})))
                    ],
                    fontSize: 10,
                },
            },
            
        ],
    };

    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    pdfDocGenerator.getBlob((blob) => {
        saveAs(blob, `${filename}`);
    });
};