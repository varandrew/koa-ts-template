import {Get, JsonController} from 'routing-controllers'
import {Environment} from "@core/environments"

@JsonController()
export class LikeController {
    constructor() {
    }

    @Get('/book')
    async book(): Promise<any> {
        return {
            title: '哪吒之魔童降世',
            author: `hello on ${Environment.identity}.`
        }
    }
}
