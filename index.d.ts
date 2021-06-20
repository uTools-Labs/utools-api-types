interface UBrowser {
  /**
   * 设置 User-Agent
   */
  useragent(userAgent: string): this;
  /**
   * 前往
   */
  goto(url: string, headers?: { Referer: string, userAgent: string }): this;
  /**
   * 显示Markdown
   */
  goto(mdText: string, title?: string): this;
  /**
   * 页面大小
   */
  viewport(width: number, height: number): this;
  /**
   * 隐藏 ubrowser 窗口
   */
  hide(): this;
  /**
   * 显示 ubrowser 窗口
   */
  show(): this;
  /**
   * 注入样式
   */
  css(css: string): this;
  /**
   * 键盘按键
   */
  press(key: string, ...modifier: ('control' | 'ctrl' | 'shift' | 'meta' | 'alt' | 'command' | 'cmd')[]): this;
  /**
   * 粘贴
   * @param text 如果是图片的base64编码字符串，粘贴图片，为空只执行粘贴动作
   */
  paste(text?: string): this;
  /**
   * 页面截图
   * @param arg 1.字符串 - 要截取的DOM元素， 2.对象 - 截图位置和大小， 3.空 - 为截取整个窗口
   * @param savePath 截图保存路径，可以是文件夹 或 .png文件完全路径, 默认保存临时目录
   */
  screenshot(arg: string | { x: number, y: number, width: number, height: number }, savePath?: string): this;
  /**
   * 保存为PDF
   * @param options 选项
   * @param savePath PDF保存路径，可以是文件夹 或 .pdf文件完全路径, 默认保存临时目录
   */
  pdf(options?: { marginsType: 0 | 1 | 2, pageSize: ('A3' | 'A4' | 'A5' | 'Legal' | 'Letter' | 'Tabloid') | ({ width: number, height: number }) }, savePath?: string): this;
  /**
   * 模拟设备
   */
  device(arg: ('iPhone 11' | 'iPhone X' | 'iPad' | 'iPhone 6/7/8 Plus' | 'iPhone 6/7/8' | 'iPhone 5/SE' | 'HUAWEI Mate10' | 'HUAWEI Mate20' | 'HUAWEI Mate30' | 'HUAWEI Mate30 Pro') | { size: { width: number, height: number }, useragent: string }): this;
  /**
   * 获取 cookie
   * @param name 为空获取全部cookie
   */
  cookies(name?: string): this;
  /**
   * 设置Cookie
   */
  setCookies(name: string, value: string): this;
  /**
   * 设置Cookie
   */
  setCookies(cookies: { name: string, value: string }[]): this;
  /**
   * 删除 cookie
   */
  removeCookies(name: string): this;
  /**
   * 清空cookie
   * @param url 在执行"goto"前执行 url参数必需
   */
  clearCookies(url?: string): this;
  /**
   * 打开开发者工具
   */
  devTools(mode?: 'right' | 'bottom' | 'undocked' | 'detach'): this;
  /**
   * 执行JS计算 并获得结果
   * @param func 在目标网页中执行
   * @param params 传到 func 中的参数
   */
  evaluate(func: (...params: any[]) => any, ...params: any[]): this;
  /**
   * 等待时间
   * @param ms 毫秒
   */
  wait(ms: number): this;
  /**
   * 等待元素出现
   * @param selector DOM元素
   * @param timeout 超时 默认10000 ms(10秒)
   */
  wait(selector: string, timeout?: number): this;
  /**
   * 等待 JS函数 执行返回 true
   * @param func 执行的JS函数
   * @param timeout 超时 默认10000 ms(10秒)
   * @param params 传到 func 中的参数
   */
  wait(func: (...params: any[]) => boolean, timeout?: number, ...params: any[]): this;
  /**
   * 当元素存在时执行直到碰到 end
   * @param selector DOM元素
   */
  when(selector: string): this;
  /**
   * 当 JS函数执行返回 true 时执行直到碰到 end
   * @param func 执行的JS函数
   * @param params 传到 func 中的参数
   */
  when(func: (...params: any[]) => boolean, ...params: any[]): this;
  /**
   * 配合 when 使用
   */
  end(): this;
  /**
   * 单击元素
   */
  click(selector: string): this;
  /**
   * 元素触发按下鼠标左键
   */
  mousedown(selector: string): this;
  /**
   * 元素触发释放鼠标左键
   */
  mouseup(selector: string): this;
  /**
   * 赋值 file input
   * @param selector <input type='file' /> 元素
   * @param payload 1. string - 文件路径 或 图片的base64编码，2. string[] - 文件路径集合，3. Uint8Array[]
   */
  file(selector: string, payload: string | string[] | Uint8Array): this;
  /**
   * input textarea select 等元素赋值并触发 input 或 change事件
   */
  value(selector: string, value: string): this;
  /**
   * checkbox radio 元素选中或取消选中
   */
  check(selector: string, checked: boolean): this;
  /**
   * 元素获得焦点
   */
  focus(selector: string): this;
  /**
   * 滚动到元素位置
   */
  scroll(selector: string): this;
  /**
   * Y轴滚动
   */
  scroll(y: number): this;
  /**
   * X轴和Y轴滚动
   */
  scroll(x: number,y: number): this;
  /**
   * 运行在闲置的 ubrowser 上
   * @param ubrowserId utools.getIdleUBrowsers() 中获得
   */
  run(ubrowserId: number): Promise<any[]>;
  /**
   * 启动一个 ubrowser 运行
   * @param options
   */
  run(options: {
    show?: boolean,
    width?: number,
    height?: number,
    x?: number,
    y?: number,
    center?: boolean,
    minWidth?: number,
    minHeight?: number,
    maxWidth?: number,
    maxHeight?: number,
    resizable?: boolean,
    movable?: boolean,
    minimizable?: boolean,
    maximizable?: boolean,
    alwaysOnTop?: boolean,
    fullscreen?: boolean,
    fullscreenable?: boolean,
    enableLargerThanScreen?: boolean,
    opacity?: number
  }): Promise<any[]>;
}

interface Display {
  accelerometerSupport: ('available' | 'unavailable' | 'unknown');
  bounds: { x: number, y: number, width: number, height: number };
  colorDepth: number;
  colorSpace: string;
  depthPerComponent: number;
  id: number;
  internal: boolean;
  monochrome: boolean;
  rotation: number;
  scaleFactor: number;
  size: { width: number, height: number };
  touchSupport: ('available' | 'unavailable' | 'unknown');
  workArea: { x: number, y: number, width: number, height: number };
  workAreaSize: { width: number, height: number };
}

declare namespace utools {
  /**
   * 插件装配初始化完成触发
   */
  function onPluginReady(callback: () => void): void;
  /**
   * 插件进入时触发
   */
  function onPluginEnter(callback: (action: {code: string, type: string, payload: any, optional: { type: string, payload: any }[] }) => void): void;
  /**
   * 插件隐藏时触发
   */
  function onPluginOut(callback: () => void): void;
  /**
   * 插件分离时触发
   */
  function onPluginDetach(callback: () => void): void;
  /**
   * 插件从云端拉取到数据时触发
   */
  function onDbPull(callback: (docs: { _id: string, _rev: string }[]) => void): void;
  /**
   * 隐藏主窗口
   * @param isRestorePreWindow 是否焦点回归到前面的活动窗口，默认 true
   */
  function hideMainWindow(isRestorePreWindow?: boolean): boolean;
  /**
   * 显示主窗口
   */
  function showMainWindow(): boolean;
  /**
   * 设置插件自身高度
   */
  function setExpendHeight(height: number): boolean;
  /**
   * 设置子输入框
   * @param onChange 修改时触发
   * @param placeholder 占位符， 默认为空
   * @param isFocus 是否获得焦点，默认为 true
   */
  function setSubInput(onChange: (text: string) => void, placeholder?: string, isFocus?: boolean): boolean;
  /**
   * 移除子输入框
   */
  function removeSubInput(): boolean;
  /**
   * 赋值子输入框
   */
  function setSubInputValue(value: string): boolean;
  /**
   * 子输入框获得焦点
   */
  function subInputFocus(): boolean;
  /**
   * 子输入框获得焦点并选中
   */
  function subInputSelect(): boolean;
  /**
   * 子输入框失去焦点，插件获得焦点
   */
  function subInputBlur(): boolean;
  /**
   * 创建独立窗口
   * @param url 相对路径 html 文件
   * @param options 参考 https://www.electronjs.org/docs/api/browser-window#new-browserwindowoptions
   * @param callback url 加载完成时的回调
   */
  function createBrowserWindow(url: string, options: { width?: number, height?: number }, callback?: () => void): { id: number; };
  /**
   * 隐藏插件到后台
   */
  function outPlugin(): boolean;
  /**
   * 是否深色模式
   */
  function isDarkColors(): boolean;
  /**
   * 获取用户
   */
  function getUser(): { avatar: string, nickname: string, type: string } | null;
  /**
   * 获取用户服务端临时令牌
   */
  function fetchUserServerTemporaryToken(): Promise<{ token: string, expiredAt: number }>;
  /**
   * 打开支付
   * @param callback 支付成功触发
   */
  function openPayment(options: {
    /**
     * 商品ID，在 uTools “开发者” 插件中创建
     */
    goodsId: string,
    /**
     * 第三方服务生成的订单号(可选)
     */
    outOrderId?: string,
    /**
     * 第三方服务附加数据，在查询API和支付通知中原样返回，可作为自定义参数使用(可选)
     */
    attach?: string
  }, callback?: () => void): void;
  /**
   * 获取用户支付记录
   */
  function fetchUserPayments(): Promise<{ order_id: string, total_fee: number, body: string, attach: string, goods_id: string, out_order_id: string, paid_at: string }[]>;
  /**
   * 设置插件动态功能
   */
  function setFeature(feature: {
    code: string,
    explain: string,
    platform: ('darwin' | 'win32' | 'linux') | (Array<'darwin' | 'win32' | 'linux'>),
    icon?: string,
    cmds: string | {
      type: 'img' | 'files' | 'regex' | 'over' | 'window',
      label: string
    }[]
  }): boolean;
  /**
   * 移除插件动态功能
   */
  function removeFeature(code: string): boolean;
  /**
   * 获取插件所有动态功能
   */
  function getFeatures(): {
    code: string,
    explain: string,
    platform: ('darwin' | 'win32' | 'linux') | (Array<'darwin' | 'win32' | 'linux'>),
    icon?: string,
    cmds: string | {
      type: 'img' | 'files' | 'regex' | 'over' | 'window',
      label: string
    }[]
  }[];
  /**
   * 插件间跳转
   */
  function redirect(label: string, payload: string | { type: 'text' | 'img' | 'files', data: any }): void;
  /**
   * 获取闲置的 ubrowser
   */
  function getIdleUBrowsers(): { id: number, title: string, url: string}[];
  /**
   * 设置 ubrowser 代理 https://www.electronjs.org/docs/api/session#sessetproxyconfig
   */
  function setUBrowserProxy(config: {pacScript?: string, proxyRules?: string, proxyBypassRules?: string}): boolean;
  /**
   * 清空 ubrowser 缓存
   */
  function clearUBrowserCache(): boolean;
  /**
   * 显示系统通知
   */
  function showNotification(body: string): void;
  /**
   * 弹出文件选择框
   */
  function showOpenDialog(options: {
    title?: string,
    defaultPath?: string,
    buttonLabel?: string,
    filters?: { name: string, extensions: string[] }[],
    properties?: Array<'openFile' | 'openDirectory' | 'multiSelections' | 'showHiddenFiles' | 'createDirectory' | 'promptToCreate' | 'noResolveAliases' | 'treatPackageAsDirectory' | 'dontAddToRecent'>,
    message?: string,
    securityScopedBookmarks?: boolean
  }): (string[]) | (undefined);
  /**
   * 弹出文件保存框
   */
  function showSaveDialog(options: {
    title?: string,
    defaultPath?: string,
    buttonLabel?: string,
    filters?: { name: string, extensions: string[] }[],
    message?: string,
    nameFieldLabel?: string,
    showsTagField?: string,
    properties?: Array<'showHiddenFiles' | 'createDirectory' | 'treatPackageAsDirectory' | 'showOverwriteConfirmation' | 'dontAddToRecent'>,
    securityScopedBookmarks?: boolean
  }): (string) | (undefined);
  /**
   * 弹出消息框
   */
  function showMessageBox(options: {
    type?: string,
    buttons?: string[],
    defaultId?: number,
    title?: string,
    message: string,
    detail?: string,
    checkboxLabel?: string,
    checkboxChecked?: boolean,
    icon?: string,
    cancelId?: number,
    noLink?: boolean,
    normalizeAccessKeys?: boolean
  }): number;
  /**
   * 插件页面中查找
   */
  function findInPage(text: string, options?: {
    forward?: boolean,
    findNext?: boolean,
    matchCase?: boolean,
    wordStart?: boolean,
    medialCapitalAsWordStart?: boolean
  }): void;
  /**
   * 停止插件页面中查找
   */
  function stopFindInPage (action: 'clearSelection' | 'keepSelection' | 'activateSelection'): void;
  /**
   * 拖拽文件
   */
  function startDrag(file: string | string[]): void;
  /**
   * 屏幕取色
   */
  function screenColorPick(callback: (color: { hex: string, rgb: string }) => void): void;
  /**
   * 屏幕截图
   */
  function screenCapture(callback: (imgBase64: string) => void): void;
  /**
   * 获取本地ID
   */
  function getLocalId(): string;
  /**
   * 获取软件版本
   */
  function getAppVersion(): string;
  /**
   * 获取路径
   */
  function getPath(name: 'home' | 'appData' | 'userData' | 'cache' | 'temp' | 'exe' | 'module' | 'desktop' | 'documents' | 'downloads' | 'music' | 'pictures' | 'videos' | 'logs' | 'pepperFlashSystemPlugin'): string;
  /**
   * 获取文件图标
   */
  function getFileIcon(filePath: string): string;
  /**
   * 复制文件到剪贴板
   */
  function copyFile(file: string | string[]): boolean;
  /**
   * 复制图片到剪贴板
   * @param img base64、buffer、图片路径
   */
  function copyImage(img: string | Uint8Array): boolean;
  /**
   * 复制文本到剪贴板
   */
  function copyText(text: string): boolean;
  /**
   * 获取复制的文件或文件夹
   */
  function getCopyedFiles(): { isFile: boolean, isDirectory: boolean, name: string, path: string }[];
  /**
   * 获取当前文件管理器路径(linux 不支持)
   */
  function getCurrentFolderPath(): string;
  /**
   * 获取当前浏览器URL(linux 不支持)
   * MacOs 支持浏览器 Safari、Chrome、Opera、Vivaldi、Brave
   * Windows 支持浏览器 Chrome、Firefox、Edge、IE、Opera、Brave
   * Linux 不支持
   */
  function getCurrentBrowserUrl(): string;
  /**
   * 默认方式打开给定的文件
   */
  function shellOpenPath(fullPath: string): void;
  /**
   * 在文件管理器中显示给定的文件
   */
  function shellShowItemInFolder(fullPath: string): void;
  /**
   * 系统默认的协议打开URL
   */
  function shellOpenExternal(url: string): void;
  /**
   * 播放哔哔声
   */
  function shellBeep(): void;
  /**
   * 模拟键盘按键
   */
  function simulateKeyboardTap(key: string, ...modifier: ('control' | 'ctrl' | 'shift' | 'option' | 'alt' | 'command' | 'super')[]): void;
  /**
   * 模拟鼠标单击
   */
  function simulateMouseClick(x?: number, y?: number): void;
  /**
   * 模拟鼠标右击
   */
  function simulateMouseRightClick(x?: number, y?: number): void;
  /**
   * 模拟鼠标双击
   */
  function simulateMouseDoubleClick(x?: number, y?: number): void;
  /**
   * 模拟鼠标移动
   */
  function simulateMouseMove(x: number, y: number): void;
  /**
   * 获取鼠标绝对位置
   */
  function getCursorScreenPoint(): { x: number, y: number };
  /**
   * 获取主显示器
   */
  function getPrimaryDisplay(): Display;
  /**
   * 获取所有显示器
   */
  function getAllDisplays(): Display[];
  /**
   * 获取位置所在的显示器
   */
  function getDisplayNearestPoint(point: { x: number, y: number }): Display;
  /**
   * 获取矩形所在的显示器
   */
  function getDisplayMatching(rect: { x: number, y: number, width: number, height: number }): Display;
  /**
   * 是否 MacOs 操作系统
   */
  function isMacOs(): boolean;
  /**
   * 是否 Windows 操作系统
   */
  function isWindows(): boolean;
  /**
   * 是否 Linux 操作系统
   */
  function isLinux(): boolean;

  namespace db {
    /**
     * 创建/更新文档
     */
    function put(doc: { _id: string, _rev?: string }): { id: string, rev?: string, ok?: boolean, error?: boolean, name?: string, message?: string };
    /**
     * 获取文档
     */
    function get(id: string): { _id: string, _rev: string } | null;
    /**
     * 删除文档
     */
    function remove(doc: string | {_id: string, _rev: string}): { id?: string, rev?: string, ok?: boolean, error?: boolean, name?: string, message?: string };
    /**
     * 批量操作文档(新增、修改、删除)
     */
    function bulkDocs(docs: { _id: string, _rev: string }[]): { id: string, rev?: string, ok?: boolean, error?: boolean, name?: string, message?: string }[];
    /**
     * 获取所有文档 可根据文档id前缀查找
     */
    function allDocs(key?: string): { _id: string, _rev: string }[];
    /**
     * 存储附件到文档
     * @param docId 文档ID
     * @param attachment 附件 buffer
     * @param type 附件类型，示例：image/png, text/plain
     */
    function putAttachment(docId: string, attachment: Uint8Array, type: string):{ id: string, rev?: string, ok?: boolean, error?: boolean, name?: string, message?: string };
    /**
     * 获取附件
     * @param docId 文档ID
     */
    function getAttachment(docId: string): Uint8Array | null;
    /**
     * 获取附件类型
     * @param docId 文档ID
     */
    function getAttachmentType(docId: string): string | null;
  }

  namespace dbStorage {
    /**
     * 键值对存储，如果键名存在，则更新其对应的值
     * @param key 键名(同时为文档ID)
     * @param value 键值
     */
    function setItem (key: string, value: any): void;
    /**
     * 获取键名对应的值
     */
    function getItem (key: string): any;
    /**
     * 删除键值对(删除文档)
     */
    function removeItem (key: string): void;
  }

  const ubrowser: UBrowser;
}
