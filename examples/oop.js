function ErrorBase(message) {
    this.message = message;
    Error.call(this, message);
}

ErrorBase.prototype = Object.create(Error.prototype);

function PapersAreFinishedException(message) {
    ErrorBase.call(this, message);
    Error.captureStackTrace(this, PapersAreFinishedException);
}

PapersAreFinishedException.prototype = Object.create(ErrorBase.prototype);

function PaintAreFinishedException(message) {
    ErrorBase.call(this, message);
    Error.captureStackTrace(this, PaintAreFinishedException);
}

PaintAreFinishedException.prototype = Object.create(ErrorBase.prototype);

function PrinterIsDisabledException(message) {
    ErrorBase.call(this, message);
    Error.captureStackTrace(this, PrinterIsDisabledException);
}

PrinterIsDisabledException.prototype = Object.create(ErrorBase.prototype);

function PaintTankIsOverloadedException(message) {
    ErrorBase.call(this, message);
    Error.captureStackTrace(this, PaintTankIsOverloadedException);
}

PaintTankIsOverloadedException.prototype = Object.create(ErrorBase.prototype);

function PaperTankIsOverloadedException(message) {
    ErrorBase.call(this, message);
    Error.captureStackTrace(this, PaperTankIsOverloadedException);
}

PaperTankIsOverloadedException.prototype = Object.create(ErrorBase.prototype);

function Printer(amountPaint, maxPaint, paintPerPage, timeOfPrintingPage, amountPapers, maxPapers) {
    const MAX_PAINT = maxPaint;
    const PAINT_PER_PAGE = paintPerPage;
    const MAX_PAPERS = maxPapers;
    const TIME_OF_PRINTING_PAGE = timeOfPrintingPage;

    let paint = amountPaint;
    let papers = amountPapers;
    let enabled = true;

    this.amountPaintLeft = function () {
        return paint;
    };

    this.amountPapersLeft = function () {
        return papers;
    };

    this.getMaxPaint = function () {
        return MAX_PAINT;
    };

    this.getPaintPerPage = function () {
        return PAINT_PER_PAGE;
    };

    this.getMaxPaint = function () {
        return MAX_PAINT;
    };

    this.getTimeOfPaintingPage = function () {
        return TIME_OF_PRINTING_PAGE;
    };
    this.isPrinterReady = function () {
        return enabled;
    };

    this.onePagePrinted = function () {
        papers--;
        amountPaint -= PAINT_PER_PAGE;
    };

    this.addPaint = function (amountPaint) {
        paint += amountPaint;
        if (paint > MAX_PAINT) {
            throw new PaintTankIsOverloadedException("Paint tank is overloaded");
        }
    };

    this.addPapers = function (newPapersAmount) {
        papers += newPapersAmount;
        if (papers > MAX_PAPERS) {
            throw new PaperTankIsOverloadedException("Paper tank is overloaded");
        }
    };

    this.enable = function () {
        enabled = true;
    };

    this.disabled = function () {
        enabled = false;
    }
}

Printer.prototype.printPage = function () {
    if (this.amountPapersLeft() < 1) {
        throw new PapersAreFinishedException("Not Enough paper to print.");
    }

    if (this.amountPaintLeft() > this.getPaintPerPage()) {
        this.onePagePrinted();
    } else {
        throw new PaintAreFinishedException("Paint are finished. Please add paint.");
    }
};

Printer.prototype.print = function (amountPages) {
    if (!this.isPrinterReady()) {
        throw new PrinterIsDisabledException("Printer is disabled.");
    }
    while (amountPages > 0) {
        this.printPage();
        amountPages--;
    }
};


function Xerox(amountPaint, amountPapers) {
    Printer.call(this, amountPaint, 150, 5, 10, amountPapers, 100);
}

Xerox.prototype = Object.create(Printer.prototype);

Xerox.prototype.print = function (amountPages) {
    try {
        Printer.prototype.print.call(this, 10);
        console.log("Document is printed!");
    } catch (e) {
        console.log(e.message);
    }
};

const officePrinter = new Xerox(100, 50);
officePrinter.print(5);