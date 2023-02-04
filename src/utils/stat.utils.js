const randn_bm = () => {
	/** Thank you https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve */
	let u = 0, v = 0;
	while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
	while(v === 0) v = Math.random();
	let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
	// num = num / 10.0 + 0.5; // Translate to 0 -> 1 and center at 0.5
	// if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1
	return num
}

export const getData = (dataType, length) => {
	return {
		normal: genNormalData(length),
		uniform: genUniformData(length),
		poisson: genPoissonData(length)
	}[dataType]
}

export const genNormalData = (numPts=30) => {
	// console.log(`genNormalData(${numPts})`)
	const data = []
	const numPoints = numPts;
	for (let i=0;i<numPoints;++i){
		data.push({x: i, y: randn_bm()})
	}
	// console.log(`data[0]: ${JSON.stringify(data[0])}`)
	return data;
}

export const genUniformData = (numPts=30) => {
	// console.log(`genUniformData(${numPts})`)
	const data = []
	const numPoints = numPts;
	for (let i=0;i<numPoints;++i){
		data.push({x: i, y: Math.random()})
	}
	// console.log(`data[0]: ${JSON.stringify(data[0])}`)
	return data;
}

export const genPoissonData = (numPts=30) => {
	// console.log(`genPoissonData(${numPts})`)
	const data = []
	const numPoints = numPts;
	const L = Math.exp(-7)
	// console.log(L)
	for (let i=0;i<numPoints;++i){
		let p = 1
		let k = 0
		do {
			k += 1
			p *= Math.random()
			// console.log(p)
		} while (p > L);
		data.push({x: i, y: k-1 })
	}
	// console.log(`data[0]: ${JSON.stringify(data[0])}`)
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

/* const normalizeObjectOfXY = xyData => {
	const sum = xyData.reduce((accume, d) => accume + d, 0);
	const scale = sum / xyData.length;
	return xyData.map(d => d.y/scale);
} */

const normalizeObjectOfXY = xyData => {
	const scale = xyData.reduce((accume, d) => accume + d.y, 0);
	return xyData.map(d => ({...d, y:d.y/scale}));
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
		kdeArray.push({x:mean_i, y:kde})
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
