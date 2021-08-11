import { genNormalData } from '../../utils/stat.utils.js';

export const graphOptions = {
	animationEnabled: false,
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
		type: "scatter",
		showInLegend: true,
		markerType: "circle",
		alpha: 0.2,
		color: "blue",
		dataPoints: genNormalData(2000)
	}]

}
