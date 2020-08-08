// Understanding JSON
// JSON stands for JavaScript Object Notation


const macBook = {
    operatingSystem : 'macOS Sierra',
    screenResolutinon : '2880X1800',
    usbPorts: 2
}

const jsonMac = JSON.stringify(macBook)
console.log(jsonMac)

const jsMac = JSON.parse(jsonMac)
console.log(jsMac)


