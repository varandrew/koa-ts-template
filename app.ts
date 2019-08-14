import {Server} from 'http'
import {print} from "@utils"
import {Environment} from '@core/environments'
import {createServer} from '@core/application'
import * as bootstrap from '@core/bootstrap'

module.exports = (async (): Promise<Server> => {
    try {
        const app = await createServer()

        return app.listen(Environment.port, () => {
            print.log(`server listening on ${Environment.port}, in ${Environment.identity} mode.`)
            bootstrap.after()
        })
    } catch (e) {
        console.log(e)
    }
})()
