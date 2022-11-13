/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa7e4b42fd7949bcf',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'a0e833c62562394da9c11ad7a4549d91',

  PROVINCE: '广东',
  CITY: '深圳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '郭郭同学',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o7p4I6N78W6oSPyAKmev9_ZJMSH0',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'eWwKpboUcbqiHajiGUfAufVy0LD58iIUbPmsoMm2HPg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-21',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '郭郭同学', year: '1991', date: '11-05',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '郭郭同学', year: '1991', date: '01-21',
        },
        {
          type: '节日', name: '结婚纪念日', year: '2020', date: '10-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2010-07-07' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2020-10-03' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'mgJzJSxEsiS7NGTK7oNnk_YSVZVpU5o5H9CIhg3jlrY',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o7p4I6N78W6oSPyAKmev9_ZJMSH0',
    }
  ],

}

module.exports = USER_CONFIG

