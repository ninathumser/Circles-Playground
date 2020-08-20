var right = d3.select('#paintCircles')
right.on('click', createCircle)
right.on('mousemove', whatever)

var sliderRight = d3.sliderBottom()
    .min(0)
    .max(50)
    .step(1)
    .width(400)
    .ticks(10)
    .default(20)
    .displayValue(true)
    .handle(
        d3.symbol()
        .type(d3.symbolCircle)
        .size(200)()
    )
    .on('onchange', num => {
        right.selectAll('circle').filter(':last-child').attr('r', num)
    })

var gSliderRight = d3
    .select('#slider-circle-size-right')
    .append('svg')
    .attr('width', 500)
    .attr('height', 100)
    .append('g')
    .attr('transform', 'translate(30,30)');

gSliderRight.call(sliderRight);

function createCircle(){
    var x = d3.mouse(this)[0];
    var y = d3.mouse(this)[1];
    right.
        append('circle').
        attr('cx',x).
        attr('cy',y).
        attr('r',sliderRight.value()).
        style('fill', 'green');
    setTimeout(deleteCircles, 5000);
}

function whatever(){
    d3.selectAll('circle').on('mouseenter', changeEnter);
    d3.selectAll('circle').on('mouseleave', changeLeave);
}

function changeEnter(){
    d3.select(this).style('fill', 'blue');
}

function changeLeave(){
    d3.select(this).style('fill', 'red');
}

function deleteCircles(){d3.select("circle").remove();}