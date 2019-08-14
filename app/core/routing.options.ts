import {RoutingControllersOptions} from 'routing-controllers'
import * as controlles from '@controllers'
import * as middleware from './routing.middlewares'
import * as interceptors from './interceptors'
import {dictToArray} from '@utils'

export const routingConfigs: RoutingControllersOptions = {
    routePrefix: '/apis',
    controllers: dictToArray(controlles),
    middlewares: dictToArray(middleware),
    interceptors: dictToArray(interceptors),
    validation: true
}
