module.exports = function toReadable(number) {

    let ed = {
        '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five',
        '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine',
    };
    let doble = {
        '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen',
        '16': 'sixteen', '17': 'seventeen', '18': 'eighteen', '19': 'nineteen',
    };
    let doble_with_one = {
        '10': 'ten', '20': 'twenty', '30': 'thirty', '40': 'forty', '50': 'fifty',
        '60': 'sixty', '70': 'seventy', '80': 'eighty', '90': 'ninety',
    };

    let str = String(number);

    if (str.match(/^[0-9]$/)) {
        return `${ed[str]}`
    } else if (str.match(/^[1-9]0$/)) {
        return `${doble_with_one[str]}`
    } else if (str.match(/^1[1-9]$/)) {
        return `${doble[str]}`
    } else if (str.match(/^[2-9][1-9]$/)) {
        let value = `${str[0]}0`;
        return `${doble_with_one[value]} ${ed[str[1]]}`
    } else if (str.match(/^[1-9]00$/)) {
        return `${ed[str[0]]} hundred`
    } else if (str.match(/^[1-9]0[1-9]$/)) {
        return `${ed[str[0]]} hundred ${ed[str[2]]}`
    } else if (str.match(/^[1-9][1][1-9]$/)) {
        let value = `${str[1]}${str[2]}`;
        return `${ed[str[0]]} hundred ${doble[value]}`
    } else if (str.match(/^[1-9][1-9][1-9]$/)) {
        let value = `${str[1]}0`;
        return `${ed[str[0]]} hundred ${doble_with_one[value]} ${ed[str[2]]}`
    } else if (str.match(/^[1-9][1-9]0$/)) {
        let value = `${str[1]}0`;
        return `${ed[str[0]]} hundred ${doble_with_one[value]}`
    }
};
