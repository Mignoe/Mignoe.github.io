console.log ("2");
//renderer and start point (it is the only thing that needs react on the whole code).
for (let i = 1; i <= 1024; i++ ){
      
    zone.push(<div className="block pink" id="0"></div>);               
}
zone[start - 1] = <div className="block player" id="0"></div>;
zone[start2 -1] = <div className="block player2" id="0"></div>;
ReactDOM.render(zone, document.getElementById("game"));


//block identifier

for (let i = 1; i <= 1024; i++ ){ 
document.getElementById("0").id = i;
}
//generates first apple
generate();

