export const defaultOptions = {
	animationEnabled: false,
	title:{
		text: "Density"
	},
	axisX: {
		valueFormatString: "#.##"
	},
	axisY: {
		title: "Density",
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
		type: "line",
		showInLegend: true,
		markerType: null,
		alpha: 0.2,
		color: "blue",
		dataPoints: []
	}]

}

export const getDataGraphOptions = (graphtype) =>{
	const options = defaultOptions;
	switch (graphtype) {
		case  "normal":{
			const ret = Object.assign(options, {
				title:{text:"Normal"},
				axisY:{title:"Value"},
				data:{name:graphtype} 
			});
			return ret;
		}
		case  "uniform":{
			const ret = Object.assign(options, {
				title:{text:"Uniform"},
				axisY:{title:"Value"},
				data:{name:graphtype} 
			});
			return ret;
		}
		default:
			return defaultOptions;		
	}
}