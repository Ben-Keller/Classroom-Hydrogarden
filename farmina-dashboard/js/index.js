var config = {
    apiKey: "AIzaSyCJvtBdqcl8Xv-Y1Sic9_kbw1mfvwYSCHc",
    authDomain: "farmina-5c940.firebaseapp.com",
    databaseURL: "https://farmina-5c940.firebaseio.com",
    projectId: "farmina-5c940",
    storageBucket: "farmina-5c940.appspot.com",
    messagingSenderId: "1059659889306"
  };
  firebase.initializeApp(config);
var database = firebase.database();

function handleLoadEvent() {
  var myFirebaseRef = new Firebase("htts://farmina-5c940.firebaseio.com/");
  myFirebaseRef.on("value", getDataFromFirebase);
}
var sensorValTime;
function getDataFromFirebase(snapshot) {
  //console.log(snapshot);
    sensorValTime=snapshot.val().sensor;
    console.log(sensorValTime);
 
}

var tau = 2 * Math.PI; // http://tauday.com/tau-manifesto

// An arc function with all values bound except the endAngle. So, to compute an
// SVG path string for a given angle, we pass an object with an endAngle
// property to the `arc` function, and it will return the corresponding string.
var arc = d3.arc()
    .innerRadius(90)
    .outerRadius(120)
    .startAngle(0);

// Get the SVG container, and apply a transform such that the origin is the
// center of the canvas. This way, we don’t need to position arcs individually.
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
   g = svg.append("g").attr("transform", "translate(" + width / 4 + "," + height / 2 + ")");



// Add the background arc, from 0 to 100% (tau).
var background1 = g.append("path")
    .datum({endAngle: tau})
    .style("fill", "#ddd")
    .attr("d", arc).attr("transform", "translate(" + 0 + "," + -30 + ")");;
var background2 = g.append("path")
    .datum({endAngle: tau})
    .style("fill", "#ddd")
    .attr("d", arc).attr("transform", "translate(" + width / 3.5 + "," +-30 + ")");
var background3 = g.append("path")
    .datum({endAngle: tau})
    .style("fill", "#ddd")
    .attr("d", arc).attr("transform", "translate(" + width / 1.75 + "," + -30 + ")");
// Add the foreground arc in orange, currently showing 12.7%.
var background4 = g.append("path")
    .datum({endAngle: tau})
    .style("fill", "#ddd")
    .attr("d", arc).attr("transform", "translate(" + width / 7 + "," + 190 + ")");
var background5 = g.append("path")
    .datum({endAngle: tau})
    .style("fill", "#ddd")
    .attr("d", arc).attr("transform", "translate(" + width / 2.35 + "," + 190 + ")");
var foreground1 = g.append("path")
    .datum({endAngle: 0.127 * tau})
    .style("fill", "green")
    .attr("d", arc).attr("transform", "translate(" + 0 + "," + -30 + ")");
var foreground2 = g.append("path")
    .datum({endAngle: 0.127 * tau})
    .style("fill", "yellow")
    .attr("d", arc).attr("transform", "translate(" + width / 3.5 + "," + -30 + ")");
var foreground3= g.append("path")
    .datum({endAngle: 0.127 * tau})
    .style("fill", "orange")
    .attr("d", arc).attr("transform", "translate(" + width / 1.75 + "," + -30 + ")");
var foreground4= g.append("path")
    .datum({endAngle: 0.127 * tau})
    .style("fill", "red")
    .attr("d", arc).attr("transform", "translate(" + width / 7 + "," + 190 + ")");
var foreground5= g.append("path")
    .datum({endAngle: 0.127 * tau})
    .style("fill", "blue")
    .attr("d", arc).attr("transform", "translate(" + width / 2.35 + "," + 190 + ")");
var humidity=g.append("text").attr("font-size",40).attr("x",-32).attr("y",-15);
var temperature=g.append("text").attr("font-size",40).attr("x",500).attr("y",-15);
var lux = g.append("text").attr("font-size",40).attr("x",230).attr("y",-15);
var waterlevel=g.append("text").attr("font-size",40).attr("x",352).attr("y",210);
var watertemp = g.append("text").attr("font-size",40).attr("x",80).attr("y",210);

var title= g.append("text").attr("font-size",34).attr("x",200).attr("y",-210);
var title1=g.append("text").attr("font-size",17).attr("x",-30).attr("y",-70);
var title2=g.append("text").attr("font-size",17).attr("x",260).attr("y",-70);
var title3=g.append("text").attr("font-size",17).attr("x",515).attr("y",-70);
var title4=g.append("text").attr("font-size",17).attr("x",370).attr("y",160);
var title5=g.append("text").attr("font-size",17).attr("x",100).attr("y",160);


// Every so often, start a transition to a new random angle. The attrTween
// definition is encapsulated in a separate function (a closure) below.
  
d3.interval(function() {
  foreground1.transition()
      .duration(750)
      .attrTween("d", arcTween(Object.values(sensorValTime)[0]/100 * tau));
  foreground2.transition()
      .duration(750)
      .attrTween("d", arcTween(Object.values(sensorValTime)[1]/1200 * tau));
  foreground3.transition()
      .duration(750)
           .attrTween("d", arcTween(Object.values(sensorValTime)[2]/60 * tau));
  foreground4.transition()
      .duration(750)
           .attrTween("d", arcTween(Object.values(sensorValTime)[3]/600 * tau));
  foreground5.transition()
      .duration(750)
           .attrTween("d", arcTween(Object.values(sensorValTime)[4]/-160 * tau));
  

humidity.text(Object.values(sensorValTime)[0]+"%");
lux.text(Object.values(sensorValTime)[1]+" lx");
temperature.text(Object.values(sensorValTime)[2]/2-2+" C")
waterlevel.text(Object.values(sensorValTime)[3]/40+" cm")
watertemp.text(Object.values(sensorValTime)[4]/(-5)-6+" C")
  
title.text("Dashboard");
title1.text(Object.keys(sensorValTime)[0]);
title2.text(Object.keys(sensorValTime)[1]);
title3.text(Object.keys(sensorValTime)[2]);
title4.text(Object.keys(sensorValTime)[3]);
title5.text(Object.keys(sensorValTime)[4]);
}, 1500);

// Returns a tween for a transition’s "d" attribute, transitioning any selected
// arcs from their current angle to the specified new angle.
function arcTween(newAngle) {

  // The function passed to attrTween is invoked for each selected element when
  // the transition starts, and for each element returns the interpolator to use
  // over the course of transition. This function is thus responsible for
  // determining the starting angle of the transition (which is pulled from the
  // element’s bound datum, d.endAngle), and the ending angle (simply the
  // newAngle argument to the enclosing function).
  return function(d) {

    // To interpolate between the two angles, we use the default d3.interpolate.
    // (Internally, this maps to d3.interpolateNumber, since both of the
    // arguments to d3.interpolate are numbers.) The returned function takes a
    // single argument t and returns a number between the starting angle and the
    // ending angle. When t = 0, it returns d.endAngle; when t = 1, it returns
    // newAngle; and for 0 < t < 1 it returns an angle in-between.
    var interpolate = d3.interpolate(d.endAngle, newAngle);

    // The return value of the attrTween is also a function: the function that
    // we want to run for each tick of the transition. Because we used
    // attrTween("d"), the return value of this last function will be set to the
    // "d" attribute at every tick. (It’s also possible to use transition.tween
    // to run arbitrary code for every tick, say if you want to set multiple
    // attributes from a single function.) The argument t ranges from 0, at the
    // start of the transition, to 1, at the end.
    return function(t) {

      // Calculate the current arc angle based on the transition time, t. Since
      // the t for the transition and the t for the interpolate both range from
      // 0 to 1, we can pass t directly to the interpolator.
      //
      // Note that the interpolated angle is written into the element’s bound
      // data object! This is important: it means that if the transition were
      // interrupted, the data bound to the element would still be consistent
      // with its appearance. Whenever we start a new arc transition, the
      // correct starting angle can be inferred from the data.
      d.endAngle = interpolate(t);

      // Lastly, compute the arc path given the updated data! In effect, this
      // transition uses data-space interpolation: the data is interpolated
      // (that is, the end angle) rather than the path string itself.
      // Interpolating the angles in polar coordinates, rather than the raw path
      // string, produces valid intermediate arcs during the transition.
      return arc(d);
    };
  };
}



var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = new Image();
var img2 = new Image();

function drawImage() {
    ctx.drawImage(img, 0, 0,384,236);
};

function drawImage2(){
  
  ctx.drawImage(img2,0,0,1000,236);
};
img.onload = drawImage;
img2.onload=drawImage2;


img2.src='https://storage.googleapis.com/farmina1/data.png';

img.src = 'https://storage.googleapis.com/farmina1/Zebras.jpg';



function LEDControl() {
  // Get the checkbox
  var checkBox = document.getElementById("LED");
  // Get the output text
  

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
   writeData("LED",1);
  } else {
   writeData("LED",0);
    
  }
}
function pumpControl() {
  // Get the checkbox
  var checkBox = document.getElementById("pump1");
  // Get the output text
  

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
   writeData("Pump1",1);
  } else {
   writeData("Pump1",0);
     }
}



function writeData(state,number) {
// your first write should be set() rather than update
  var obj = {};
obj[state] = number;

  
  database.ref('settings').update(
    obj
  );
}