let switchA = false;
let switchB = false;
let gateType = 'AND';

const gateDescriptions = {
    AND: "Gerbang AND mengeluarkan output 1 jika kedua inputnya 1.",
    OR: "Gerbang OR mengeluarkan output 1 jika salah satu inputnya 1.",
    NOT: "Gerbang NOT mengeluarkan output yang berlawanan dengan inputnya.",
    NAND: "Gerbang NAND mengeluarkan output 0 hanya jika kedua inputnya 1.",
    NOR: "Gerbang NOR mengeluarkan output 1 hanya jika kedua inputnya 0.",
    XOR: "Gerbang XOR mengeluarkan output 1 jika kedua input berbeda.",
    XNOR: "Gerbang XNOR mengeluarkan output 1 jika kedua input sama."
};

function toggleSwitch(switchId) {
    if (switchId === 'A') {
        switchA = !switchA;
        document.getElementById('switchA').classList.toggle('on', switchA);
        document.getElementById('switchA').innerText = switchA ? 'on' : 'off';
        document.getElementById('indicatorA').innerText = switchA ? '1' : '0';
    } else if (switchId === 'B') {
        switchB = !switchB;
        document.getElementById('switchB').classList.toggle('on', switchB);
        document.getElementById('switchB').innerText = switchB ? 'on' : 'off';
        document.getElementById('indicatorB').innerText = switchB ? '1' : '0';
    }
    updateOutput();
}

function changeGateType() {
    gateType = document.getElementById('gateType').value;
    document.getElementById('gate').innerText = gateType;
    document.getElementById('explanationText').innerText = gateDescriptions[gateType];
    updateOutput();
}

function updateOutput() {
    let output = false;
    switch (gateType) {
        case 'AND':
            output = switchA && switchB;
            break;
        case 'OR':
            output = switchA || switchB;
            break;
        case 'NOT':
            output = !switchA;
            break;
        case 'NAND':
            output = !(switchA && switchB);
            break;
        case 'NOR':
            output = !(switchA || switchB);
            break;
        case 'XOR':
            output = switchA !== switchB;
            break;
        case 'XNOR':
            output = switchA === switchB;
            break;
    }
    document.getElementById('lamp').classList.toggle('on', output);
    document.getElementById('indicatorOutput').innerText = output ? '1' : '0';
}

// Initialize
document.getElementById('explanationText').innerText = gateDescriptions[gateType];
