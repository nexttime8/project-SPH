服务器：http://gmall-h5-api.atguigu.cn

1. 三级联动 get：/api/product/getBaseCategoryList
2. 搜索 post：/api/list
3. 登录 post：/api/user/passport/login
4. 商品详情 get：/api/item/{ skuId:商品 ID }
5. 购物车 get：/api/cart/cartList
6. 加入购物车 post：/api/cart/addToCart/{ skuId:商品 ID }/{ skuNum:商品增减 }
7. 切换商品选中状态 get：/api/cart/checkCart/{skuI:商品 ID}/{isChecked:选中与否 0 否}
8. 删除商品 **delete**：/api/cart/deleteCart/{skuId}
9. 订单交易页信息 get：/api/order/auth/trade
10. 我的订单列表 get：/api/order/auth/{page:页码}/{limit:每页数量}
11. 提交订单 post：/api/order/auth/submitOrder?tradeNo={tradeNo: 交易编号}
12. 订单支付信息 get：/api/payment/weixin/createNative/{orderId:支付订单 ID}
13. 支付订单状态 get：/api/payment/weixin/queryPayStatus/{orderId:支付订单 ID}
14. 注册验证码 get：/api/user/passport/code
15. 注册用户 post：/api/user/passport/code
16. 退出登录 get：/api/user/passport/logout
17. 用户地址 get：/api/user/userAddress/auth/findUserAddressList
18. ？验证码 get：/api/user/passport/sendCode/{phone:手机号码}
