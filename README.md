# 类型定义

uTools 提供官方的 API 类型定义，可在插件应用开发过程中获得代码提示和类型检查支持。

## uTools API 类型定义

[`utools-api-types`](https://github.com/uTools-Labs/utools-api-types) 是 uTools 官方维护的 TypeScript 类型定义库，提供当前 `utools` API 的完整类型定义，并会随着 uTools API 的版本迭代持续更新。

无论使用 JavaScript 还是 TypeScript 开发插件应用，都可以借助它获得 `utools` API 的代码提示和类型检查。

> `utools-api-types` 基于全局变量 `utools` 进行类型声明，安装并配置后无需手动引入，编辑器即可自动识别。

## 安装

在项目中安装 `utools-api-types`：

::: code-group

```shell [npm]
npm install utools-api-types --save-dev
```

```shell [pnpm]
pnpm add -D utools-api-types
```

```shell [yarn]
yarn add -D utools-api-types
```

:::

## JavaScript 项目

### 配置 jsconfig.json

在项目根目录创建 `jsconfig.json`，并在 `compilerOptions.types` 中引入 `utools-api-types`：

```json5
{
  "compilerOptions": {
    "types": ["utools-api-types"]
  },
  "include": [
    // 需要类型提示和类型检查的文件范围，请根据项目实际目录结构调整
    "src/**/*.js",
    "bridge/**/*.js"
  ]
}
```

## TypeScript 项目

### 配置 tsconfig.json

在 `tsconfig.json` 的 `compilerOptions.types` 中添加 `utools-api-types`：

```json5
{
  "compilerOptions": {
    "types": ["utools-api-types"]
  },
  "include": [
    // 需要类型提示和类型检查的文件范围，请根据项目实际目录结构调整
    "src/**/*.ts",
    "bridge/**/*.js"
  ]
}
```

字段说明：

| 字段 | 说明 |
| --- | --- |
| `compilerOptions.types` | 指定参与类型检查的全局类型定义包，需包含 `utools-api-types` |
| `include` | 指定需要提供代码提示和类型检查的文件范围，请根据项目实际目录结构调整 |

> 如果项目已经通过其他方式配置了 `types`，请将 `utools-api-types` 追加到现有配置中，避免覆盖原有类型定义。

## 验证代码提示

配置完成后，在 `include` 范围内的文件中输入 `window.utools.`，编辑器即可提示可用的 API：

```js
window.utools.
```

编辑器还会根据 API 类型定义提供参数提示、返回值提示和类型检查。例如：

```js
window.utools.showNotification('hello world')
```

## 常见问题

### 编辑器没有代码提示

- 确认已安装 `utools-api-types`，并在 `jsconfig.json` 或 `tsconfig.json` 中完成配置。
- 确认当前编辑的文件处于 `include` 指定的文件范围内。
- 若修改配置后仍无提示，请重启编辑器，或重新加载 TypeScript/JavaScript 语言服务。

### 与已有 types 配置冲突

如果项目已通过其他方式配置了 `compilerOptions.types`，请将 `utools-api-types` 追加到现有数组中，避免覆盖原有类型定义。

### 类型定义与实际版本不一致

`utools-api-types` 会随 uTools API 版本迭代更新，如发现类型缺失或过期，请升级到最新版本：

```shell
npm install utools-api-types@latest --save-dev
```