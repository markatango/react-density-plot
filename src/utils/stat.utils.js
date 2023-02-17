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
// eslint-disable-next-line
const getStd = (data) =>{
	/** Thank you https://www.geeksforgeeks.org/how-to-get-the-standard-deviation-of-an-array-of-numbers-using-javascript/ */
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

const normalizeObjectOfXY = xyData => {
	const scale = xyData.reduce((accume, d) => accume + d.x, 0);
	return xyData.map(d => ({...d, x:d.x/scale}));
}

export const getKDE = (data, bwFactor = 0.2, N=100) => {

	const kdeArray = []
	const { min, max } = getLimits(data);
	const { variance } = getGaussianParams(data);
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
		kdeArray.push({y:mean_i, x:kde})
	}
	return normalizeObjectOfXY(kdeArray);
}

export const extractYFromData = XYObjectsArray => {
	const ret = [];
	for (let i=0;i<XYObjectsArray.length;++i){
		ret.push(XYObjectsArray[i].y)
	}
	return ret
}

export const extractXFromData = XYObjectsArray => {
	const ret = [];
	for (let i=0;i<XYObjectsArray.length;++i){
		ret.push(XYObjectsArray[i].x)
	}
	return ret
}
