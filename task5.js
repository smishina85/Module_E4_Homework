// task 5 - the same as task 4 but to be done by class

class El_device {
    constructor(name, place, cons_power){
        this.name = name;
        this.cons_power = cons_power;
        this.place = place;
        this.status = false
    }
    getPower() {
        console.log(`Consumer power of ${this.name} is  ${this.cons_power} vt`)
    }
    on_off_Switch(action) {
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
    location() {
        console.log(`Device ${this.name} is located in the ${this.place}`)
    }
}
class El_device_wth_lamps extends El_device {
    constructor(name, lamp_qty, lamp_volt) {
        super(lamp_qty);
        this.name = name;
        this.lamp_qty = lamp_qty;
        this.lamp_volt = lamp_volt
    }
    getPower() {
        if (this.lamp_qty > 0) {
        console.log(`Device ${this.name} has total power consumption as ${this.lamp_qty * this.lamp_volt} vt`)
    } else {
            this.cons_power = this.lamp_volt
            return super.getPower()
        }
    }
}

const comp = new El_device('macbook', 'cabinet', 3)
const printer = new El_device('printer', 'cabinet', 5)
const desk_lamp = new El_device_wth_lamps('lamp on the desk', 1, 20)
const kitchen_lamp = new El_device_wth_lamps('kitchen lamp', 5, 20)
const monitor = new El_device_wth_lamps('Dell monitor', 0, 7)
comp.getPower()
printer.getPower()
desk_lamp.getPower()
kitchen_lamp.getPower()
comp.on_off_Switch('on')
printer.on_off_Switch('on')
desk_lamp.on_off_Switch('on')
kitchen_lamp.on_off_Switch('on')
comp.on_off_Switch('off')
comp.location()
desk_lamp.place = 'sleeping room'
kitchen_lamp.place = 'kitchen'
desk_lamp.location()
if (comp.status === false){
    comp.on_off_Switch('on')
}
desk_lamp.on_off_Switch('get out')
monitor.getPower()
