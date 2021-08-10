
const randn_bm = () => {
	let u = 0, v = 0;
	while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
	while(v === 0) v = Math.random();
	let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
	num = num / 10.0 + 0.5; // Translate to 0 -> 1
	if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1
	return num
  }

const genNormalData = () => {
	const data = []
	const numPoints = 30;
	for (let i=0;i<numPoints;++i){
		data.push({x: i, y: randn_bm()})
	}
	return data;
}

const genUniformData = () => {
	const data = []
	const numPoints = 30;
	for (let i=0;i<numPoints;++i){
		data.push({x: i, y: Math.random()})
	}
	return data;
}


export const graphOptions = {
	animationEnabled: true,
	title:{
		text: "Gaussian random numbers"
	},
	axisX: {
		valueFormatString: "#"
	},
	axisY: {
		title: "Random number",
	},
	legend:{
		cursor: "pointer",
		fontSize: 16,
	},
	toolTip:{
		shared: true
	},
	data: [{
		name: "Normal",
		type: "spline",
		showInLegend: true,
		dataPoints: genNormalData()
	},
	{
		name: "Uniform",
		type: "spline",
		showInLegend: true,
		color: "red",
		dataPoints: genUniformData()
	},
	{
		name: "More Uniform",
		type: "spline",
		showInLegend: true,
		color: "green",
		dataPoints: genUniformData()
	}]

}

