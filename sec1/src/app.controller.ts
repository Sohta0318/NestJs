import { Controller, Get } from "@nestjs/common";
@Controller()
export class AppController {
  @Get("/asdf")
  getRootRouter() {
    return "hi there";
  }

  @Get("/bye")
  getByThere() {
    return "bye There";
  }
}
