/* eslint-disable */

export {};

// 说明：Buffer 是 Node.js 提供的类型（@types/node）。此处以模块内类型别名的方式
// 等价为 Uint8Array：未安装 @types/node 时依然可用，安装后也不会与官方的全局 Buffer 声明冲突。
type Buffer = Uint8Array;

// 说明：Sharp 类型取自 sharp 官方类型定义，具备完整的实例方法与链式调用类型。
type Sharp = import('sharp').Sharp;

declare global {
  // ---------------------------------------------------------------------------
  // 类型定义
  // ---------------------------------------------------------------------------

  // ── 事件

  /**
   * 插件应用进入事件参数
   */
  interface PluginEnterAction {
    /**
     * 对应 plugin.json 中 feature.code
     */
    code: string;
    /**
     * 指令类型
     *
     * 对应 plugin.json 中 feature.cmds 配置：
     *
     * - text：功能指令
     * - img / files / regex / over / window：匹配指令
     */
    type: "text" | "img" | "files" | "regex" | "over" | "window";
    /**
     * 根据指令类型对应的数据：
     *
     * - text：触发的功能指令名称
     * - regex / over：匹配到的文本
     * - img：匹配到的图像 Base64 Data URL
     * - files：匹配到的文件或文件夹列表
     * - window：匹配到的当前系统窗口信息
     */
    payload: string | MatchFile[] | MatchWindow;
    /**
     * 进入插件应用的来源
     *
     * - main：通过 uTools 搜索框进入
     * - panel：通过超级面板进入
     * - hotkey：通过全局快捷键进入
     * - redirect：其他插件应用通过 API utools.redirect() 进入
     */
    from: "main" | "panel" | "hotkey" | "redirect";
    /**
     * 附加信息
     *
     * 仅通过 onMainPush 推送结果进入时提供
     */
    option?: {
      /**
       * 用户选择的推送结果文本
       */
      text?: string;
    };
  }

  /**
   * 匹配到的文件或文件夹信息
   */
  interface MatchFile {
    /**
     * 是否为文件
     */
    isFile: boolean;
    /**
     * 是否为文件夹
     */
    isDirectory: boolean;
    /**
     * 文件或文件夹名称
     */
    name: string;
    /**
     * 文件或文件夹绝对路径
     */
    path: string;
  }

  /**
   * 匹配到的窗口信息
   */
  interface MatchWindow {
    /**
     * 窗口唯一标识
     */
    id: number;
    /**
     * 窗口标题
     */
    title: string;
    /**
     * 窗口左上角 X 坐标
     */
    x: number;
    /**
     * 窗口左上角 Y 坐标
     */
    y: number;
    /**
     * 窗口宽度
     */
    width: number;
    /**
     * 窗口高度
     */
    height: number;
    /**
     * 应用程序路径
     */
    appPath: string;
    /**
     * 应用进程 ID
     */
    pid: number;

    /**
     * 应用名称
     */
    app: string;
  }

  /**
   * 定时任务触发事件参数
   */
  interface ScheduleTriggerAction {

    /**
     * 定时任务唯一标识
     *
     * 对应 utools.requestSchedule({
     *   code,
     *   label,
     *   trigger
     * })
     * 中设置的 code
     */
    code: string;
  }

  /**
   * 搜索框推送请求参数
   */
  interface MainPushAction {
    /**
     * 对应 plugin.json 中 feature.code
     */
    code: string;
    /**
     * 指令类型
     *
     * 对应 plugin.json 中 feature.cmds 配置：
     *
     * - text：功能指令
     * - img / files / regex / over / window：匹配指令
     */
    type: "text" | "img" | "files" | "regex" | "over" | "window";
    /**
     * 根据指令类型对应的数据：
     *
     * - text：触发的功能指令名称
     * - regex / over：匹配到的文本
     * - img：匹配到的图像 Base64 Data URL
     * - files：匹配到的文件或文件夹列表
     * - window：匹配到的当前系统窗口信息
     */
    payload: string | MatchFile[] | MatchWindow;
  }

  /**
   * 向搜索框推送结果
   */
  interface MainPushResult {
    /**
     * 图标相对路径
     */
    icon?: string;
    /**
     * 显示文本
     */
    text: string;
    /**
     * 鼠标悬停时显示的提示文本
     */
    title?: string;
  }

  // ── 窗口

  interface BrowserWindowConstructorOptions {
    /**
     * 是否显示窗口
     * 默认为 true
     */
    show?: boolean;
    /**
     * 窗口标题
     */
    title?: string;
    /**
     * 窗口宽度
     */
    width?: number;
    /**
     * 窗口高度
     */
    height?: number;
    /**
     * 窗口最小宽度
     */
    minWidth?: number;
    /**
     * 窗口最小高度
     */
    minHeight?: number;
    /**
     * 窗口最大宽度
     */
    maxWidth?: number;
    /**
     * 窗口最大高度
     */
    maxHeight?: number;
    /**
     * 窗口初始横坐标
     */
    x?: number;
    /**
     * 窗口初始纵坐标
     */
    y?: number;
    /**
     * 是否将窗口显示在屏幕中央
     * 默认为 false
     */
    center?: boolean;
    /**
     * 是否允许调整窗口大小
     * 默认为 true
     */
    resizable?: boolean;
    /**
     * 是否允许移动窗口
     * 默认为 true
     */
    movable?: boolean;
    /**
     * 是否允许最大化窗口
     * 默认为 true
     */
    maximizable?: boolean;
    /**
     * 是否允许最小化窗口
     * 默认为 true
     */
    minimizable?: boolean;
    /**
     * 是否允许关闭窗口
     * 默认为 true
     */
    closable?: boolean;
    /**
     * 是否显示窗口边框
     * 默认为 true
     */
    frame?: boolean;
    /**
     * 是否显示窗口阴影
     * 默认为 true
     */
    hasShadow?: boolean;
    /**
     * 是否显示窗口圆角
     * 默认为 true
     */
    roundedCorners?: boolean;
    /**
     * 是否始终显示在其他窗口之上
     * 默认为 false
     */
    alwaysOnTop?: boolean;
    /**
     * 是否允许窗口获得焦点
     * 默认为 true
     */
    focusable?: boolean;
    /**
     * 是否在任务栏中显示窗口
     * 默认为 false
     */
    skipTaskbar?: boolean;
    /**
     * 是否允许窗口尺寸超出屏幕可显示范围
     * 默认为 false
     */
    enableLargerThanScreen?: boolean;
    /**
     * 是否允许窗口进入全屏模式
     * 默认为 true
     */
    fullscreenable?: boolean;
    /**
     * 是否以全屏模式创建窗口
     * 默认为 false
     */
    fullscreen?: boolean;
    /**
     * 窗口透明度，取值范围为 0.0 ~ 1.0
     * 默认为 1.0
     */
    opacity?: number;
    /**
     * 窗口背景颜色
     */
    backgroundColor?: string;
    /**
     * 是否创建透明窗口
     * 默认为 false
     */
    transparent?: boolean;
    /**
     * 窗口标题栏样式
     */
    titleBarStyle?: string;
    /**
     * 是否接受首次鼠标点击（macOS）
     * 默认为 false
     */
    acceptFirstMouse?: boolean;
    /**
     * 网页相关配置
     */
    webPreferences?: {
      /**
       * preload.js 文件路径
       */
      preload?: string;
    };
  }

  /**
   * 自定义窗口实例
   *
   * 由 utools.createBrowserWindow() 创建并返回，由 uTools 负责管理。
   */
  interface BrowserWindow {
    /**
     * 窗口唯一标识
     */
    id: number;
    /**
     * 窗口页面对象，用于控制页面并与页面通信
     */
    webContents: WebContents;
    /**
     * 显示窗口
     */
    show(): void;
    /**
     * 显示窗口但不激活，即不抢占当前焦点
     */
    showInactive(): void;
    /**
     * 隐藏窗口
     */
    hide(): void;
    /**
     * 销毁窗口并释放资源
     */
    destroy(): void;
    /**
     * 关闭窗口
     */
    close(): void;
    /**
     * 窗口是否已获得焦点
     */
    isFocused(): boolean;
    /**
     * 窗口是否已销毁
     */
    isDestroyed(): boolean;
    /**
     * 窗口是否可见
     */
    isVisible(): boolean;
    /**
     * 让窗口获得焦点
     */
    focus(): void;
    /**
     * 让窗口失去焦点
     */
    blur(): void;
    /**
     * 设置窗口是否允许调整大小
     *
     * @param resizable 是否允许调整大小
     */
    setResizable(resizable: boolean): void;
    /**
     * 窗口是否允许调整大小
     */
    isResizable(): boolean;
    /**
     * 设置窗口尺寸
     *
     * @param width 宽度，单位为 DIP
     * @param height 高度，单位为 DIP
     * @param animate 是否以动画方式调整尺寸（macOS）
     */
    setSize(width: number, height: number, animate?: boolean): void;
    /**
     * 获取窗口尺寸，单位为 DIP
     */
    getSize(): [width: number, height: number];
    /**
     * 设置窗口位置
     *
     * @param x 横坐标，单位为 DIP
     * @param y 纵坐标，单位为 DIP
     * @param animate 是否以动画方式移动（macOS）
     */
    setPosition(x: number, y: number, animate?: boolean): void;
    /**
     * 获取窗口位置，单位为 DIP
     */
    getPosition(): [x: number, y: number];
    /**
     * 设置窗口区域
     *
     * @param bounds 目标区域
     * @param animate 是否以动画方式调整（macOS）
     */
    setBounds(bounds: Rectangle, animate?: boolean): void;
    /**
     * 获取窗口区域
     */
    getBounds(): Rectangle;
    /**
     * 设置窗口内容区域
     *
     * @param bounds 目标区域
     */
    setContentBounds(bounds: Rectangle): void;
    /**
     * 获取窗口内容区域
     */
    getContentBounds(): Rectangle;
    /**
     * 获取窗口恢复正常状态后的区域
     */
    getNormalBounds(): Rectangle;
    /**
     * 设置窗口内容尺寸
     *
     * @param width 宽度，单位为 DIP
     * @param height 高度，单位为 DIP
     */
    setContentSize(width: number, height: number): void;
    /**
     * 获取窗口内容尺寸，单位为 DIP
     */
    getContentSize(): [width: number, height: number];
    /**
     * 设置窗口最小尺寸
     *
     * @param width 最小宽度
     * @param height 最小高度
     */
    setMinimumSize(width: number, height: number): void;
    /**
     * 获取窗口最小尺寸
     */
    getMinimumSize(): [width: number, height: number];
    /**
     * 设置窗口最大尺寸
     *
     * @param width 最大宽度
     * @param height 最大高度
     */
    setMaximumSize(width: number, height: number): void;
    /**
     * 获取窗口最大尺寸
     */
    getMaximumSize(): [width: number, height: number];
    /**
     * 设置窗口是否可启用，设置为 false 时窗口不响应鼠标与键盘事件
     *
     * @param enable 是否可启用
     */
    setEnabled(enable: boolean): void;
    /**
     * 窗口是否可启用
     */
    isEnabled(): boolean;
    /**
     * 最大化窗口
     */
    maximize(): void;
    /**
     * 取消最大化窗口
     */
    unmaximize(): void;
    /**
     * 窗口是否已最大化
     */
    isMaximized(): boolean;
    /**
     * 最小化窗口
     */
    minimize(): void;
    /**
     * 恢复窗口，即取消最小化
     */
    restore(): void;
    /**
     * 窗口是否已最小化
     */
    isMinimized(): boolean;
    /**
     * 窗口是否处于正常状态，即既未最大化也未最小化
     */
    isNormal(): boolean;
    /**
     * 设置窗口是否进入全屏
     *
     * @param flag 是否进入全屏
     */
    setFullScreen(flag: boolean): void;
    /**
     * 窗口是否处于全屏状态
     */
    isFullScreen(): boolean;
    /**
     * 设置窗口是否允许进入全屏
     *
     * @param fullscreenable 是否允许进入全屏
     */
    setFullScreenable(fullscreenable: boolean): void;
    /**
     * 窗口是否允许进入全屏
     */
    isFullScreenable(): boolean;
    /**
     * 设置窗口是否允许关闭
     *
     * @param closable 是否允许关闭
     */
    setClosable(closable: boolean): void;
    /**
     * 窗口是否允许关闭
     */
    isClosable(): boolean;
    /**
     * 设置窗口是否始终置顶
     *
     * @param flag 是否始终置顶
     * @param level 置顶层级，取值参考 Electron，例如 'screen-saver'
     */
    setAlwaysOnTop(flag: boolean, level?: string): void;
    /**
     * 窗口是否始终置顶
     */
    isAlwaysOnTop(): boolean;
    /**
     * 将窗口置于同级窗口的顶层
     */
    moveTop(): void;
    /**
     * 设置窗口标题
     *
     * @param title 窗口标题
     */
    setTitle(title: string): void;
    /**
     * 获取窗口标题
     */
    getTitle(): string;
    /**
     * 设置窗口宽高比
     *
     * @param aspectRatio 宽高比
     * @param extraSize 额外尺寸
     */
    setAspectRatio(aspectRatio: number, extraSize?: Size): void;
    /**
     * 设置窗口背景色
     *
     * @param backgroundColor 颜色值，支持 #RRGGBB 等格式
     */
    setBackgroundColor(backgroundColor: string): void;
    /**
     * 获取窗口背景色
     */
    getBackgroundColor(): string;
    /**
     * 设置窗口是否有阴影
     *
     * @param hasShadow 是否有阴影
     */
    setHasShadow(hasShadow: boolean): void;
    /**
     * 窗口是否有阴影
     */
    hasShadow(): boolean;
    /**
     * 设置窗口是否忽略鼠标事件
     *
     * @param ignore 是否忽略鼠标事件
     * @param options forward 为 true 时忽略鼠标事件但仍接收鼠标移动事件
     */
    setIgnoreMouseEvents(
      ignore: boolean,
      options?: {
        /**
         * 是否继续接收鼠标移动事件
         */
        forward?: boolean;
      }
    ): void;
    /**
     * 设置窗口是否在任务栏显示
     *
     * @param skip 是否跳过任务栏
     */
    setSkipTaskbar(skip: boolean): void;
    /**
     * 设置菜单栏是否可见
     *
     * @param visible 是否可见
     */
    setMenuBarVisibility(visible: boolean): void;
    /**
     * 菜单栏是否可见
     */
    isMenuBarVisible(): boolean;
    /**
     * 设置任务栏进度条
     *
     * @param progress 进度值，取值范围 0 ~ 1，小于 0 时移除进度条
     * @param options 进度条配置
     */
    setProgressBar(
      progress: number,
      options?: {
        /**
         * 显示模式
         */
        mode?: 'none' | 'normal' | 'indeterminate' | 'error' | 'paused';
      }
    ): void;
    /**
     * 设置窗口是否在所有工作区可见（macOS、Linux）
     *
     * @param visible 是否在所有工作区可见
     * @param options 配置项
     */
    setVisibleOnAllWorkspaces(
      visible: boolean,
      options?: {
        /**
         * 切换到其他工作区时是否仍然可见
         */
        visibleOnFullScreen?: boolean;
        /**
         * 是否跳过窗口转换动画
         */
        skipTransformProcessType?: boolean;
      }
    ): void;
    /**
     * 窗口是否在所有工作区可见
     */
    isVisibleOnAllWorkspaces(): boolean;
    /**
     * 设置内容保护，防止其他应用截取窗口内容（Windows、macOS）
     *
     * @param enable 是否开启内容保护
     */
    setContentProtection(enable: boolean): void;
    /**
     * 内容保护是否已开启
     */
    isContentProtected(): boolean;
    /**
     * 设置窗口是否进入 kiosk 模式
     *
     * @param flag 是否进入 kiosk 模式
     */
    setKiosk(flag: boolean): void;
    /**
     * 窗口是否处于 kiosk 模式
     */
    isKiosk(): boolean;
    /**
     * 闪烁窗口以引起用户注意
     *
     * @param flag 是否闪烁
     */
    flashFrame(flag: boolean): void;
    /**
     * 让窗口内的页面获得焦点
     */
    focusOnWebView(): void;
    /**
     * 让窗口内的页面失去焦点
     */
    blurWebView(): void;
    /**
     * 截取窗口页面图像
     *
     * @param rect 截取区域，不传时截取整个页面
     * @param options 截图配置
     */
    capturePage(
      rect?: Rectangle,
      options?: {
        /**
         * 页面隐藏时是否仍进行截图
         * 默认为 true
         */
        stayHidden?: boolean;
        /**
         * 截图期间是否阻止系统进入休眠
         * 默认为 false
         */
        stayAwake?: boolean;
      }
    ): Promise<NativeImage>;
    /**
     * 重新加载窗口页面
     */
    reload(): void;
    /**
     * 重新加载窗口页面并忽略缓存
     */
    reloadIgnoringCache(): void;
    /**
     * 加载远程页面
     *
     * @param url 页面地址
     */
    loadURL(url: string): Promise<void>;
    /**
     * 加载插件应用内的本地页面
     *
     * @param filePath 相对于插件应用根目录的页面路径
     */
    loadFile(filePath: string): Promise<void>;
    /**
     * 窗口页面是否正在加载
     */
    isLoading(): boolean;
    /**
     * 停止加载窗口页面
     */
    stop(): void;
  }

  /**
   * 自定义窗口的页面对象
   *
   * 通过窗口实例的 webContents 属性访问，用于控制窗口内页面并与页面通信。
   */
  interface WebContents {
    /**
     * 页面唯一标识
     */
    id: number;
    /**
     * 向窗口页面发送消息
     *
     * 页面内通过 preload 中的 ipcRenderer.on(channel, ...) 接收。
     *
     * @param channel 消息通道名称
     * @param args 消息参数
     */
    send(channel: string, ...args: any[]): void;
    /**
     * 截取页面图像
     *
     * @param rect 截取区域，不传时截取整个页面
     * @param options 截图配置
     */
    capturePage(
      rect?: Rectangle,
      options?: {
        /**
         * 页面隐藏时是否仍进行截图
         * 默认为 true
         */
        stayHidden?: boolean;
        /**
         * 截图期间是否阻止系统进入休眠
         * 默认为 false
         */
        stayAwake?: boolean;
      }
    ): Promise<NativeImage>;
    /**
     * 打开开发者工具
     *
     * @param options 开发者工具配置
     */
    openDevTools(options?: {
      /**
       * 显示位置
       */
      mode: 'left' | 'right' | 'bottom' | 'undocked' | 'detach';
      /**
       * 打开时是否激活
       */
      activate?: boolean;
      /**
       * 窗口标题
       */
      title?: string;
    }): void;
    /**
     * 关闭开发者工具
     */
    closeDevTools(): void;
    /**
     * 开发者工具是否已打开
     */
    isDevToolsOpened(): boolean;
    /**
     * 开发者工具是否已获得焦点
     */
    isDevToolsFocused(): boolean;
    /**
     * 切换开发者工具的显示状态
     */
    toggleDevTools(): void;
    /**
     * 在页面中执行 JavaScript
     *
     * @param code 要执行的代码
     * @param userGesture 是否以用户手势的方式执行，默认为 false
     */
    executeJavaScript<T>(code: string, userGesture?: boolean): Promise<T>;
    /**
     * 向页面注入 CSS
     *
     * @param css 要注入的样式
     * @param options 注入配置
     */
    insertCSS(
      css: string,
      options?: {
        /**
         * 样式的来源层级
         * 默认为 'author'
         */
        cssOrigin?: 'user' | 'author';
      }
    ): Promise<string>;
    /**
     * 移除通过 insertCSS 注入的样式
     *
     * @param key insertCSS 返回的标识
     */
    removeInsertedCSS(key: string): Promise<void>;
    /**
     * 在页面中插入文本，模拟输入法输入
     *
     * @param text 文本内容
     */
    insertText(text: string): Promise<void>;
    /**
     * 复制当前选中的内容
     */
    copy(): void;
    /**
     * 剪切当前选中的内容
     */
    cut(): void;
    /**
     * 粘贴剪贴板内容
     */
    paste(): void;
    /**
     * 粘贴剪贴板内容并匹配当前样式
     */
    pasteAndMatchStyle(): void;
    /**
     * 删除当前选中的内容
     */
    delete(): void;
    /**
     * 撤销
     */
    undo(): void;
    /**
     * 重做
     */
    redo(): void;
    /**
     * 全选
     */
    selectAll(): void;
    /**
     * 取消选中
     */
    unselect(): void;
    /**
     * 替换当前选中的内容
     *
     * @param text 替换后的文本
     */
    replace(text: string): void;
    /**
     * 替换当前拼写错误的单词
     *
     * @param text 替换后的文本
     */
    replaceMisspelling(text: string): void;
    /**
     * 复制指定位置的图片
     *
     * @param x 页面横坐标
     * @param y 页面纵坐标
     */
    copyImageAt(x: number, y: number): void;
    /**
     * 在页面中查找文本
     *
     * @param text 要查找的文本
     * @param options 查找选项
     */
    findInPage(
      text: string,
      options?: {
        /**
         * 是否向前搜索
         * 默认为 true
         */
        forward?: boolean;
        /**
         * 是否开始新的查找会话，继续查找时设置为 false
         * 默认为 false
         */
        findNext?: boolean;
        /**
         * 是否区分大小写
         * 默认为 false
         */
        matchCase?: boolean;
      }
    ): number;
    /**
     * 停止页面中的查找
     *
     * @param action 停止查找后的选区处理方式
     */
    stopFindInPage(
      action: 'clearSelection' | 'keepSelection' | 'activateSelection'
    ): void;
    /**
     * 页面是否正在加载
     */
    isLoading(): boolean;
    /**
     * 页面主框架是否正在加载
     */
    isLoadingMainFrame(): boolean;
    /**
     * 页面是否正在等待响应
     */
    isWaitingForResponse(): boolean;
    /**
     * 停止加载当前页面
     */
    stop(): void;
    /**
     * 页面是否已销毁
     */
    isDestroyed(): boolean;
    /**
     * 页面是否已崩溃
     */
    isCrashed(): boolean;
    /**
     * 页面是否已获得焦点
     */
    isFocused(): boolean;
    /**
     * 页面是否正在绘制
     */
    isPainting(): boolean;
    /**
     * 页面是否处于离屏渲染状态
     */
    isOffscreen(): boolean;
    /**
     * 开始离屏渲染
     */
    startPainting(): void;
    /**
     * 停止离屏渲染
     */
    stopPainting(): void;
    /**
     * 页面是否正在被捕获
     */
    isBeingCaptured(): boolean;
    /**
     * 页面当前是否可听见声音
     */
    isCurrentlyAudible(): boolean;
    /**
     * 页面音频是否已静音
     */
    isAudioMuted(): boolean;
    /**
     * 设置页面音频静音状态
     *
     * @param muted 是否静音
     */
    setAudioMuted(muted: boolean): void;
    /**
     * 获取页面标题
     */
    getTitle(): string;
    /**
     * 获取页面地址
     */
    getURL(): string;
    /**
     * 获取页面 User-Agent
     */
    getUserAgent(): string;
    /**
     * 设置页面 User-Agent
     *
     * @param userAgent User-Agent 字符串
     */
    setUserAgent(userAgent: string): void;
    /**
     * 获取页面缩放比例
     */
    getZoomFactor(): number;
    /**
     * 设置页面缩放比例
     *
     * @param factor 缩放比例，1.0 表示不缩放
     */
    setZoomFactor(factor: number): void;
    /**
     * 页面后台节流是否已开启
     */
    getBackgroundThrottling(): boolean;
    /**
     * 设置页面后台节流
     *
     * @param allowed 是否允许后台节流
     */
    setBackgroundThrottling(allowed: boolean): void;
    /**
     * 获取页面帧率
     */
    getFrameRate(): number;
    /**
     * 设置页面帧率
     *
     * @param fps 帧率
     */
    setFrameRate(fps: number): void;
    /**
     * 获取页面的 WebRTC IP 处理策略
     */
    getWebRTCIPHandlingPolicy(): WebRTCIPHandlingPolicy;
    /**
     * 设置页面的 WebRTC IP 处理策略
     *
     * @param policy 处理策略
     */
    setWebRTCIPHandlingPolicy(policy: WebRTCIPHandlingPolicy): void;
    /**
     * 设置页面是否忽略菜单快捷键，便于在页面中自行处理按键
     *
     * @param ignore 是否忽略
     */
    setIgnoreMenuShortcuts(ignore: boolean): void;
    /**
     * 获取页面所属的 Chromium 进程 ID
     */
    getProcessId(): number;
    /**
     * 获取页面所属的操作系统进程 ID
     */
    getOSProcessId(): number;
    /**
     * 获取系统打印机列表
     */
    getPrinters(): PrinterSync[];
    /**
     * 打印页面
     *
     * @param options 打印选项
     * @param callback 打印结束回调，success 为 false 时 errorType 表示失败原因
     */
    print(
      options?: Record<string, any>,
      callback?: (success: boolean, errorType?: string) => void
    ): void;
    /**
     * 将页面导出为 PDF
     *
     * @param options PDF 选项
     */
    printToPDF(options: Record<string, any>): Promise<Uint8Array>;
    /**
     * 保存页面
     *
     * @param fullPath 保存路径
     * @param saveType 保存类型
     */
    savePage(
      fullPath: string,
      saveType: 'HTMLOnly' | 'HTMLComplete' | 'MHTML'
    ): Promise<void>;
    /**
     * 将页面堆快照保存到文件
     *
     * @param filePath 保存路径
     */
    takeHeapSnapshot(filePath: string): Promise<void>;
    /**
     * 发送输入事件
     *
     * @param e 输入事件对象
     */
    sendInputEvent(e: any): void;
    /**
     * 清除页面重绘区域的内容
     */
    invalidate(): void;
    /**
     * 让页面失去焦点
     */
    blur(): void;
    /**
     * 让页面获得焦点
     */
    focus(): void;
    /**
     * 开启设备模拟
     */
    enableDeviceEmulation(): void;
    /**
     * 关闭设备模拟
     */
    disableDeviceEmulation(): void;
  }

  /**
   * 打印机信息
   */
  interface PrinterSync {
    /**
     * 打印机描述
     */
    description: string;
    /**
     * 打印机名称
     */
    displayName: string;
    /**
     * 是否为默认打印机
     */
    isDefault: boolean;
    /**
     * 打印机状态码
     */
    status: number;
    /**
     * 打印机选项
     */
    options?: {
      'printer-location'?: string;
      'printer-make-and-model'?: string;
      'system_driverinfo'?: string;
    };
  }

  /**
   * WebRTC IP 处理策略
   */
  type WebRTCIPHandlingPolicy =
    | 'default'
    | 'default_public_interface_only'
    | 'default_public_and_private_interfaces'
    | 'disable_non_proxied_udp';

  interface FindInPageOptions {
    /**
     * 是否向前搜索
     * 默认为 true
     */
    forward?: boolean;
    /**
     * 是否开始新的查找会话
     * 首次查找时应设置为 true，继续查找时设置为 false
     * 默认为 false
     */
    findNext?: boolean;
    /**
     * 是否区分大小写
     * 默认为 false
     */
    matchCase?: boolean;
  }

  // ── 系统

  interface OpenDialogOptions {
    /**
     * 对话框标题。
     */
    title?: string;
    /**
     * 默认使用的绝对目录路径、绝对文件路径或文件名。
     */
    defaultPath?: string;
    /**
     * 「确认」按钮的自定义标签。
     * 未设置时使用系统默认标签。
     */
    buttonLabel?: string;
    /**
     * 文件过滤器。
     */
    filters?: FileFilter[];
    /**
     * 对话框属性。
     *
     * 支持以下属性值：
     *
     * - `openFile`：允许选择文件。
     * - `openDirectory`：允许选择文件夹。
     * - `multiSelections`：允许多选。
     * - `showHiddenFiles`：显示隐藏文件。（macOS、Windows）
     * - `createDirectory`：允许通过对话框创建新目录。（macOS）
     * - `promptToCreate`：输入的文件路径不存在时提示创建。
     *   此选项不会直接创建文件，而是允许返回不存在的路径，由应用自行创建。（Windows）
     * - `noResolveAliases`：禁用自动解析别名路径（符号链接）。
     *   所选别名将返回其自身路径，而非目标路径。（macOS）
     * - `treatPackageAsDirectory`：将包（如 `.app`）视为目录而不是文件。（macOS）
     * - `dontAddToRecent`：不将所选项目添加到最近使用的文档列表。（Windows）
     */
    properties?: string[];
    /**
     * 显示在输入框上方的消息。（macOS）
     */
    message?: string;
  }

  interface FileFilter {
    /**
     * 名称
     */
    name: string;
    /**
     * 文件扩展名列表，例如 ["jpg", "png"]
     */
    extensions: string[];
  }

  interface SaveDialogOptions {
    /**
     * 对话框标题。
     */
    title?: string;
    /**
     * 默认使用的绝对目录路径、绝对文件路径或文件名。
     */
    defaultPath?: string;
    /**
     * 「确认」按钮的自定义标签。
     * 未设置时使用系统默认标签。
     */
    buttonLabel?: string;
    /**
     * 文件过滤器。
     */
    filters?: FileFilter[];
    /**
     * 对话框属性。
     *
     * 支持以下属性值：
     *
     * - `showHiddenFiles`：显示隐藏文件。（macOS、Windows）
     * - `createDirectory`：允许通过对话框创建新目录。（macOS）
     * - `treatPackageAsDirectory`：将包（如 `.app`）视为目录而不是文件。（macOS）
     * - `dontAddToRecent`：不将所选项目添加到最近使用的文档列表。（Windows）
     * - `showOverwriteConfirmation`：当用户输入已存在的文件名时，
     *   是否显示覆盖确认对话框。（Linux）
     */
    properties?: string[];
    /**
     * 显示在输入框上方的消息。（macOS）
     */
    message?: string;
    /**
     * 文件名输入框对应的自定义标签。（macOS）
     */
    nameFieldLabel?: string;
    /**
     * 是否显示标记输入框，默认为 `true`。（macOS）
     */
    showsTagField?: boolean;
  }

  interface UserInfo {
    /**
     * 用户头像 URL
     */
    avatar: string;
    /**
     * 用户昵称
     */
    nickname: string;
    /**
     * 用户类型
     * 
     * - `user`：普通用户
     * - `member`：uTools 会员用户
     */
    type: "member" | "user";
  }

  // ── 屏幕

  interface CaptureDisplayOptions {
    /**
     * 显示器 ID
     *
     * 不设置时返回所有显示器截图
     */
    displayId?: number;
  }

  interface DisplayCapture {
    /**
     * 显示器信息
     */
    display: Display;
    /**
     * 显示器截图图片。
     *
     * 图片尺寸单位为物理像素。
     */
    image: NativeImage;
  }

  interface Display {
    /**
     * 显示器唯一 ID
     */
    id: number;
    /**
     * 显示器边界区域
     *
     * 坐标单位为 DIP
     */
    bounds: Rectangle;
    /**
     * 可用工作区域
     *
     * 排除任务栏等系统区域
     * 坐标单位为 DIP
     */
    workArea: Rectangle;
    /**
     * 可用工作区域尺寸。
     *
     * 单位为 DIP。
     */
    workAreaSize: Size;
    /**
     * 显示器缩放比例
     *
     * 例如：
     * Windows 125% 缩放：
     * scaleFactor = 1.25
     */
    scaleFactor: number;
    /**
     * 显示器旋转角度
     *
     * 0、90、180、270
     */
    rotation: number;
    /**
     * 显示器内部名称
     */
    label?: string;
  }

  interface Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
  }

  interface Size {
    width: number;
    height: number;
  }

  interface Point {
    x: number;
    y: number;
  }

  interface NativeImage {
    /**
     * 获取图片尺寸。
     */
    getSize(): Size;
    /**
     * 转换为 PNG Buffer
     */
    toPNG(): Buffer;
    /**
     * 转换为 JPEG Buffer
     *
     * @param quality 图片质量，范围 0-100
     */
    toJPEG(quality: number): Buffer;
    /**
     * 转换为 Data URL
     */
    toDataURL(): string;
    /**
     * 裁剪图片区域。
     */
    crop(rect: Rectangle): NativeImage;
    /**
     * 调整图片尺寸
     *
     * 只设置 width 或 height 时，会保持图片比例
     */
    resize(options: {
      width?: number;
      height?: number;
      quality?: "good" | "better" | "best";
    }): NativeImage;
    /**
     * 是否为空图片
     */
    isEmpty(): boolean;
  }

  interface PickColor {
    /**
     * 十六进制颜色值
     *
     * 示例：
     * #FFFFFF
     */
    hex: string;
    /**
     * RGB 字符串
     *
     * 示例：
     * rgb(255, 255, 255)
     */
    rgb: string;
  }

  interface DesktopCaptureSourcesOptions {
    /**
     * 要获取的来源类型。
     */
    types?: Array<"window" | "screen">;
    /**
     * 缩略图尺寸。
     */
    thumbnailSize?: Size;
    /**
     * 是否获取窗口图标。
     */
    fetchWindowIcons?: boolean;
  }

  interface DesktopCaptureSource {
    /**
     * 来源 ID
     */
    id: string;
    /**
     * 来源类型
     */
    type: "screen" | "window";
    /**
     * 来源名称
     */
    name: string;
    /**
     * 缩略图
     */
    thumbnail: NativeImage;
    /**
     * 应用图标
     */
    appIcon?: NativeImage;

  }

  // ── 复制

  interface CopiedFile {
    /**
     * 文件路径
     */
    path: string;
    /**
     * 是否为文件夹
     */
    isDirectory: boolean;
    /**
     * 是否为文件
     */
    isFile: boolean;
    /**
     * 文件名
     */
    name: string;
  }

  // ── 数据库

  interface DbDoc {
    /**
     * 文档唯一 ID。不存在时创建新文档，存在时更新文档
     */
    _id: string;
    /**
     * 文档版本号。更新已有文档时需要提供
     */
    _rev?: string;
    [key:string]: unknown
  }

  interface DbResult {
    /**
     * 文档 ID
     */
    id: string;
    /**
     * 最新文档版本号
     */
    rev?: string;
    /**
     * 是否成功
     */
    ok?: boolean;
    /**
     * 是否错误
     */
    error?: boolean;
    /**
     * 错误名称
     */
    name?: string;
    /**
     * 错误信息
     */
    message?: string;
  }

  type State = null | 0 | 1;

  // ── AI 能力

  interface ToolContext {
    /**
    * MCP 请求 ID
    */
    requestId: string | number;
    /**
     * 用于向 AI Agent 上报任务执行进度（适用于长时间任务）
     */
    sendProgress?: (options: {
     /**
     * 当前进度值
     */
      progress: number;
      /**
       * 总数（可选）
       */
      total?: number;
      /**
       * 进度消息（可选）
       */
      message?: string;
    }) => Promise<void>;
  }

  interface AiOptions {
    /**
     * AI 模型 ID, 为空使用默认
     */
    model?: string;
    /**
     * 消息列表
     */
    messages: Message[];
    /**
     * 工具列表
     */
    tools?: Tool[];
  }

  interface Message {
    /**
     * 消息角色
     * 
     * "system" 代表系统消息
     * "user" 代表用户消息
     * "assistant" 代表 AI 消息
     */
    role: "system" | "user" | "assistant";
    /**
     * 消息内容
     */
    content?: string;
    /**
     * AI 推理内容（部分模型支持）
     */
    reasoning_content?: string;
  }

  interface Tool {
    type: "function";
    function: {
      /**
       * 工具名称
       */
      name: string;
      /**
       * 工具描述
       */
      description: string;
      /**
       * 工具参数
       */
      parameters: JSONSchema;
    };
  }

  interface JSONSchema {
    type?: string;
    properties?: Record<string, JSONSchema>;
    required?: string[];
    items?: JSONSchema;
    description?: string;
  }

  interface AiPromise<T> extends Promise<T> {
    /**
     * 中止 AI 调用
     */
    abort(): void;
  }

  interface AiModel {
    /**
     * AI 模型 ID
     */
    id: string;
    /**
     * 模型显示名称
     */
    label: string;
    /**
     * 模型图标（URL 或 Data URL）
     */
    icon: string;
    /**
     * 单次调用消耗的 AI 能量
     */
    cost?: number;
    /**
     * 是否支持视觉能力（图片输入）
     */
    vision?: boolean;
  }

  // ── 定时任务

  /**
   * 请求创建的定时任务配置
   */
  interface Schedule {
    /**
     * 任务唯一标识
     *
     * 用于在 onScheduleTrigger 事件中识别具体任务
     */
    code: string;
    /**
     * 任务名称
     *
     * 用于向用户展示
     */
    label: string;
    /**
     * 任务触发规则
     *
     * - 传入时间戳：一次性任务，在指定时间触发一次后自动删除
     * - 传入 ScheduleTrigger：重复任务，按 Cron 规则重复触发
     */
    trigger: number | ScheduleTrigger;
  }

  /**
   * 重复任务触发规则
   *
   * 按 Cron 规则重复触发
   */
  interface ScheduleTrigger {
    /**
     * Cron 表达式
     *
     * 仅支持标准 5 位 Cron 格式：分 时 日 月 周
     */
    cron: string;
    /**
     * 可选，任务开始生效时间
     *
     * Unix 时间戳，单位为毫秒，该时间之前不会触发任务
     */
    startTime?: number;
    /**
     * 可选，任务结束生效时间
     *
     * Unix 时间戳，单位为毫秒，超过该时间后不再触发任务，并自动删除
     */
    endTime?: number;
  }

  /**
   * 已创建的定时任务信息
   */
  interface ScheduleInfo {
    /**
     * 任务唯一标识
     */
    code: string;
    /**
     * 任务名称
     */
    label: string;
    /**
     * 任务触发规则
     */
    trigger: number | ScheduleTrigger;
    /**
     * onScheduleTrigger 回调正常完成的次数
     */
    successCount: number;
    /**
     * onScheduleTrigger 回调执行过程中抛出异常或返回 rejected Promise 的次数
     */
    failureCount: number;
    /**
     * 最近一次执行时间
     *
     * Unix 时间戳，单位为毫秒，未执行过时不存在
     */
    lastExecuteAt?: number;
    /**
     * 最近一次任务执行状态
     *
     * success 表示执行成功，failure 表示执行失败
     */
    lastStatus?: 'success' | 'failure';
  }

  // ── 动态功能

  interface Feature {
    /**
     * 功能唯一编码。
     */
    code: string;
    /**
     * 功能描述。
     */
    description?: string;
    /**
     * 功能图标。
     * 
     * 支持：
     * - 相对路径，支持 png、jpg、jpeg、svg、webp 格式
     * - Base64 Data URL
     */
    icon?: string;
    /**
     * 指定功能可用的平台。
     * 
     * 支持：
     * - "win32"
     * - "darwin"
     * - "linux"
     * 
     * 参考 plugin.json 中 feature.platform
     */
    platform?: Platform | Platform[];
    /**
     * 配置为 `true` 时，通过非 uTools 搜索框入口触发该功能时，不主动显示插件应用主窗口。
     * 
     * 参考 plugin.json 中 feature.mainHide
     */
    mainHide?: boolean;
    /**
     * 配置为 `true` 后，该功能匹配用户输入时，插件应用可以持续向 uTools 搜索结果区域推送动态结果。
     * 
     * 参考 plugin.json 中 feature.mainPush
     */
    mainPush?: boolean;
    /**
     * 配置该功能支持的指令，包括「功能指令」和「匹配指令」。
     * 
     * - `string`：功能指令
     * - `Cmd`：匹配指令
     * 
     * 参考 plugin.json 中 feature.cmds
     */
    cmds: Array<string | Cmd>;
  }

  type Platform = "win32" | "darwin" | "linux";

  interface Cmd {
    /**
     * 匹配类型。
     */
    type: "regex" | "over" | "img" | "files" | "window";
    /**
     * 指令名称。
     */
    label: string;
    /**
     * 匹配规则。
     * 
     * 对应 `type` 类型：
     * - `regex`：文本内容的正则表达式
     * - `files`：文件名称的正则表达式
     * - `window`：窗口匹配规则
     * - `over`、`img`：无效
     */
    match?: string | MatchWindow;
    /**
     * 排除规则。
     * 
     * 仅 `type` 为 `over` 时有效，必须为正则表达式
     */
    exclude?: string;
    /**
     * 文件扩展名过滤。
     * 
     * 仅 `type` 为 `files` 时有效，例如 ["png", "jpg", "jpeg"]
     */
    extensions?: string[];
    /**
     * 匹配最小值。
     * 
     * - `regex`、`over`：文本最小字符数
     * - `files`：最少文件数
     */
    minLength?: number;
      /**
     * 匹配最大值。
     * 
     * - `regex`、`over`：文本最大字符数
     * - `files`：最多文件数
     */
    maxLength?: number;
  }

  // ── 快捷入口

  interface MatchPayload {
    /**
     * 匹配类型
     */
    type: "img" | "files";
    /**
     * 匹配数据：
     * - img：Base64 Data URL
     * - files：文件路径或文件路径集合
     */
    data: string | string[];
  }

  // ── uBrowser 浏览器

  interface UBrowserWindowOptions {
    /**
     * 是否显示窗口
     * 默认为 true
     */
    show?: boolean;
    /**
     * 窗口标题
     */
    title?: string;
    /**
     * 窗口宽度，默认为 800
     */
    width?: number;
    /**
     * 窗口高度，默认为 600
     */
    height?: number;
    /**
     * 窗口最小宽度
     */
    minWidth?: number;
    /**
     * 窗口最小高度
     */
    minHeight?: number;
    /**
     * 窗口最大宽度
     */
    maxWidth?: number;
    /**
     * 窗口最大高度
     */
    maxHeight?: number;
    /**
     * 窗口初始横坐标
     */
    x?: number;
    /**
     * 窗口初始纵坐标
     */
    y?: number;
    /**
     * 是否将窗口显示在屏幕中央
     * 默认为 false
     */
    center?: boolean;
    /**
     * 是否允许调整窗口大小
     * 默认为 true
     */
    resizable?: boolean;
    /**
     * 是否允许移动窗口
     * 默认为 true
     */
    movable?: boolean;
    /**
     * 是否允许最大化窗口
     * 默认为 true
     */
    maximizable?: boolean;
    /**
     * 是否允许最小化窗口
     * 默认为 true
     */
    minimizable?: boolean;
    /**
     * 是否允许关闭窗口
     * 默认为 true
     */
    closable?: boolean;
    /**
     * 是否显示窗口边框
     * 默认为 true
     */
    frame?: boolean;
    /**
     * 是否显示窗口阴影
     * 默认为 true
     */
    hasShadow?: boolean;
    /**
     * 是否显示窗口圆角
     * 默认为 true
     */
    roundedCorners?: boolean;
    /**
     * 是否始终显示在其他窗口之上
     * 默认为 false
     */
    alwaysOnTop?: boolean;
    /**
     * 是否允许窗口获得焦点
     * 默认为 true
     */
    focusable?: boolean;
    /**
     * 是否允许窗口尺寸超出屏幕可显示范围
     * 默认为 false
     */
    enableLargerThanScreen?: boolean;
    /**
     * 是否允许窗口进入全屏模式
     * 默认为 true
     */
    fullscreenable?: boolean;
    /**
     * 是否以全屏模式创建窗口
     * 默认为 false
     */
    fullscreen?: boolean;
    /**
     * 窗口透明度，取值范围为 0.0 ~ 1.0
     * 默认为 1.0
     */
    opacity?: number;
    /**
     * 窗口背景颜色
     */
    backgroundColor?: string;
    /**
     * 是否创建透明窗口
     * 默认为 false
     */
    transparent?: boolean;
    /**
     * 窗口标题栏样式
     */
    titleBarStyle?: string;
  }

  interface UBrowserWindowInstance {
    /**
     * 窗口 ID
     */
    id: number;
    /**
     * 当前 URL
     */
    url: string;
    /**
     * 窗口标题
     */
    title: string;
    /**
     * 窗口宽度
     */
    width: number;
    /**
     * 窗口高度
     */
    height: number;
    /**
     * 窗口横坐标
     */
    x: number;
    /**
     * 窗口纵坐标
     */
    y: number;
  }

  interface DeviceOptions {
    /**
     * 配置浏览器 User-Agent
     */
    userAgent?: string;
    /**
     * 设置页面视口大小
     */
    viewport?: {
      /**
       * 页面宽度
       */
      width: number;
      /**
       * 页面高度
       */
      height: number;
      /**
       * 设备缩放
       */
      deviceScaleFactor?: number;
      /**
       * 是否移动设备
       */
      isMobile?: boolean;
      /**
       * 是否可以触摸
       */
      hasTouch?: boolean;
    };
  }

  type MouseButton = "left" | "middle" | "right";

  /**
   * 截图区域
   * 
   * 坐标以 uBrowser 内容区域左上角为原点。
   */
  interface ScreenshotRect {
    x: number;
    y: number;
    width: number;
    height: number;
  }

  interface PdfOptions {
    /** 
     * 是否横向打印，默认为 false 
     */
    landscape?: boolean;
    /**
     * 是否显示页眉和页脚，默认为 false
     */
    displayHeaderFooter?: boolean;
    /**
     * 是否打印背景，默认为 false
     */
    printBackground?: boolean;
    /**
     * 页面缩放比例 
     */
    scale?: number;
    /**
     * 页面尺寸，默认为 `Letter`
     *  
     * 包含 `A0`, `A1`, `A2`, `A3`, `A4`, `A5`, `A6`, `Legal`, `Letter`, `Tabloid`, `Ledger`
     */
    pageSize?: string | PdfPageSize;
    /**
     * 页面边距，单位为英寸 
     */
    margins?: PrintToPDFMargins;
    /** 
     * 要打印的页码范围 
     */
    pageRanges?: string;
    /** 
     * 页眉模板 
     */
    headerTemplate?: string;
    /** 
     * 页脚模板 
     */
    footerTemplate?: string;
    /**
     * 是否优先使用 CSS 定义的页面尺寸
     */
    preferCSSPageSize?: boolean;
  }

  interface PdfPageSize {
    /**
     * 页面宽度，单位为英寸。
     */
    width: number;
    /**
     * 页面高度，单位为英寸。
     */
    height: number;
  }

  interface PrintToPDFMargins {
   /**
   * 上边距，单位为英寸。
   * 默认为 1 cm（约 0.4 英寸）。
   */
    top: number;
   /**
   * 下边距，单位为英寸。
   * 默认为 1 cm（约 0.4 英寸）。
   */
    bottom: number;
   /**
   * 左边距，单位为英寸。
   * 默认为 1 cm（约 0.4 英寸）。
   */
    left: number;
   /**
   * 右边距，单位为英寸。
   * 默认为 1 cm（约 0.4 英寸）。
   */
    right: number;
  }

  /**
   * Cookie 筛选条件
   */
  interface CookieFilter {
    /**
     * 检索与指定 URL 相关的 Cookie，为空表示检索所有 URL 的 Cookie
     */
    url?: string;
    /**
     * 按名称筛选 Cookie
     */
    name?: string;
    /**
     * 检索与指定域名或其子域名匹配的 Cookie
     */
    domain?: string;
    /**
     * 检索路径与指定 path 匹配的 Cookie
     */
    path?: string;
    /**
     * 是否仅匹配带 Secure 属性的 Cookie
     */
    secure?: boolean;
    /**
     * 是否仅匹配会话 Cookie
     */
    session?: boolean;
    /**
     * 是否仅匹配带 httpOnly 属性的 Cookie
     */
    httpOnly?: boolean;
  }

  interface CookieDetails {
    /**
     * Cookie 名称。
     */
    name: string;
    /**
     * Cookie 值。
     */
    value: string;
    /**
     * Cookie 所属 URL。
     */
    url?: string;
    /**
     * Cookie 所属域名。
     */
    domain?: string;
    /**
     * Cookie 路径。
     */
    path?: string;
    /**
     * 是否设置 Secure 属性。
     */
    secure?: boolean;
    /**
     * 是否设置 HttpOnly 属性。
     */
    httpOnly?: boolean;
    /**
     * Cookie 过期时间。
     */
    expirationDate?: number;
    /**
     * SameSite 属性。
     * 默认为 "lax"。
     */
    sameSite?:
      | 'unspecified'
      | 'no_restriction'
      | 'lax'
      | 'strict';
  }

  interface ProxyConfig {
    mode?: string;
    pacScript?: string;
    proxyRules?: string;
    proxyBypassRules?: string;
  }

  // ── Sharp 图片处理

  interface SharpOptions {
    /**
     * 指定原始像素数据的尺寸和通道信息
     */
    raw?: SharpRaw;
    /**
     * 创建新图像
     */
    create?: SharpCreate;
    /**
     * 限制输入像素总量
     */
    limitInputPixels?: number;
    /**
     * 限制输入图像的最大通道数
     */
    limitInputChannels?: number;
    /**
     * 遇到无效像素数据时的处理策略
     */
    failOn?: 'none' | 'truncated' | 'error' | 'warning';
    /**
     * 处理多帧输入（GIF、WebP、TIFF 等）
     */
    animated?: boolean;
    /**
     * 处理 PDF 或 SVG 时的像素密度
     */
    density?: number;
    /**
     * 多个输入图像的拼接方式
     */
    join?: SharpJoin;
  }

  interface SharpColor {
    r: number;
    g: number;
    b: number;
    alpha: number;
  }

  interface SharpRaw {
    /**
     * 图片宽度
     */
    width: number;
    /**
     * 图片高度
     */
    height: number;

    /**
     * 通道数，1～4 分别对应灰度、灰度 + Alpha、RGB、RGBA
     */
    channels: 1 | 2 | 3 | 4;
    /**
     * 是否已进行预乘 Alpha
     */
    premultiplied?: boolean;
    /**
     * 多帧原始像素数据中单帧的高度
     */
    pageHeight?: number;
  }

  interface SharpCreate {
    /**
     * 图片宽度
     */
    width: number;
    /**
     * 图片高度
     */
    height: number;
    /**
     * 通道数，3 表示 RGB，4 表示 RGBA
     */
    channels:  3 | 4;
    /**
     * 图片背景
     */
    background?: string | SharpColor;
  }

  interface SharpJoin {
    /**
     * 每行排列的图像数量
     */
    across?: number;

    /**
     * 是否将输入图像作为多帧动画处理
     */
    animated?: boolean;

    /**
     * 图片之间的间隔像素
     */
    shim?: number;

    /**
     * 拼接区域的背景色
     */
    background?: string | SharpColor;
  }

  // ── FFmpeg 音视频处理

  interface FFmpegProcess extends Promise<void> {
    /**
     * 强制终止 FFmpeg 进程。
     */
    kill(): void;
    /**
     * 请求 FFmpeg 正常退出。
     */
    quit(): void;
  }

  interface RunFFmpegOptions {
    /**
     * FFmpeg 处理过程中周期性触发的进度回调。
     */
    onProgress?: (progress: RunFFmpegProgress) => void;
    /**
     * 接收 FFmpeg 执行过程中的日志输出。
     */
    onLog?: (text: string) => void;
  }

  interface RunFFmpegProgress {
    /**
     * 当前处理媒体的比特率，例如 `"1926 kb/s"`。
     */
    bitrate: string;
    /**
     * 当前处理帧率，单位为 FPS。
     */
    fps: number;
    /**
     * 已处理的帧数。
     */
    frame: number;
    /**
     * 处理完成百分比。
     * 
     * 仅在能够确定输入媒体总时长时提供，否则可能为 undefined。
     */
    percent?: number;
    /**
     * 当前编码质量指标。
     * 对不同编码器，其含义可能不同。
     */
    q: number | string;
    /**
     * 当前已生成输出数据的大小，例如 `"1.2 MiB"`。
     */
    size: string;
    /**
     * 当前处理速度，例如 `"1.5x"`。
     */
    speed: string;
    /**
     * 已处理的媒体时间，例如 `"00:01:23.45"`。
     */
    time: string;
  }

  // ── 支付

  interface OpenPurchaseOptions {
    /**
     * 商品 ID，在「uTools 开发者工具」中创建。
     */
    goodsId: string;
    /**
     * 第三方服务生成的订单号，长度为 6～64 个字符。
     */
    outOrderId?: string;
    /**
     * 第三方服务附加数据。
     * 在订单查询 API 和支付通知中原样返回，可用于传递自定义参数。
     * 最多 256 个字符。
     */
    attach?: string;
  }

  // ---------------------------------------------------------------------------
  // 补充类型
  //
  // 文档中提到但未给出定义的类型在此统一声明。
  // ---------------------------------------------------------------------------

  /**
   * uBrowser 链式操作接口
   *
   * 通过 utools.ubrowser 访问。调用操作 API 时不会立即执行，而是加入操作队列，
   * 调用 run() 后按调用顺序执行；各操作返回 UBrowser 以支持链式调用。
   */
  interface UBrowser {
    /**
     * 创建新的 uBrowser 窗口执行操作，不传配置时使用默认窗口配置。
     *
     * 执行当前 uBrowser 操作队列。
     *
     * 调用 run() 时，可以创建新的 uBrowser 窗口，也可以继续使用已有的 uBrowser 窗口。
     *
     * @param options uBrowser 窗口配置。
     * @param uBrowserWindowId uBrowser 窗口 ID。
     *
     * @returns
     * - Promise resolve 后返回一个数组。
     * - 前面的元素：链式调用过程中各操作产生的返回值，顺序与操作调用顺序一致。
     * - 最后一项：当前 UBrowserWindowInstance，如果窗口已销毁则为 null。
     * - 如果执行过程中发生错误，Promise 会 reject。错误对象的 data
     * 字段包含错误发生前已成功执行的操作返回值，以及最后的 UBrowserWindowInstance。
     * - error.data 的结构与 Promise resolve 返回值一致，但仅包含错误发生前已成功执行部分的结果。
     */
    run(
      options?: UBrowserWindowOptions
    ): Promise<[...any[], UBrowserWindowInstance | null]>;
    /**
     * 在已有 uBrowser 窗口中执行操作。
     *
     * 执行当前 uBrowser 操作队列。
     *
     * 调用 run() 时，可以创建新的 uBrowser 窗口，也可以继续使用已有的 uBrowser 窗口。
     */
    run(
      uBrowserWindowId: number
    ): Promise<[...any[], UBrowserWindowInstance | null]>;
    /**
     * 打开指定 URL。
     *
     * @param url 要访问的 URL。
     * @param headers 请求头。
     * @param timeout 页面加载超时时间，单位为毫秒。
     */
    goto(
      url: string,
      headers?: Record<string, string>,
      timeout?: number
    ): UBrowser;
    /**
     * 设置浏览器 User-Agent。
     *
     * @param ua User-Agent 字符串。
     */
    userAgent(ua: string): UBrowser;
    /**
     * 设置网页内容区域的视口尺寸，不等同于 uBrowser 窗口尺寸。
     *
     * @param width 视口宽度。
     * @param height 视口高度。
     */
    viewport(
      width: number,
      height: number
    ): UBrowser;
    /**
     * 模拟指定设备环境。
     *
     * @param options 设备模拟配置。
     */
    device(
      options: DeviceOptions
    ): UBrowser;
    /**
     * 元素点击
     *
     * 点击指定元素。
     *
     * @param selector 元素选择器。
     * @param x 页面坐标 X。
     * @param y 页面坐标 Y。
     * @param mouseButton 鼠标按键。
     */
    click(
      selector: string,
      mouseButton?: MouseButton
    ): UBrowser;
    /**
     * 模拟鼠标物理在坐标上点击
     *
     * 点击指定元素。
     */
    click(
      x: number,
      y: number,
      mouseButton?: MouseButton
    ): UBrowser;
    /**
     * 双击指定元素。
     *
     * @param selector 元素选择器。
     * @param x 页面坐标 X。
     * @param y 页面坐标 Y。
     * @param mouseButton 鼠标按键。
     */
    dblclick(
      selector: string,
      mouseButton?: MouseButton
    ): UBrowser;
    /**
     * 双击指定元素。
     */
    dblclick(
      x: number,
      y: number,
      mouseButton?: MouseButton
    ): UBrowser;
    /**
     * 在指定元素上按下鼠标按键。
     *
     * @param selector 元素选择器。
     * @param x 页面坐标 X。
     * @param y 页面坐标 Y。
     * @param mouseButton 鼠标按键。
     */
    mousedown(
      selector: string,
      mouseButton?: MouseButton
    ): UBrowser;
    /**
     * 在指定元素上按下鼠标按键。
     */
    mousedown(
      x: number,
      y: number,
      mouseButton?: MouseButton
    ): UBrowser;
    /**
     * 在指定元素上释放鼠标按键。
     *
     * @param selector 元素选择器。
     * @param x 页面坐标 X。
     * @param y 页面坐标 Y。
     * @param mouseButton 鼠标按键。
     */
    mouseup(
      selector: string,
      mouseButton?: MouseButton
    ): UBrowser;
    /**
     * 在指定元素上释放鼠标按键。
     */
    mouseup(
      x: number,
      y: number,
      mouseButton?: MouseButton
    ): UBrowser;
    /**
     * 在元素上悬停
     *
     * 将鼠标移动到指定元素或页面坐标位置。
     *
     * @param selector 元素选择器。
     * @param x 页面坐标 X。
     * @param y 页面坐标 Y。
     */
    hover(selector: string): UBrowser;
    /**
     * 在坐标位置悬停
     *
     * 将鼠标移动到指定元素或页面坐标位置。
     */
    hover(
      x: number,
      y: number
    ): UBrowser;
    /**
     * 模拟键盘按键。
     *
     * @param key 要模拟的键。
     * @param modifiers 修饰键，例如：ctrl、alt、shift、meta
     */
    press(
      key: string,
      ...modifiers: string[]
    ): UBrowser;
    /**
     * 使指定元素获得焦点。
     *
     * @param selector 元素选择器。
     */
    focus(selector: string): UBrowser;
    /**
     * 模拟用户输入。
     *
     * input() 更接近用户实际输入行为；value() 用于直接设置表单元素的值。
     *
     * @param selector 元素选择器。
     * @param payload 要输入的文本。
     */
    input(
      selector: string,
      payload: string
    ): UBrowser;
    /**
     * 模拟用户输入。
     *
     * input() 更接近用户实际输入行为；value() 用于直接设置表单元素的值。
     */
    input(
      payload: string
    ): UBrowser;
    /**
     * 设置指定表单元素的值。
     *
     * @param selector 表单元素选择器。
     * @param payload 要设置的值。
     */
    value(
      selector: string,
      payload: string
    ): UBrowser;
    /**
     * 设置复选框或单选框的选中状态。
     *
     * @param selector 复选框或单选框选择器。
     * @param checked 是否选中。
     */
    check(
      selector: string,
      checked: boolean
    ): UBrowser;
    /**
     * 将指定元素滚动到可视区域。
     *
     * 页面滚动。
     *
     * @param selector 元素选择器。
     * @param x 页面坐标 X。
     * @param y 页面坐标 Y。
     * @param options 滚动配置，使用浏览器内置的 ScrollIntoViewOptions：
     *   - behavior：滚动方式，smooth 为平滑滚动，其余取值（auto、instant）立即滚动。
     *   - block：元素在垂直方向的对齐位置，start / center / end / nearest。
     *   - inline：元素在水平方向的对齐位置，start / center / end / nearest。
     */
    scroll(
      selector: string,
      options?: ScrollIntoViewOptions
    ): UBrowser;
    /**
     * 将页面滚动到指定坐标。
     *
     * 页面滚动。
     */
    scroll(
      x: number,
      y: number
    ): UBrowser;
    /**
     * 将页面垂直滚动到指定位置。
     *
     * 页面滚动。
     */
    scroll(
      y: number
    ): UBrowser;
    /**
     * 向文件上传控件设置文件。
     *
     * @param selector 文件上传控件选择器。
     * @param payload 要上传的文件。支持：
     *   - 图片 Base64 Data URL,
     *   - 文件 Uint8Array
     *   - 文件路径
     *   - 文件路径集合
     */
    file(
      selector: string,
      payload: string | Uint8Array | string[]
    ): UBrowser;
    /**
     * 模拟将文件拖放到指定元素。
     *
     * @param selector 元素选择器。
     * @param x 页面坐标 X。
     * @param y 页面坐标 Y。
     * @param payload 要拖放的文件。支持：
     *   - 图片 Base64 Data URL,
     *   - 文件 Uint8Array
     *   - 文件路径
     *   - 文件路径集合
     */
    drop(
      selector: string,
      payload: string | Uint8Array | string[]
    ): UBrowser;
    /**
     * 模拟将文件拖放到指定元素。
     */
    drop(
      x: number,
      y: number,
      payload: string | Uint8Array | string[]
    ): UBrowser;
    /**
     * 向当前页面执行粘贴操作。
     *
     * @param payload 要粘贴的内容。
     *   - 图片 Base64 Data URL，将执行粘贴图片。
     *   - 粘贴普通文本。
     */
    paste(payload: string): UBrowser;
    /**
     * 下载 URL
     *
     * 下载文件。
     *
     * @param url 下载地址。
     * @param savePath 文件保存路径。
     * @param func JS 函数, 函数在页面环境执行，并返回资源 URL，根据返回 URL 下载文件。
     * @param ...funcArgs 传递给 func 的参数
     */
    download(
      url: string,
      savePath?: string
    ): UBrowser;
    /**
     * 根据页面脚本获取下载 URL
     * 当下载地址需要从当前页面动态获取时，可以传入页面函数。函数在页面环境执行，并返回资源 URL。
     *
     * 下载文件。
     */
    download(
      func: (...args: any[]) => string,
      savePath: string | null,
      ...funcArgs: any[]
    ): UBrowser;
    /**
     * 在当前 uBrowser 页面上下文中执行 JavaScript。
     *
     * @param func 要执行的函数。
     * @param ...funcArgs 传递给函数的参数。
     */
    evaluate(
      func: (...args: any[]) => any,
      ...funcArgs: any[]
    ): UBrowser;
    /**
     * 向当前页面注入 CSS。
     *
     * @param css 要注入的 CSS。
     */
    css(css: string): UBrowser;
    /**
     * 等待固定时间
     *
     * 等待指定条件满足后继续执行。
     *
     * @param ms 等待时长，单位为毫秒。
     * @param selector 元素选择器。
     * @param result 等待条件，为 true 时等待元素出现，为 false 时等待元素消失，默认为 true。
     * @param timeout 等待超时时间，默认为 60000 毫秒（60 秒）。
     * @param interval 轮询检查间隔，默认为 500 毫秒。
     * @param func 在页面环境中执行的判定函数，返回 true 时等待结束。
     * @param ...funcArgs 传递给 func 的参数。
     */
    wait(ms: number): UBrowser;
    /**
     * 等待元素出现，并配置超时时间
     *
     * 等待指定条件满足后继续执行。
     */
    wait(
      selector: string,
      timeout?: number
    ): UBrowser;
    /**
     * 等待元素出现或消失，result 为 false 时等待元素消失
     *
     * 等待指定条件满足后继续执行。
     */
    wait(
      selector: string,
      result?: boolean
    ): UBrowser;
    /**
     * 等待元素出现或消失，并配置超时、轮询间隔
     *
     * 等待指定条件满足后继续执行。
     */
    wait(
      selector: string,
      options?: {
        result?: boolean;
        timeout?: number;
        interval?: number;
      }
    ): UBrowser;
    /**
     * 等待页面函数返回 true
     *
     * 等待指定条件满足后继续执行。
     */
    wait(
      func: (...args: any[]) => boolean,
      timeout?: number,
      ...funcArgs: any[]
    ): UBrowser;
    /**
     * 等待页面函数返回 true，并配置超时、轮询间隔
     *
     * 等待指定条件满足后继续执行。
     */
    wait(
      func: (...args: any[]) => boolean,
      options?: {
        timeout?: number;
        interval?: number;
      },
      ...funcArgs: any[]
    ): UBrowser;
    /**
     * 当指定元素存在（result 为 false 时表示不存在）时执行
     *
     * 根据当前页面状态创建条件执行块。
     *
     * when() 与 endWhen() 之间的操作仅在条件满足时执行，否则会被跳过。
     *
     * when() 必须与 endWhen() 成对使用，并支持嵌套。endWhen() 之后的操作始终执行。
     *
     * 条件会在 uBrowser 执行操作队列时判断，而不是调用 when() 时立即判断。
     *
     * @param selector 元素选择器。
     * @param result 判断条件，为 true 表示元素存在，为 false 表示元素不存在，默认为 true。
     * @param func 在页面环境中执行的判定函数，返回 true 表示条件满足。
     * @param ...funcArgs 传递给 func 的参数。
     */
    when(
      selector: string,
      result?: boolean
    ): UBrowser;
    /**
     * 当页面内函数返回 true 时执行
     *
     * 根据当前页面状态创建条件执行块。
     *
     * when() 与 endWhen() 之间的操作仅在条件满足时执行，否则会被跳过。
     *
     * when() 必须与 endWhen() 成对使用，并支持嵌套。endWhen() 之后的操作始终执行。
     *
     * 条件会在 uBrowser 执行操作队列时判断，而不是调用 when() 时立即判断。
     */
    when(
      func: (...args: any[]) => boolean,
      ...funcArgs: any[]
    ): UBrowser;
    /**
     * 结束 when() 开启的条件块。
     *
     * 条件满足时，when() 与 endWhen() 之间的操作会执行；条件不满足时，这段操作会被跳过。endWhen()
     * 之后的操作始终执行。
     */
    endWhen(): UBrowser;
    /**
     * 获取页面内容并转换为 Markdown。
     *
     * @param selector 要转换的元素选择器。未指定时处理整个页面。
     */
    markdown(
      selector?: string
    ): UBrowser;
    /**
     * 截取页面窗口、指定元素或指定区域的截图，保存为 png 格式。
     *
     * @param target 截图目标，可选：
     *   - 字符串：元素选择器，截取该元素。
     *   - ScreenshotRect 对象：截取指定区域。
     *   - 不传：截取整个 uBrowser 页面窗口。
     * @param savePath 截图保存路径。未指定时默认保存在临时目录。
     */
    screenshot(
      target?: string | ScreenshotRect,
      savePath?: string
    ): UBrowser;
    /**
     * 将当前页面生成 PDF。
     *
     * @param options PDF 配置。
     * @param savePath PDF 保存路径。
     */
    pdf(
      options: PdfOptions,
      savePath?: string
    ): UBrowser;
    /**
     * 获取当前 URL 的 Cookie，name 为空时获取全部
     *
     * 获取 Cookie。
     *
     * @param name Cookie 名称。未指定时获取当前 URL 的全部 Cookie。
     * @param filter Cookie 筛选条件。
     */
    cookies(name?: string): UBrowser;
    /**
     * 根据条件筛选获取 Cookie
     *
     * 获取 Cookie。
     */
    cookies(filter: CookieFilter): UBrowser;
    /**
     * 设置单个 Cookie
     *
     * 设置 Cookie。
     *
     * @param name Cookie 名称。
     * @param value Cookie 值。
     * @param cookies 要设置的 Cookie 名称与值集合。
     */
    setCookies(
      name: string,
      value: string
    ): UBrowser;
    /**
     * 批量设置 Cookie
     *
     * 设置 Cookie。
     */
    setCookies(
      cookies: CookieDetails[]
    ): UBrowser;
    /**
     * 删除当前 URL 指定名称 Cookie。
     *
     * @param name Cookie 名称。
     */
    removeCookies(
      name: string
    ): UBrowser;
    /**
     * 清除指定 URL 的 Cookie。若不指定 URL 则清除当前 URL Cookie。
     *
     * @param url 指定 Cookie 所属 URL。
     */
    clearCookies(
      url?: string
    ): UBrowser;
    /**
     * 显示 uBrowser 窗口。
     */
    show(): UBrowser;
    /**
     * 隐藏 uBrowser 窗口。
     *
     * 隐藏窗口后，uBrowser 仍会继续执行操作。
     */
    hide(): UBrowser;
    /**
     * 打开 uBrowser 开发者工具。
     *
     * @param mode 开发者工具显示方式：
     *   - right：显示在右侧。
     *   - bottom：显示在底部。
     *   - undocked：独立显示。
     *   - detach：使用独立窗口显示。
     */
    devTools(
      mode?: 'right' | 'bottom' | 'undocked' | 'detach'
    ): UBrowser;
  }

  // ---------------------------------------------------------------------------
  // utools 命名空间
  // ---------------------------------------------------------------------------

  namespace utools {
    /**
     * 插件应用加载完成后触发，用于执行一次性初始化任务。
     *
     * 该事件适用于需要在插件应用首次进入前完成的数据加载、配置读取等初始化工作。
     *
     * 使用该事件时，uTools Runtime 会等待 callback 执行完成后再进入插件应用。callback 支持异步函数，返回
     * Promise 时，uTools Runtime 会等待 Promise 完成。
     *
     * @param callback 插件应用加载完成后触发的回调函数。
     */
    function onPluginReady(
      callback: () => void | Promise<void>
    ): void;

    /**
     * 用户进入插件应用时触发。
     *
     * @param callback 插件应用进入时触发的回调函数。
     */
    function onPluginEnter(
      callback: (action: PluginEnterAction) => void
    ): void;

    /**
     * 插件应用退出到后台或结束运行时触发。
     *
     * @param callback 插件应用退出到后台或结束运行时触发的回调函数。
     *   - isKill
     *   - true: 插件应用进程结束运行
     *   - false: 插件应用隐藏到后台，进程仍保持运行
     */
    function onPluginOut(
      callback: (isKill: boolean) => void
    ): void;

    /**
     * 定时任务触发时调用。若插件应用当前未运行，uTools Runtime 会启动插件应用，并触发该事件。
     *
     * @param callback 定时任务触发时调用的回调函数。
     *   - action：定时任务信息。
     */
    function onScheduleTrigger(
      callback: (action: ScheduleTriggerAction) => void
    ): void;

    /**
     * 向 uTools 搜索框推送动态内容，并处理用户选择推送结果后的行为。
     *
     * @param callback 搜索框请求推送内容时调用，返回推送结果列表。返回结果将显示在 uTools
     * 搜索框的搜索结果中。
     * @param onSelect 用户选择推送结果时调用。
     *   - 回调参数为 PluginEnterAction，其中 option 包含用户选择的推送结果信息。
     *   - 仅返回 true 时进入插件应用，并触发 onPluginEnter。
     */
    function onMainPush(
      callback: (action: MainPushAction) => MainPushResult[],
      onSelect?: (action: PluginEnterAction) => boolean | undefined
    ): void;

    /**
     * 用户通过窗口分离功能，将插件应用从 uTools 搜索框主窗口转换为独立窗口时触发。
     *
     * @param callback 插件应用从 uTools 搜索框主窗口转换为独立窗口时触发的回调函数。
     */
    function onPluginDetach(
      callback: () => void
    ): void;

    /**
     * 当插件应用数据通过 uTools 数据同步机制从其他设备更新到当前设备时触发。
     *
     * @param callback 插件应用数据从其他设备同步到当前设备时触发的回调函数。
     *   - docs：同步到当前设备的数据列表。类型参考 DbDoc
     */
    function onDbPull(
      callback: (docs: DbDoc[]) => void
    ): void;

    /**
     * 创建一个自定义窗口
     *
     * 自定义窗口的定义、窗口通信及使用示例，请参考：自定义窗口
     *
     * @param url 窗口加载的 HTML 文件路径，相对于插件应用根目录。
     * @param options 自定义窗口选项。
     * @param callback 自定义窗口页面加载完成后调用，常用于显示窗口、设置窗口状态或向自定义窗口发送消息。
     *
     * @returns
     * - 返回由 uTools 管理的 BrowserWindow 窗口实例。其大部分属性和方法与 Electron BrowserWindow
     * 保持一致，但不支持 BrowserWindow 和 webContents 的实例事件监听。
     */
    function createBrowserWindow(
      url: string,
      options?: BrowserWindowConstructorOptions,
      callback?: Function
    ): BrowserWindow;

    /**
     * 向创建当前自定义窗口的父窗口发送消息。
     *
     * @param channel 消息通道名称。
     * @param ...args 要发送的消息参数。
     */
    function sendToParent(channel: string, ...args: any[]): void;

    /**
     * 获取当前窗口类型。
     *
     * @returns
     * - main：uTools 搜索框主窗口。
     * - detach：插件应用与 uTools 搜索框主窗口分离后运行的独立窗口。
     * - custom: 插件应用创建的自定义窗口。
     */
    function getWindowType(): "main" | "detach" | "custom";

    /**
     * 隐藏 uTools 搜索框主窗口。
     *
     * 执行后，uTools 搜索框主窗口及当前在主窗口中运行的插件应用都会被隐藏；
     * 已经分离为独立窗口的插件应用不受影响。
     *
     * @param isFocusPrevWindow 是否将焦点回归到之前操作的系统窗口，默认 true
     *
     * @returns
     * - true：执行成功。
     * - false: 执行失败，当前执行窗口不是 uTools 搜索框主窗口。
     */
    function hideMainWindow(isFocusPrevWindow?: boolean): boolean;

    /**
     * 显示 uTools 搜索框主窗口。
     *
     * 执行后，uTools 搜索框主窗口及当前在主窗口中运行的插件应用都会显示。
     *
     * @returns
     * - true：执行成功
     * - false: 执行失败，当前执行窗口不是 uTools 搜索框主窗口
     */
    function showMainWindow(): boolean;

    /**
     * 设置插件应用在 uTools 搜索框主窗口中的显示高度，单位为 DIP。
     *
     * @param height 插件应用在主窗口中的显示高度，单位为 DIP。
     *
     * @returns
     * - true：设置成功
     * - false：设置失败，当前执行窗口不是 uTools 搜索框主窗口
     */
    function setExpandHeight(height: number): boolean;

    /**
     * 设置子输入框。
     *
     * 进入插件应用后，uTools 搜索框主窗口的主输入框将切换为子输入框，
     * 插件应用可以通过子输入框接收用户输入。
     *
     * @param onChange 子输入框内容发生变化时调用的回调函数。
     * @param placeholder 子输入框占位文本。
     * @param isFocus 是否自动聚焦输入框，默认为 true。
     *
     * @returns
     * - true：设置成功
     * - false：设置失败，当前执行窗口是自定义窗口
     */
    function setSubInput(
      onChange: (details: { text: string }) => void,
      placeholder?: string,
      isFocus?: boolean
    ): boolean;

    /**
     * 移除子输入框。
     *
     * @returns
     * - true：移除成功。
     * - false: 移除失败，当前执行窗口是自定义窗口
     */
    function removeSubInput(): boolean;

    /**
     * 设置子输入框的值。
     *
     * @param text 要设置的文本内容。
     *
     * @returns
     * - true：设置成功。
     * - false：设置失败，当前执行窗口是自定义窗口。
     */
    function setSubInputValue(text: string): boolean;

    /**
     * 使子输入框获得焦点。
     *
     * @returns
     * - true：设置成功。
     * - false: 设置失败，当前执行窗口是自定义窗口。
     */
    function subInputFocus(): boolean;

    /**
     * 使子输入框失去焦点，并使插件应用获得焦点。
     */
    function subInputBlur(): void;

    /**
     * 使子输入框获得焦点，并选中输入框中的全部内容。
     *
     * @returns
     * - true：操作成功。
     * - false：操作失败，当前执行窗口是自定义窗口。
     */
    function subInputSelect(): boolean;

    /**
     * 在当前页面中查找指定文本。
     *
     * @param text 要查找的文本。
     * @param options 查找选项。
     */
    function findInPage(text: string, options?: FindInPageOptions): void;

    /**
     * 停止当前页面的文本查找，与 findInPage 配合使用。
     *
     * @param action 停止查找后的选区处理方式，默认为 clearSelection。
     *   - clearSelection：清除选中文本。
     *   - keepSelection：保留选中文本。
     *   - activateSelection：激活选中文本。
     */
    function stopFindInPage(
      action: "clearSelection" | "keepSelection" | "activateSelection"
    ): void;

    /**
     * 退出当前插件应用。
     *
     * 默认情况下，插件应用退出到后台，等待下次快速响应；传入 true 时，将结束插件应用的运行。
     *
     * @param isKill 是否结束插件应用的运行，默认为 false。
     */
    function outPlugin(isKill?: boolean): void;

    /**
     * 获取插件应用本地数据目录。目录不存在时会自动创建。
     *
     * 插件应用运行过程中产生，并且需要长期保留的本地数据，应存储在插件应用本地数据目录。
     *
     * 关于插件应用的数据存储方案和不同类型数据的选择，请参考：
     *
     * 数据存储
     */
    function getPluginLocalDataPath(): string;

    /**
     * 获取插件应用临时目录。目录不存在时会自动创建。
     *
     * 生命周期较短、无需持久化保存的数据，应存储在插件应用临时目录。
     *
     * 关于插件应用的数据存储方案和不同类型数据的选择，请参考：
     *
     * 数据存储
     */
    function getPluginTempPath(): string;

    /**
     * 弹出系统通知。
     *
     * @param body 通知内容。
     * @param clickFeatureCode 点击通知后进入的功能编码，对应 plugin.json 中配置的 feature.code。不传入时，
     * 点击通知不会进入插件应用。
     */
    function showNotification(body: string, clickFeatureCode?: string): void;

    /**
     * 弹出文件选择对话框。
     *
     * @param options 文件选择对话框选项。
     *
     * @returns
     * - 用户确认选择：返回所选文件或文件夹的路径数组。
     * - 用户取消：返回 undefined。
     */
    function showOpenDialog(options: OpenDialogOptions): string[] | undefined;

    /**
     * 弹出文件保存对话框。
     *
     * @param options 文件保存对话框选项。
     *
     * @returns
     * - 用户确认保存：返回用户选择的文件路径。
     * - 用户取消：返回 undefined。
     */
    function showSaveDialog(options: SaveDialogOptions): string | undefined;

    /**
     * 使用系统默认方式打开指定的文件或文件夹。
     *
     * @param fullPath 文件或文件夹路径。
     *
     * @returns
     * - 操作成功：返回空字符串 ""。
     * - 操作失败：返回包含错误信息的字符串。
     */
    function shellOpenPath(fullPath: string): Promise<string>;

    /**
     * 将指定的文件或文件夹移入系统回收站。
     *
     * @param fullPath 文件或文件夹路径。
     */
    function shellTrashItem(fullPath: string): Promise<void>;

    /**
     * 在系统文件管理器中显示指定的文件或文件夹。
     *
     * @param fullPath 文件或文件夹路径。
     */
    function shellShowItemInFolder(fullPath: string): void;

    /**
     * 使用系统默认应用打开指定的 URL 或协议链接。
     *
     * @param url URL 或协议链接，通常为 http 或 https 协议，也支持其他系统协议，例如 mailto。
     */
    function shellOpenExternal(url: string): Promise<void>;

    /**
     * 播放系统提示音。
     */
    function shellBeep(): void;

    /**
     * 获取当前插件应用对应的设备 ID。
     *
     * 设备 ID 经过哈希处理，可用于在当前插件应用中区分不同设备。不同插件应用获取的设备 ID 相互独立。
     */
    function getNativeId(): string;

    /**
     * 获取 uTools 软件版本。
     */
    function getAppVersion(): string;

    /**
     * 获取当前登录用户的信息。
     *
     * @returns
     * - 用户已登录：返回 UserInfo
     * - 用户未登录：返回 null
     */
    function getUser(): UserInfo | null;

    /**
     * 获取 uTools 提供的系统路径。
     *
     * @param name 路径名称，支持以下值：
     *   - home：用户主目录
     *   - temp：系统临时目录
     *   - desktop：用户桌面目录
     *   - documents：用户文档目录
     *   - downloads：用户下载目录
     *   - music：用户音乐目录
     *   - pictures：用户图片目录
     *   - videos：用户视频目录
     *
     * @returns
     * - 返回完整路径。
     */
    function getPath(name: string): string;

    /**
     * 获取文件、文件夹或指定类型对应的系统图标。
     *
     * @param filePath 文件路径、文件扩展名或特殊类型。
     *   - 传入文件路径时，获取该文件对应的系统图标。
     *   - 传入文件扩展名时，获取该扩展名对应的系统图标，例如 .txt。
     *   - 传入 folder 时，获取系统文件夹图标。
     *
     * @returns
     * - 返回图标的 Base64 Data URL 字符串。
     */
    function getFileIcon(filePath: string): string;

    /**
     * 异步获取文件、文件夹或指定类型对应的系统图标。
     *
     * @param filePath 参考 utools.getFileIcon(filePath)。
     *
     * @returns
     * - 返回图标的 Base64 Data URL 字符串。
     */
    function getFileIconAsync(filePath: string): Promise<string>;

    /**
     * 读取当前活动文件管理器窗口的路径。
     *
     * 仅当当前活动窗口为系统文件管理器时有效。
     */
    function readCurrentFolderPath(): Promise<string>;

    /**
     * 读取当前活动浏览器窗口的 URL。
     *
     * 仅当当前活动窗口为浏览器时有效。
     */
    function readCurrentBrowserUrl(): Promise<string>;

    /**
     * 判断当前插件应用是否运行在开发环境。
     *
     * 插件应用开发环境是指：插件应用项目通过「uTools 开发者工具」安装的开发工程。
     *
     * @returns
     * - true：开发环境。
     * - false：生产环境。
     */
    function isDev(): boolean;

    /**
     * 判断当前操作系统是否为 macOS。
     *
     * @returns
     * - true：当前系统为 macOS。
     * - false: 当前系统不是 macOS。
     */
    function isMacOS(): boolean;

    /**
     * 判断当前操作系统是否为 Windows。
     *
     * @returns
     * - true：当前系统为 Windows。
     * - false: 当前系统不是 Windows。
     */
    function isWindows(): boolean;

    /**
     * 判断当前操作系统是否为 Linux。
     *
     * @returns
     * - true：当前系统为 Linux。
     * - false：当前系统不是 Linux。
     */
    function isLinux(): boolean;

    /**
     * 判断当前 uTools 是否使用深色主题。
     *
     * @returns
     * - true: 当前 uTools 使用深色主题。
     * - false: 当前 uTools 使用浅色主题。
     */
    function isDarkColors(): boolean;

    /**
     * 获取显示器截图，用于程序自动截图，不显示截图交互界面。
     *
     * 未指定显示器时，返回所有显示器的截图。
     *
     * @param options 屏幕截图选项。
     *   - displayId：指定要截取的显示器 ID。未设置时返回所有显示器的截图。
     */
    function captureDisplay(options?: CaptureDisplayOptions): Promise<DisplayCapture[]>;

    /**
     * 进入截图模式，用户框选区域后返回截图图片的 Data URL。支持 Promise 和回调两种调用方式。
     *
     * @param callback 截图完成后的回调函数。
     *   - image：截图图片的 Base64 Data URL。
     */
    function screenCapture(): Promise<string>;

    /**
     * 进入截图模式，用户框选区域后返回截图图片的 Data URL。支持 Promise 和回调两种调用方式。
     */
    function screenCapture(callback: (image: string) => void): void;

    /**
     * 进入屏幕取色模式，用户选择颜色后返回颜色信息。支持 Promise 和回调两种调用方式。
     *
     * @param callback 颜色选择完成后的回调函数。
     *   - color：选择的颜色信息。
     */
    function screenColorPick(): Promise<PickColor>;

    /**
     * 进入屏幕取色模式，用户选择颜色后返回颜色信息。支持 Promise 和回调两种调用方式。
     */
    function screenColorPick(callback: (color: PickColor) => void): void;

    /**
     * 获取所有显示器
     */
    function getAllDisplays(): Display[];

    /**
     * 获取主显示器
     */
    function getPrimaryDisplay(): Display;

    /**
     * 获取当前鼠标位置。返回系统屏幕绝对坐标，坐标单位为 DIP。
     */
    function getCursorScreenPoint(): Point;

    /**
     * 获取包含指定点的显示器。如果点不属于任何显示器区域，则返回距离最近的显示器。
     *
     * @param point 屏幕位置，坐标单位为 DIP。
     */
    function getDisplayNearestPoint(point: Point): Display;

    /**
     * 获取与指定矩形区域匹配的显示器。当矩形跨越多个显示器时，返回与该矩形区域重叠面积最大的显示器。
     *
     * @param rect 屏幕区域，坐标单位为 DIP。
     */
    function getDisplayMatching(rect: Rectangle): Display;

    /**
     * 将屏幕物理像素坐标转换为 DIP 坐标。
     *
     * @param point 屏幕物理像素坐标。
     */
    function screenToDipPoint(point: Point): Point;

    /**
     * 将屏幕 DIP 坐标转换为物理像素坐标。
     *
     * @param point 屏幕 DIP 坐标。
     */
    function dipToScreenPoint(point: Point): Point;

    /**
     * 将屏幕物理像素区域转换为 DIP 区域。
     *
     * @param rect 屏幕物理像素区域。
     */
    function screenToDipRect(rect: Rectangle): Rectangle;

    /**
     * 将屏幕 DIP 区域转换为物理像素区域。
     *
     * @param rect 屏幕 DIP 区域。
     */
    function dipToScreenRect(rect: Rectangle): Rectangle;

    /**
     * 获取可用于录屏的窗口和显示器来源。
     *
     * 返回的来源可配合 navigator.mediaDevices.getUserMedia() 创建录屏流。
     *
     * @param options 录屏源获取选项。
     */
    function desktopCaptureSources(options?: DesktopCaptureSourcesOptions): Promise<DesktopCaptureSource[]>;

    /**
     * 复制文本并执行粘贴操作。
     *
     * @param text 要粘贴的文本。
     *
     * @returns
     * - true：已成功执行复制和粘贴操作，但目标应用是否实际接收文本取决于当前系统及目标窗口是否支持文本粘贴
     * 。
     * - false：执行失败，例如 text 为空字符串，或调用 API 时当前窗口仍然拥有焦点。
     */
    function hideMainWindowPasteText(text: string): boolean;

    /**
     * 复制文件并执行粘贴操作。
     *
     * @param filePath 文件路径，可以是单个文件路径，也可以是文件路径数组。
     *
     * @returns
     * - true：已成功执行复制和粘贴操作，但目标应用是否实际接收文件取决于当前系统及目标窗口是否支持文件粘贴
     * 。
     * - false：执行失败，例如文件不存在，或调用 API 时当前窗口仍然拥有焦点。
     */
    function hideMainWindowPasteFile(filePath: string | string[]): boolean;

    /**
     * 复制图像并执行粘贴操作。
     *
     * @param image 图像数据，可以是图片文件路径、图片 Data URL 或 Uint8Array。
     *
     * @returns
     * - true：已成功执行复制和粘贴操作，但目标应用是否实际接收图像取决于当前系统及目标窗口是否支持图像粘贴
     * 。
     * - false：执行失败，例如图像不存在、图像数据无效，或调用 API 时当前窗口仍然拥有焦点。
     */
    function hideMainWindowPasteImage(image: string | Uint8Array): boolean;

    /**
     * 模拟用户键盘输入，将文本输入到当前具有输入焦点的外部应用。
     *
     * 与 hideMainWindowPasteText 不同，此 API 不通过剪贴板，而是模拟用户输入文本的方式写入目标应用。
     *
     * 支持 Emoji 及其他 Unicode 字符。
     *
     * @param text 要输入的文本，支持 Emoji 及其他 Unicode 字符。
     *
     * @returns
     * - true：已成功执行输入操作，但目标应用是否实际接收文本取决于当前系统及目标窗口是否支持键盘输入。
     * - false：执行失败，例如 text 为空字符串，或调用 API 时当前窗口仍然拥有焦点。
     */
    function hideMainWindowTypeString(text: string): boolean;

    /**
     * 从插件应用中发起文件拖拽，将文件或文件夹拖拽到其他应用窗口。
     *
     * 通常与界面 UI 的 onDragStart 事件配合使用。
     *
     * @param filePath 要拖拽的文件或文件夹路径，可以是单个路径，也可以是路径数组。
     */
    function startDrag(filePath: string | string[]): void;

    /**
     * 复制文本
     *
     * @param text 复制的文本
     *
     * @returns
     * - true：复制成功
     * - false：复制失败
     */
    function copyText(text: string): boolean;

    /**
     * 复制文件或文件夹。
     *
     * 将指定文件或文件夹写入系统剪贴板。
     *
     * @param filePath 需要复制的文件或文件夹路径。
     *   - 可以传入单个路径。
     *   - 也可以传入多个路径组成的数组。
     *
     * @returns
     * - true：复制成功
     * - false：复制失败
     */
    function copyFile(filePath: string | string[]): boolean;

    /**
     * 复制图片数据到系统剪贴板。
     *
     * @param image
     *   - 图片文件路径。
     *   - 图片 Data URL。
     *   - 图片二进制数据 Uint8Array。
     *
     * @returns
     * - true：复制成功
     * - false：复制失败
     */
    function copyImage(image: string | Uint8Array): boolean;

    /**
     * 获取系统剪贴板中的文件列表。
     *
     * @returns
     * - 返回当前剪贴板中的文件列表。
     * - 当当前剪贴板内容不包含文件时，返回 null。
     */
    function getCopiedFiles(): CopiedFile[] | null;

    /**
     * registerTool 用于注册插件应用工具。
     *
     * 注册后的工具可以被以下 AI 场景使用：
     *
     * 1. utools.ai() 调用时，AI 可以根据工具描述自动触发 Function Calling。
     * 2. 用户开启 MCP 服务后，可作为 MCP Tool 提供给第三方 AI Agent。
     *
     * @param name 工具名称。
     *   - 如果需要通过 MCP 暴露给第三方 AI Agent，需要同时在 plugin.json 的 tools 中声明。详情参考 tools
     * 配置
     *   - 推荐使用小写 snake_case，示例：say_hi、get_system_info、video_convert。
     * @param handler 调用工具时执行的函数
     *   - params 调用时传入的参数对象
     *   - ctx 工具执行上下文，仅通过 MCP 调用时提供。
     */
    function registerTool(
      name: string,
      handler: (
        params: Record<string, any>,
        ctx?: ToolContext
      ) => any | Promise<any>
    ): void;

    /**
     * 调用 AI 大模型，并支持 Function Calling 工具调用。
     *
     * @param options Ai 选项
     * @param streamCallback 流式调用函数 (可选)
     * @param 返回定制的 AiPromise
     */
    function ai(options: AiOptions, streamCallback: (chunk: Message) => void): AiPromise<void>;

    /**
     * 调用 AI 大模型，并支持 Function Calling 工具调用。
     */
    function ai(options: AiOptions): AiPromise<Message>;

    /**
     * 获取所有可用 AI 模型列表
     */
    function allAiModels(): Promise<AiModel[]>;

    /**
     * 向用户请求创建定时任务。
     *
     * @param schedule 定时任务配置。
     */
    function requestSchedule(schedule: Schedule): Promise<void>;

    /**
     * 获取当前插件应用已创建的定时任务列表。
     */
    function getSchedules(): ScheduleInfo[];

    /**
     * 删除指定的定时任务。如果任务不存在，将抛出异常。
     *
     * @param code 要删除的任务唯一标识。
     */
    function removeSchedule(code:string): void;

    /**
     * 模拟键盘按键操作。
     *
     * @param key 要模拟的按键。
     * @param modifiers 要模拟的修饰键，要模拟的修饰键，可传入多个，例如 shift、ctrl、alt、command。
     */
    function simulateKeyboardTap(key: string, ...modifiers: string[]): void;

    /**
     * 模拟鼠标移动到指定屏幕坐标。
     *
     * @param x 鼠标位置距离屏幕左侧的坐标，单位为物理像素。
     * @param y 鼠标位置距离屏幕顶部的坐标，单位为物理像素。
     */
    function simulateMouseMove(x: number, y: number): void;

    /**
     * 模拟鼠标左键单击。
     *
     * @param x 鼠标位置距离屏幕左侧的坐标，单位为物理像素。
     * @param y 鼠标位置距离屏幕顶部的坐标，单位为物理像素。
     */
    function simulateMouseClick(x: number, y: number): void;

    /**
     * 模拟鼠标左键双击。
     *
     * @param x 鼠标位置距离屏幕左侧的坐标，单位为物理像素。
     * @param y 鼠标位置距离屏幕顶部的坐标，单位为物理像素。
     */
    function simulateMouseDoubleClick(x: number, y: number): void;

    /**
     * 模拟鼠标右键单击。
     *
     * @param x 鼠标位置距离屏幕左侧的坐标，单位为物理像素。
     * @param y 鼠标位置距离屏幕顶部的坐标，单位为物理像素。
     */
    function simulateMouseRightClick(x: number, y: number): void;

    /**
     * 获取插件应用的动态功能。
     *
     * @param codes 可选，要获取的功能编码列表。不传则返回全部动态功能。
     *
     * @returns
     * - 返回动态功能对象数组。
     */
    function getFeatures(codes?: string[]): Feature[];

    /**
     * 设置动态功能。
     *
     * 如果指定的功能编码已经存在，则更新该功能；否则创建新的动态功能。
     *
     * @param feature 要设置的功能对象，参考 Feature 类型定义
     */
    function setFeature(feature: Feature): void;

    /**
     * 删除指定的动态功能。
     *
     * @param code 要删除的功能编码
     *
     * @returns
     * - true：删除成功
     * - false：删除失败或功能不存在
     */
    function removeFeature(code: string): boolean;

    /**
     * 跳转到指定插件应用的功能指令或匹配指令。
     *
     * 如果目标插件应用尚未安装，uTools 将跳转到插件应用市场，并根据目标信息引导用户安装。
     *
     * @param label 目标功能指令。
     *   - 传入 string 时，表示指令名称。uTools 会查找所有拥有该指令的插件应用。
     *   - 传入 [pluginName, label] 时，分别表示插件应用名称和指令名称，uTools
     * 会直接定位到指定插件应用的对应指令。
     * @param payload 传递给目标指令的匹配内容。
     *   - 跳转到功能指令时，无需传递 payload。
     *   - 跳转到匹配指令时，必须传递符合目标指令匹配规则的数据。
     */
    function redirect(
      label: string | [string, string],
      payload?: string | MatchPayload
    ): boolean;

    /**
     * 跳转至 uTools 全局快捷键设置界面，用于用户配置指定指令的全局快捷键。
     *
     * uTools 全局快捷键支持普通组合快捷键，以及以下扩展快捷键：
     * - 单键 F1-F12
     * - 双击 Ctrl、Alt、Shift
     *
     * 常用于为需要快速触发的功能提供快捷入口，例如：
     *
     * - 通过快捷键打开「悬浮剪贴板」
     * - 通过快捷键触发「翻译」功能
     *
     * 该方法仅负责跳转快捷键设置界面，不会自动创建或修改快捷键配置。
     *
     * @param cmdLabel 指令名称，对应 plugin.json 中 cmds[] 定义的指令。
     *   - autocopy 为 false 时，可指定功能指令或匹配指令。通常指定功能指令名称；如果指定匹配指令，
     * 用户需要先手动复制内容，再触发全局快捷键。
     *   - autocopy 为 true 时，应指定匹配指令名称。
     * @param autocopy 是否启用自动复制模式，默认为 false。
     *   - 设置为 true 时，用户通过配置的全局快捷键触发后，uTools 会自动复制当前选中内容，
     * 并使用复制的内容匹配指定的匹配指令，匹配成功后打开插件应用。
     */
    function redirectHotKeySetting(cmdLabel: string, autocopy?: boolean): void;

    /**
     * 获取指定指令配置的全局快捷键，返回快捷键字符串，例如：Ctrl+Shift+A、F6。如果用户未设置快捷键，
     * 则返回 null。
     *
     * @param cmdLabel 指令名称
     */
    function getCmdHotKey(cmdLabel: string): string | null;

    /**
     * 获取当前处于空闲状态的 uBrowser 窗口。
     *
     * @returns
     * - 返回当前处于空闲状态的 uBrowser 窗口集合。参考 UBrowserWindowInstance 类型定义
     * - 空闲状态表示该 uBrowser 窗口当前未执行任何操作队列，可以通过 run(id) 继续执行新的操作。
     */
    function getIdleUBrowsers(): UBrowserWindowInstance[];

    /**
     * 设置 uBrowser 网络代理。
     *
     * 设置完代理，插件应用下所有 uBrowser 都将使用代理。
     *
     * @param config 代理配置。
     */
    function setUBrowserProxy(
      config: ProxyConfig
    ): void;

    /**
     * 清除 uBrowser 缓存。
     *
     * 用于清理 uBrowser 使用的缓存数据。
     */
    function clearUBrowserCache(): void;

    /**
     * 创建 Sharp 实例。
     *
     * @param input 输入图像数据。支持以下类型：
     *   - Buffer：Node.js Buffer，包含图片二进制数据
     *   - Uint8Array / ArrayBuffer：二进制图片数据
     *   - string：本地图片文件路径
     *   - Object：特殊输入对象，例如 { text }，可用于根据文本创建图像。
     *   - Array：多个输入图像，可用于图像拼接；通过 options.join.animated 可将输入图像作为多帧动画处理。
     * @param options 配置 Sharp 实例行为。
     *
     * @returns
     * - 返回一个 Sharp 实例，可以通过链式调用对图像进行处理。
     */
    function sharp(
      input?: Buffer | Uint8Array | Uint8ClampedArray | ArrayBuffer | string | object | any[],
      options?: SharpOptions
    ): Sharp;

    /**
     * 执行 FFmpeg 命令。
     *
     * @param args 传递给 FFmpeg 的命令行参数。每个参数作为数组中的一个元素传入，不需要包含 ffmpeg
     * 命令本身。
     * @param onProgress FFmpeg 处理过程中周期性触发的进度回调。
     * @param options FFmpeg 执行选项。
     *   - onProgress：FFmpeg 处理过程中周期性触发的进度回调。
     *   - onLog：接收 FFmpeg 执行过程中的日志输出。
     *
     * @returns
     * - 返回一个 FFmpegProcess 对象。
     * - FFmpegProcess 是 Promise<void> 的扩展，除支持标准 Promise 操作外，还提供 kill() 和 quit() 方法，
     * 用于控制正在运行的 FFmpeg 任务。
     */
    function runFFmpeg(
      args: string[],
      onProgress?: (progress: RunFFmpegProgress) => void
    ): FFmpegProcess;

    /**
     * 执行 FFmpeg 命令。
     */
    function runFFmpeg(
      args: string[], 
      options?: RunFFmpegOptions
     ): FFmpegProcess;

    /**
     * 获取当前用户的购买授权状态。
     *
     * @returns
     * - false：用户未购买，或当前授权已失效。
     * - true：用户拥有永久授权。
     * - string：用户拥有有效期授权，返回授权到期时间，格式为 yyyy-MM-dd HH:mm:ss。
     * - 该 API 返回的是当前用户的授权状态，插件应用可以据此判断用户是否可以使用需要付费授权的功能。
     */
    function isPurchasedUser(): boolean | string;

    /**
     * 打开插件应用的购买弹窗。
     *
     * @param options 购买参数。
     * @param callback 购买成功后的回调函数。
     */
    function openPurchase(
      options: OpenPurchaseOptions,
      callback?: () => void
    ): void;

    namespace db {
      /**
       * 创建或更新数据库文档。
       *
       * 单个文档大小限制：最大 1 MB
       *
       * @param doc 数据库文档对象。
       */
      function put(doc: DbDoc): DbResult;

      /**
       * 根据文档 ID 获取文档。
       *
       * 文档不存在时返回 null。
       *
       * @param id 文档 ID
       */
      function get(id: string): DbDoc | null;

      /**
       * 删除数据库文档。
       *
       * 支持：
       * - 通过文档对象删除；
       * - 通过文档 ID 删除。
       *
       * @param doc 文档对象
       * @param id 文档 ID
       */
      function remove(doc: DbDoc): DbResult;

      /**
       * 删除数据库文档。
       *
       * 支持：
       * - 通过文档对象删除；
       * - 通过文档 ID 删除。
       */
      function remove(id: string): DbResult;

      /**
       * 批量创建、更新或删除数据库文档。
       *
       * 批量删除是将文档对象设置为 _deleted:true
       *
       * @param docs 文档对象集合
       */
      function bulkDocs(docs: DbDoc[]): DbResult[];

      /**
       * 获取插件应用数据库文档。
       *
       * 支持：
       *
       * - 不传参数：获取全部文档；
       * - 传入字符串：根据文档 ID 前缀过滤；
       * - 传入数组：根据指定 ID 获取文档。
       *
       * @param idStartsWith 文档 ID 前缀
       * @param ids 文档 ID 数组
       */
      function allDocs(idStartsWith?: string): DbDoc[];

      /**
       * 获取插件应用数据库文档。
       *
       * 支持：
       *
       * - 不传参数：获取全部文档；
       * - 传入字符串：根据文档 ID 前缀过滤；
       * - 传入数组：根据指定 ID 获取文档。
       */
      function allDocs(ids: string[]): DbDoc[];

      /**
       * 创建附件。
       *
       * 数据库支持存储附件，例如图片、文件等二进制数据。
       *
       * @param id 附件文档 ID
       * @param attachment 附件二进制数据，支持 Buffer 或 Uint8Array
       * @param type MIME 类型，例如 image/png。
       */
      function postAttachment(id: string, attachment: Buffer | Uint8Array, type: string): DbResult;

      /**
       * 获取附件，不存在返回 null
       *
       * @param id 附件文档 ID
       */
      function getAttachment(id: string): Uint8Array | null;

      /**
       * 获取附件 MIME 类型，不存在返回 null
       *
       * @param id 附件文档 ID
       */
      function getAttachmentType(id: string): string | null;

      /**
       * 获取数据从云端拉取到本地的状态。
       *
       * 拉取完成表示云端中来自其他设备的数据变更已全部更新到本机。
       * 此时读取数据库可以获取其他设备产生的最新数据。
       *
       * 在需要基于完整数据进行一致性处理时（例如清理未被引用的附件），应先确认云端数据已拉取完成。
       */
      function replicateStateFromCloud(): State;

      namespace promises {
        /**
         * 创建或更新数据库文档。
         *
         * 单个文档大小限制：最大 1 MB
         *
         * @param doc 数据库文档对象。
         */
        function put(doc: DbDoc): Promise<DbResult>;

        /**
         * 根据文档 ID 获取文档。
         *
         * 文档不存在时返回 null。
         *
         * @param id 文档 ID
         */
        function get(id: string): Promise<DbDoc | null>;

        /**
         * 删除数据库文档。
         *
         * 支持：
         * - 通过文档对象删除；
         * - 通过文档 ID 删除。
         *
         * @param doc 文档对象
         * @param id 文档 ID
         */
        function remove(doc: DbDoc): Promise<DbResult>;

        /**
         * 删除数据库文档。
         *
         * 支持：
         * - 通过文档对象删除；
         * - 通过文档 ID 删除。
         */
        function remove(id: string): Promise<DbResult>;

        /**
         * 批量创建、更新或删除数据库文档。
         *
         * 批量删除是将文档对象设置为 _deleted:true
         *
         * @param docs 文档对象集合
         */
        function bulkDocs(docs: DbDoc[]): Promise<DbResult[]>;

        /**
         * 获取插件应用数据库文档。
         *
         * 支持：
         *
         * - 不传参数：获取全部文档；
         * - 传入字符串：根据文档 ID 前缀过滤；
         * - 传入数组：根据指定 ID 获取文档。
         *
         * @param idStartsWith 文档 ID 前缀
         * @param ids 文档 ID 数组
         */
        function allDocs(idStartsWith?: string): Promise<DbDoc[]>;

        /**
         * 获取插件应用数据库文档。
         *
         * 支持：
         *
         * - 不传参数：获取全部文档；
         * - 传入字符串：根据文档 ID 前缀过滤；
         * - 传入数组：根据指定 ID 获取文档。
         */
        function allDocs(ids: string[]): Promise<DbDoc[]>;

        /**
         * 创建附件。
         *
         * 数据库支持存储附件，例如图片、文件等二进制数据。
         *
         * @param id 附件文档 ID
         * @param attachment 附件二进制数据，支持 Buffer 或 Uint8Array
         * @param type MIME 类型，例如 image/png。
         */
        function postAttachment(id: string, attachment: Buffer | Uint8Array, type: string): Promise<DbResult>;

        /**
         * 获取附件，不存在返回 null
         *
         * @param id 附件文档 ID
         */
        function getAttachment(id: string): Promise<Uint8Array | null>;

        /**
         * 获取附件 MIME 类型，不存在返回 null
         *
         * @param id 附件文档 ID
         */
        function getAttachmentType(id: string): Promise<string | null>;

        /**
         * 获取数据从云端拉取到本地的状态。
         *
         * 拉取完成表示云端中来自其他设备的数据变更已全部更新到本机。
         * 此时读取数据库可以获取其他设备产生的最新数据。
         *
         * 在需要基于完整数据进行一致性处理时（例如清理未被引用的附件），应先确认云端数据已拉取完成。
         */
        function replicateStateFromCloud(): Promise<State>;
      }
    }

    namespace dbStorage {
      /**
       * 保存键值数据。
       *
       * @param key 键值
       * @param value 数据
       */
      function setItem(key: string, value: any): void;

      /**
       * 读取键值数据。没有数据返回 null
       *
       * @param key 键值
       */
      function getItem(key: string): any;

      /**
       * 删除键值数据。
       *
       * @param key 键值
       *
       * @returns
       * - true：删除成功
       * - false：删除失败
       */
      function removeItem(key: string): boolean;
    }

    /**
     * uBrowser 链式操作入口，用法：utools.ubrowser.goto(url).click(selector).run()
     */

    const ubrowser: UBrowser;
  }

  /**
   * uTools API 同时挂载在 window 上，window.utools 与 utools 等价
   */
  interface Window {
    utools: typeof utools;
  }
}
