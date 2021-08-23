import { getData } from '../../utils/stat.utils.js';

export const densityOptions = {
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
		dataPoints: getData('normal', 2000)
	}]

}
