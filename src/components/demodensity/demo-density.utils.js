import { genNormalData, getKDE, extractYFromData   } from '../../utils/stat.utils.js';

export const densityOptions = {
	animationEnabled: false,
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
}

