import {join} from 'path'
import {print} from '@utils'
import * as dotenv from 'dotenv'

export const before = (): object => {
    const result = dotenv.config({path: join(__dirname, '../../variables.env')})
    if (result.error) {
        print.danger('Environment variable not loaded: not found "variables.env".')
        return {}
    }
    print.log('variables.env loaded.')
    return result.parsed
}

// "after" will trigger after the "container" lift.
export const after = (): any => {
}

// "connected" will trigger after the connects completed.
export const connected = (): any => {
}
