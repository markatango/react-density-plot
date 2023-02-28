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
	const L = Math.exp(-2)
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

