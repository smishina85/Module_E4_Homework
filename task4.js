// task 4 module E4
function El_device(name, place, cons_power){
    this.cons_power = cons_power
    this.name = name
    this.place = place
    this.status = false
}
El_device.prototype.getPower = function(){
    console.log(`Consumer power of ${this.name} is  ${this.cons_power} vt`)
}
El_device.prototype.onSwitch = function() {
    if (this.status) {
        console.log(`Device ${this.name} already switched on`)}
    else
        {
            this.status = true
            console.log(`Device ${this.name} switched on`)
        }
    }
El_device.prototype.offSwitch = function() {
    if (this.status) {
        this.status = false
        console.log(`Device ${this.name}  switched off`)}
    else
    {
        console.log(`Device ${this.name} switched off already`)
    }
}
// another version of the switch on/off of the device
El_device.prototype.on_off_Switch = function(action) {
    switch (action) {
        case 'on':
            this.status = true
            console.log(`Device ${this.name} switched on`);
            break;
        case 'off':
            this.status = false
            console.log(`Device ${this.name}  switched off`);
            break;
        default:
            console.log('This action is not available for this device')
            break;
    }
}
El_device.prototype.location = function(){
    console.log(`Device ${this.name} is located in the ${this.place}`)
}
function El_device_wth_lamps(name, lamp_qty, lamp_volt){
    this.name = name
    this.lamp_qty = lamp_qty
    this.lamp_volt = lamp_volt
}
El_device_wth_lamps.prototype = new El_device()
El_device_wth_lamps.prototype.getPower = function(){
    console.log(`Device ${this.name} has total power consumption as ${this.lamp_qty * this.lamp_volt} vt`)
}

const comp = new El_device('macbook', 'cabinet', 3)
const printer = new El_device('printer', 'cabinet', 5)
const desk_lamp = new El_device_wth_lamps('lamp on the desk', 1, 20)
const kitchen_lamp = new El_device_wth_lamps('kitchen lamp', 5, 20)
comp.getPower()
printer.getPower()
desk_lamp.getPower()
kitchen_lamp.getPower()
comp.onSwitch()
printer.offSwitch()
desk_lamp.onSwitch()
kitchen_lamp.onSwitch()
comp.offSwitch()
comp.location()
desk_lamp.place = 'sleeping room'
kitchen_lamp.place = 'kitchen'
desk_lamp.location()
if (comp.status === false){
    comp.on_off_Switch('on')
}
desk_lamp.on_off_Switch('get out')

