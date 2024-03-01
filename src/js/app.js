import getHealthState from './hp';

console.log(getHealthState({ name: 'Маг', health: 14 }));

import sorting from './sort';

console.log(sorting([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
]));
