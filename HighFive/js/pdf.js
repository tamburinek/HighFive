function ExportPdf(){ 
    kendo.drawing
        .drawDOM("#myCanvas2", 
        { 
            forcePageBreak: ".page-break", 
            paperSize: "A4",
            margin: { top: "1cm", bottom: "1cm" },
            scale: 0.8,
            height: 500, 
            template: $("#page-template").html(),
            keepTogether: ".prevent-split"
        })
            .then(function(group){
            kendo.drawing.pdf.saveAs(group, "Test.pdf")
        });
    }

let el = document.getElementById("index-button");
el.addEventListener("click", ExportPdf);    

var canvas = document.getElementById("myCanvas2");
var ctx = canvas.getContext("2d");
ctx.font = "10px Arial";
ctx.fillText("Hello World", 200, 200);

