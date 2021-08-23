import { getData } from '../../utils/stat.utils.js';

export const densityOptions = {
	animationEnabled: false,
	title:{
		text: "Density"
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
		dataPoints: getData('normal', 2000)
	}]

}
