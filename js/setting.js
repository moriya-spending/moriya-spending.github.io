/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'budget_sendai_miyagi';
OpenSpending.year = '2013';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* Sendai/Miyagi cofog */

	'20130100': { icon: 'icons/government-uk.svg',  color: '#32CD32', bcolor: '#32CD32' },
	'20130101': { icon: 'icons/government-uk.svg',  color: '#32CD32', bcolor: '#DCDCDC' },

	'20130200': { icon: 'icons/forest.svg', color: '#32CD32', bcolor: '#32CD32' },
	'20130201': { icon: 'icons/forest.svg', color: '#32CD32', bcolor: '#1E90FF' },
	'20130202': { icon: 'icons/forest.svg', color: '#32CD32', bcolor: '#6495ED' },
	'20130203': { icon: 'icons/forest.svg', color: '#32CD32', bcolor: '#00BFFF' },
	'20130204': { icon: 'icons/forest.svg', color: '#32CD32', bcolor: '#87CEFA' },
	'20130205': { icon: 'icons/forest.svg', color: '#32CD32', bcolor: '#ADD8E6' },
	'20130206': { icon: 'icons/forest.svg', color: '#32CD32', bcolor: '#B0E0E6' },

	'20130300': { icon: 'icons/civilian-action.svg', color: '#32CD32', bcolor: '#32CD32' },
	'20130301': { icon: 'icons/civilian-action.svg', color: '#32CD32', bcolor: '#F08080' },
	'20130302': { icon: 'icons/civilian-action.svg', color: '#32CD32', bcolor: '#FA8072'},
	'20130303': { icon: 'icons/civilian-action.svg', color: '#32CD32', bcolor: '#FFA07A' },

	'20130400': { icon: 'icons/health.svg', color: '#32CD32', bcolor: '#32CD32' },
	'20130401': { icon: 'icons/health.svg', color: '#32CD32', bcolor: '#FFE4E1' },
	'20130402': { icon: 'icons/health.svg', color: '#32CD32', bcolor: '#FFF0F5' },
	'20130403': { icon: 'icons/health.svg', color: '#32CD32', bcolor: '#FFF5EE' },
	'20130404': { icon: 'icons/health.svg', color: '#32CD32', bcolor: '#FDF5E6' },
	'20130405': { icon: 'icons/health.svg', color: '#32CD32', bcolor: '#FFFFF0' },
	'20130406': { icon: 'icons/health.svg', color: '#32CD32', bcolor: '#F0FFF0' },
	'20130407': { icon: 'icons/health.svg', color: '#32CD32', bcolor: '#F5FFFA' },

	'20130500': { icon: 'icons/environment.svg', color: '#32CD32', bcolor: '#32CD32' },
	'20130501': { icon: 'icons/environment.svg', color: '#32CD32', bcolor: '#32CD32' },

	'20130600': { icon: 'icons/economy-tourism.svg', color: '#32CD32', bcolor: '#32CD32' },
	'20130601': { icon: 'icons/economy-tourism.svg', color: '#32CD32', bcolor: '#DDA0DD' },
	'20130602': { icon: 'icons/farms.svg',           color: '#32CD32', bcolor: '#CD853F' },

	'20130700': { icon: 'icons/our-streets.svg', color: '#32CD32', bcolor: '#32CD32' },
	'20130701': { icon: 'icons/our-streets.svg', color: '#32CD32', bcolor: '#BDB76B' },
	'20130702': { icon: 'icons/our-streets.svg', color: '#32CD32', bcolor: '#EEE8AA' },
	'20130703': { icon: 'icons/our-streets.svg', color: '#32CD32', bcolor: '#FFF8DC' },
	'20130704': { icon: 'icons/our-streets.svg', color: '#32CD32', bcolor: '#F5F5DC' },
	'20130705': { icon: 'icons/our-streets.svg', color: '#32CD32', bcolor: '#F5DEB3' },
	'20130706': { icon: 'icons/our-streets.svg', color: '#32CD32', bcolor: '#DEB887' },
	'20130707': { icon: 'icons/our-streets.svg', color: '#32CD32', bcolor: '#D2B48c' },

	'20130800': { icon: 'icons/fire-brigade.svg', color: '#32CD32', bcolor: '#32CD32' },
	'20130801': { icon: 'icons/fire-brigade.svg', color: '#32CD32', bcolor: '#87CEFA' },

	'20130900': { icon: 'icons/education.svg', color: '#32CD32', bcolor: '#32CD32' },
	'20130901': { icon: 'icons/education.svg', color: '#32CD32', bcolor: '#3CB371' },
	'20130902': { icon: 'icons/education.svg', color: '#32CD32', bcolor: '#66CDAA' },
	'20130903': { icon: 'icons/education.svg', color: '#32CD32', bcolor: '#8FBC8F' },
	'20130904': { icon: 'icons/education.svg', color: '#32CD32', bcolor: '#7FFFD4' },
	'20130905': { icon: 'icons/education.svg', color: '#32CD32', bcolor: '#98FB98' },
	'20130906': { icon: 'icons/education.svg', color: '#32CD32', bcolor: '#90EE90' },
	'20130907': { icon: 'icons/education.svg', color: '#32CD32', bcolor: '#00FF7F' },
	'20130908': { icon: 'icons/education.svg', color: '#32CD32', bcolor: '#00FA9A' },
	'20130909': { icon: 'icons/education.svg', color: '#32CD32', bcolor: '#7CFC00' },

	'20131000': { icon: 'icons/economic-aid.svg', color: '#32CD32', bcolor: '#32CD32' },
	'20131001': { icon: 'icons/economic-aid.svg', color: '#32CD32', bcolor: '#DC143C' },

	'20131100': { icon: 'icons/aid-developing-countries.svg', color: '#32CD32', bcolor: '#32CD32' },
	'20131101': { icon: 'icons/aid-developing-countries.svg', color: '#32CD32', bcolor: '#32CD32' },

	'20131200': { icon: 'icons/publicaffairs.svg', color: '#32CD32', bcolor: '#32CD32' },
	'20131201': { icon: 'icons/publicaffairs.svg', color: '#32CD32', bcolor: '#C0C0C0' },

	'20131300': { icon: 'icons/money.svg', color: '#32CD32', bcolor: '#32CD32' },
	'20131301': { icon: 'icons/money.svg', color: '#32CD32', bcolor: '#808080' }
};


