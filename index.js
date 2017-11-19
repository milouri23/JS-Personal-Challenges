function netIPcalc(hostIP, netmask) {
    hostIP = hostIP.split( "." ).map( Number );
    netmask = netmask.split( "." ).map( Number );
    netIP = [];

    for (let index = 0; index < hostIP.length; index++) {
        netIP.push( hostIP[index] & netmask[index] + 256);
    }

    return netIP.join(".");
}
const hostIP = "172.16.10.4";
const netmask = "255.255.0.0";
console.log( netIPcalc(hostIP, netmask) );