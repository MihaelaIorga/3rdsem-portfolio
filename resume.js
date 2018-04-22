function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//progressbar
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(containerUI, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#9D29FF',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {
        width: '100%',
        height: '100%'
    },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '9D29FF',
            position: 'absolute',
            right: '0',
            top: '30px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    from: {
        color: '#9D29FF'
    },
    to: {
        color: '#4974FC'
    },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    }
});

bar.animate(0.8); // Number from 0.0 to 1.0
