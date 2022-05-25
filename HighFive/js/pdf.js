//building pdf file from canvas
function ExportPdf(){ 
    kendo.drawing
        .drawDOM("#myCanvas2", 
        { 
            forcePageBreak: ".page-break", 
            // paperSize: "A4",
            margin: { top: "1cm", bottom: "1cm" },
            scale: 0.5,
            height: 297*2, 
            template: $("#page-template").html(),
            keepTogether: ".prevent-split"
        })
            .then(function(group){
            kendo.drawing.pdf.saveAs(group, "Test.pdf")
        });
    }

let el = document.getElementById("index-button");
el.addEventListener("click", ExportPdf);    

