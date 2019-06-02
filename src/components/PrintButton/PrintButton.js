import React from 'react';
import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
import './style.scss';

const pxToMm = px => {
  return Math.floor(px / document.getElementById('myMm').offsetHeight);
};

const mmToPx = mm => {
  console.log(document.getElementById('myMm').offsetHeight);
  return document.getElementById('myMm').offsetHeight * mm;
};

const html2PdfUtil = element => {
  var opt = {
    margin: [10, 0, 15, 0],
    filename: 'JuhiSingh-Resume.pdf',
    image: { type: 'png', quality: 1 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: 'mm', format: 'A4', orientation: 'portrait' },
  };
  // New Promise-based usage:
  html2pdf()
    .from(element)
    .set(opt)
    .save();
};

const range = (start, end) => {
  return Array(end - start)
    .join(0)
    .split(0)
    .map(function(val, id) {
      return id + start;
    });
};

const PrintButton = ({ id, label }) => (
  <div className="">
    {/*
    Getting pixel height in milimeters:
    https://stackoverflow.com/questions/7650413/pixel-to-mm-equation/27111621#27111621
  */}
    <div id="myMm" style={{ height: '1mm' }} />

    <div
      className="floating-button"
      onClick={() => html2PdfUtil(document.getElementById(id))}
      // onClick={() => {
      //   const input = document.getElementById(id);
      //   const inputHeightMm = pxToMm(input.offsetHeight);
      //   const a4WidthMm = 210;
      //   const a4HeightMm = 297;
      //   const a4HeightPx = mmToPx(a4HeightMm);
      //   const numPages =
      //     inputHeightMm <= a4HeightMm
      //       ? 1
      //       : Math.floor(inputHeightMm / a4HeightMm) + 1;
      //   console.log({
      //     input,
      //     inputHeightMm,
      //     a4HeightMm,
      //     a4HeightPx,
      //     numPages,
      //     range: range(0, numPages),
      //     comp: inputHeightMm <= a4HeightMm,
      //     inputHeightPx: input.offsetHeight,
      //   });

      //   html2canvas(input, {
      //     scale: 1,
      //   }).then(canvas => {
      //     var context = canvas.getContext('2d');
      //     context.scale(2, 2);
      //     context['imageSmoothingEnabled'] = false;
      //     context['mozImageSmoothingEnabled'] = false;
      //     context['oImageSmoothingEnabled'] = false;
      //     context['webkitImageSmoothingEnabled'] = false;
      //     context['msImageSmoothingEnabled'] = false;
      //     const imgData = canvas.toDataURL('image/png');
      //     let _pdf = '';
      //     // Document of a4WidthMm wide and inputHeightMm high
      //     if (inputHeightMm > a4HeightMm) {
      //       /*
      //       *INFO OLD METHOD which broke the code for multiple pages
      //       // elongated a4 (system print dialog will handle page breaks)
      //       // const pdf = new jsPDF('p', 'mm', [inputHeightMm + 16, a4WidthMm]);
      //       // _pdf = pdf;
      //       */

      //       // Reference: https://stackoverflow.com/questions/27045704/how-to-have-multiple-pdf-pages-using-jspdf-with-html2canvas/38788909#38788909
      //       var pdf = new jsPDF('p', 'mm');
      //       _pdf = pdf;
      //       var position = 0;
      //       var heightLeft = inputHeightMm;

      //       _pdf.addImage(imgData, 'PNG', 0, position);
      //       heightLeft -= a4HeightMm;

      //       while (heightLeft >= 0) {
      //         position = heightLeft - inputHeightMm;
      //         _pdf.addPage();
      //         _pdf.addImage(imgData, 'PNG', 0, position);
      //         heightLeft -= a4HeightMm;
      //       }
      //     } else {
      //       const pdf = new jsPDF();
      //       _pdf = pdf;
      //       // standard a4
      //     }

      //     // _pdf.addImage(imgData, 'PNG', 0, 0);
      //     _pdf.save(`${id}.pdf`);
      //   });
      // }}
    >
      {label}
    </div>
  </div>
);

export default PrintButton;
