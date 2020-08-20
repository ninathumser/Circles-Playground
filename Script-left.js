d3.csv("https://raw.githubusercontent.com/chumo/Data2Serve/master/transition_clusters.csv")
.then(function(data){
    var mySVGCircleSize = d3.select("#circleSize");
    var circles = mySVGCircleSize.selectAll("circle").data(data);
    
    var sliderLeft = d3.sliderBottom()
        .min(0)
        .max(20)
        .step(1)
        .width(400)
        .ticks(4)
        .default(10)
        .displayValue(true)
        //.fill('grey')
        .handle(
            d3.symbol()
            .type(d3.symbolCircle)
            .size(200)()
        )
        .on('onchange', num => {
            d3.selectAll("circle").remove()
            circles
                .enter()
                    .append("circle")
                    .attr("cx", function (d) {return d.Xi;})
                    .attr("cy", function (d) {return d.Yi;})
                    .attr("r", num)
                    .style('fill', function (d) {return d.color;})
                .transition().delay(500).duration(5000).ease(d3.easeBounceOut)
                    .attr("cx", function (d) {return d.Xf;})
                    .attr("cy", function (d) {return d.Yf;})
            })

    var gSliderLeft = d3
        .select('#slider-circle-size')
        .append('svg')
        .attr('width', 500)
        .attr('height', 100)
        .append('g')
        .attr('transform', 'translate(30,30)');

    gSliderLeft.call(sliderLeft);
    circles.attr('r', sliderLeft.value());

})
