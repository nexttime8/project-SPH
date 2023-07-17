import Mock from "mockjs"

import banner from "./banners.json"
import floor from "./floors.json"

Mock.mock("/mock/banners", { code: 200, data: banner })
Mock.mock("/mock/floors", { code: 200, data: floor })
