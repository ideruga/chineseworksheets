function generateDocument() {
    const canvas = document.getElementById('myCanvas');
    const characters = document.getElementById("characters").value;

    const width = canvas.width;
    const height = canvas.height;
    const BOX_WIDTH = 75;
    const COLUMNS = 9;
    const ROWS = Math.min(12, characters.length);
    const X_MARGIN = (width - BOX_WIDTH * COLUMNS) / 2;
    const Y_MARGIN = (height - BOX_WIDTH * ROWS) / 2;

    const context = canvas.getContext('2d');
    canvas.classList.remove('hidden');
    document.getElementById('ui').classList.add('hidden');
    document.getElementById('canvas-container').classList.remove('hidden');


    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, width, height);

    context.font = "65px KanjiStrokeOrders";
    context.fillStyle = '#000000';
    context.strokeStyle = '#000000';
    context.lineWidth = 1;

    // Print characters
    for (let i = 0; i < ROWS; i++) {
        const c = characters.charAt(i)
        const x = X_MARGIN
        const y = Y_MARGIN + (i + 0.8) * BOX_WIDTH
        context.fillText(c, x, y);
    }


    for (var i = 0; i <= ROWS; i++) {
        var x1 = X_MARGIN;
        var y1 = Y_MARGIN + i * BOX_WIDTH;
        var x2 = X_MARGIN + COLUMNS * BOX_WIDTH;
        var y2 = y1;

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();

    }

    //Print vertical lines
    for (var i = 0; i <= COLUMNS; i++) {
        var x1 = X_MARGIN + i * BOX_WIDTH
        var y1 = Y_MARGIN
        var x2 = x1
        var y2 = Y_MARGIN + ROWS * BOX_WIDTH

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }

    context.strokeStyle = '#999999';
    //Print horizontal middle lines
    for (var i = 0; i < ROWS; i++) {
        var x1 = X_MARGIN + BOX_WIDTH
        var y1 = Y_MARGIN + (i + 0.5) * BOX_WIDTH
        var x2 = X_MARGIN + COLUMNS * BOX_WIDTH
        var y2 = y1

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }

    //Print vertical middle lines
    for (var i = 1; i < COLUMNS; i++) {
        var x1 = X_MARGIN + (i + 0.5) * BOX_WIDTH
        var y1 = Y_MARGIN
        var x2 = x1
        var y2 = Y_MARGIN + ROWS * BOX_WIDTH

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }

    context.setLineDash([3, 3]);
    //Print diagonal lines
    for (var i = 0; i < ROWS; i++) {
        var x1 = X_MARGIN + BOX_WIDTH
        var y1 = Y_MARGIN + i * BOX_WIDTH

        var delta = ROWS - i

        if (delta > COLUMNS - 1) {
            delta = COLUMNS - 1
        }

        var x2 = X_MARGIN + (delta + 1) * BOX_WIDTH
        var y2 = Y_MARGIN + (delta + i) * BOX_WIDTH

        var x3 = x1
        var y3 = 2 * Y_MARGIN + ROWS * BOX_WIDTH - y1

        var x4 = x2
        var y4 = 2 * Y_MARGIN + ROWS * BOX_WIDTH - y2

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.moveTo(x3, y3);
        context.lineTo(x4, y4);
        context.stroke();
    }

    //Print more diagonal lines
    for (var i = 2; i < COLUMNS; i++) {
        var x1 = X_MARGIN + i * BOX_WIDTH
        var y1 = Y_MARGIN

        var delta = COLUMNS - i + 1
        if (delta > ROWS + 1) {
            delta = ROWS + 1
        }

        var x2 = X_MARGIN + (delta + i - 1) * BOX_WIDTH
        var y2 = Y_MARGIN + (delta - 1) * BOX_WIDTH

        var x3 = x1
        var y3 = 2 * Y_MARGIN + ROWS * BOX_WIDTH - y1

        var x4 = x2
        var y4 = 2 * Y_MARGIN + ROWS * BOX_WIDTH - y2

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.moveTo(x3, y3);
        context.lineTo(x4, y4);
        context.stroke();
    }

}

function saveAsPdf() {
    window.jsPDF = window.jspdf.jsPDF;
    var canvas = document.getElementById('myCanvas');
    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px'
    });

    pdf.addImage(imgData, 'JPEG', 0, 0);
    pdf.save("download.pdf");
}
