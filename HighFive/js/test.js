let svg = document.getElementById("find");
console.log(svg.innerHTML)

svg = svg.innerHTML;

let butonik = document.getElementById("index-button")
butonik.addEventListener("click", () => {
    svgToPng(svg, (imgData) => {
        const pngImage = document.createElement('img');
        document
            .body
            .appendChild(pngImage);
        pngImage.src = imgData;
    });
})

// const svg=`<svg version="1.1" baseProfile="full" width="300" height="200"
// xmlns="http://www.w3.org/2000/svg">    <rect width="100%" height="100%"
// fill="red" />    <circle cx="150" cy="100" r="80" fill="green" />    <text
// x="150" y="125" font-size="60" text-anchor="middle"
// fill="white">SVG</text></svg>` const svg = `<svg version="1.1"
// baseProfile="full" width="210" height="297" id="myCanvas" class="canvas"
// xmlns="http://www.w3.org/2000/svg" style="background-color:white"> <text
// x="0" y="15" fill="red">I love SVG!</text> </svg>`

function svgToPng(svg, callback) {
    const url = getSvgUrl(svg);
    svgUrlToPng(url, (imgData) => {
        callback(imgData);
        URL.revokeObjectURL(url);
    });
}
function getSvgUrl(svg) {
    return URL.createObjectURL(new Blob([svg], {type: 'image/svg+xml'}));
}
function svgUrlToPng(svgUrl, callback) {
    console.log(svgUrl)
    const svgImage = document.createElement('img');
    // imgPreview.style.position = 'absolute'; imgPreview.style.top = '-9999px';
    document
        .body
        .appendChild(svgImage);
    svgImage.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = svgImage.clientWidth;
        canvas.height = svgImage.clientHeight;
        const canvasCtx = canvas.getContext('2d');
        canvasCtx.drawImage(svgImage, 0, 0);
        const imgData = canvas.toDataURL('image/png');
        callback(imgData);
        // document.body.removeChild(svgImage);
    };
    svgImage.src = svgUrl;

    var can = document.getElementById('myCanvas2');
    var ctx = can.getContext('2d');

    //var svg = document.getElementById('mySVG');

    var img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
    }
    img.src = svgUrl;

}
