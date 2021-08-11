
const randn_bm = () => {
	/** Thank you https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve */
	let u = 0, v = 0;
	while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
	while(v === 0) v = Math.random();
	let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
	num = num / 10.0 + 0.5; // Translate to 0 -> 1
	if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1
	return num
  }

const genNormalData = (numPts=30) => {
	const data = []
	const numPoints = numPts;
	for (let i=0;i<numPoints;++i){
		data.push({x: i, y: randn_bm()})
	}
	return data;
}

const genUniformData = (numPts=30) => {
	const data = []
	const numPoints = numPts;
	for (let i=0;i<numPoints;++i){
		data.push({x: i, y: Math.random()})
	}
	return data;
}

const getLimits = (data) => {
	const min = Math.min(...data.sort());
	const max = Math.max(...data.sort());
	return {min: min, max: max}
}

const getMean = (data) =>{
	// Creating the mean with Array.reduce
	let mean = data.reduce((acc, curr)=>{return acc + curr}, 0) / data.length;
	return mean;
	
}

const getStd = (data) =>{
	/**Thank you https://www.geeksforgeeks.org/how-to-get-the-standard-deviation-of-an-array-of-numbers-using-javascript/ */
	let mean = getMean(data);
	data = data.map((k)=>{return (k - mean) ** 2 })
	let sum = data.reduce((acc, curr)=> acc + curr, 0);
	return Math.sqrt(sum / data.length) 
}

const getVar = (data) =>{
	let mean = getMean(data);
	data = data.map((k)=>{return (k - mean) ** 2 })
	let sum = data.reduce((acc, curr)=> acc + curr, 0);
	return sum / data.length 
}

const centerAndScale = (dataPoint, mean, std) => {
	return (dataPoint - mean)/std
}

const getGaussianParams = data => {
	const popVar = getVar(data);
	const popMean = getMean(data)
	return {mean: popMean, variance: popVar}
}

const gaussianKernelFunc = (mean, bw) => {
	const gk = (dataPoint) => {
		const cAs = centerAndScale(dataPoint, mean, bw)
		const K = 1/Math.sqrt((2*Math.PI*bw))
		return K*Math.exp(-cAs*cAs/2)
	}
	return gk
}

const getKDE = (data, bwFactor = 0.2, N=50) => {

	const kdeArray = []
	const { min, max } = getLimits(data);
	const { mean, variance } = getGaussianParams(data);
	const halfBaseWidth = bwFactor * Math.sqrt(variance)

	const minMean = min - 3 * halfBaseWidth;
	const maxMean = max + 3 * halfBaseWidth;
	const range = maxMean - minMean;
	const numDataPoints = data.length;

	for(let i=0;i<N;++i){
		const mean_i = minMean + i/N * range;
		let kde = 0;
		const gkde = gaussianKernelFunc(mean_i, halfBaseWidth);
		for(let j=0;j<numDataPoints;++j){
			kde += gkde(data[j])
		}
		kdeArray.push({x:mean_i, y:kde})
	}
	return kdeArray;
}

const extractYFromData = XYObjectsArray => {
	const ret = [];
	for (let i=0;i<XYObjectsArray.length;++i){
		ret.push(XYObjectsArray[i].y)
	}
	return ret
}

const extractXFromData = XYObjectsArray => {
	const ret = [];
	for (let i=0;i<XYObjectsArray.length;++i){
		ret.push(XYObjectsArray[i].x)
	}
	return ret
}


export const graphOptions = {
	animationEnabled: true,
	title:{
		text: "Random numbers"
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
		alpha: 0.2,
		dataPoints: genNormalData(2000)
	}]

}

/* ,
	{
		name: "Uniform",
		type: "spline",
		showInLegend: true,
		color: "red",
		alpha: 0.2,
		dataPoints: genUniformData(2000)
	} */

export const densityOptions = {
	animationEnabled: true,
	title:{
		text: "Random density plots"
	},
	axisX: {
		valueFormatString: "#.##"
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
		dataPoints: getKDE(extractYFromData(genNormalData(2000)))
	}]

/* 	,
	{
		name: "Uniform",
		type: "spline",
		showInLegend: true,
		color: "red",
		dataPoints: getKDE(extractYFromData(genUniformData(2000)))
	}
 */
}

