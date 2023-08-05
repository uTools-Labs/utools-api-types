## uTools API 代码提示

第一步 
```bash
npm install utools-api-types --save-dev
```

第二步 配置 tsconfig.json

```json
{
  "compilerOptions": {
    "types": [
      "utools-api-types"
    ]
  }
}
```

## API 代码示例

```javascript
// 默认浏览器打开网页
window.utools.shellOpenExternal('https://u.tools')

// 在资源管理器中显示文件
window.utools.shellShowItemInFolder('d:\\test')

// ubrowser 网页自动化
window.utools.ubrowser.goto('https://cn.bing.com')
  .value('#sb_form_q', 'uTools')
  .click('#sb_form_go')
  .run({ width: 1000, height: 600 })

// 值键对方式存储数据
window.utools.dbStorage.setItem('key', 'value')

// 执行截图
window.utools.screenCapture((imagebase64) => {
  // 截图完的回调
})

// 执行取色
window.utools.screenColorPick(({ hex, rgb }) => {
  // 取色完的回调
})
```