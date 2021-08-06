import { createMachine } from "xstate"

// Events the Machine deals with
type LightEvent =
    | { type: "TIMER" }
    | { type: "POWER_OUTAGE" }
    | { type: "PED_COUNTDOWN"; duration: number}

// The context (extended State)
interface LightContext 
{
    elapsed: number
}

const lightMachine = createMachine<LightContext, LightEvent>({
    key: "light",
    initial: "green",
    states: 
    {
        // green light
        green:
        {
            // events
            on: 
            {
                TIMER: {target: "yellow"},
                POWER_OUTAGE: {target: "red"}
            }
        },
        // yellow light
        yellow:
        {
            // events
            on: 
            {
                TIMER: {target: "red"},
                POWER_OUTAGE: {target: "red"}
            }
        },
        // red light
        red:
        {
            on: 
            {
                TIMER: {target: "green"},
                POWER_OUTAGE: {target: "red"}
            }
        }
    }
})

let {initialState} = lightMachine
console.log(lightMachine.transition(initialState, {type: "TIMER"}).value)
