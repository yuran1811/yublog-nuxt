export const IconsMapping: Record<string, Record<string, string>> = {
  lockfiles: {
    'bun.lock': 'bun-lock',
    'cargo.lock': 'cargo-lock',
    'deno.lock': 'deno-lock',
    'nix.lock': 'nix-lock',
    'package-lock.json': 'npm-lock',
    'package.json': 'package-json',
    'pixi.lock': 'pixi-lock',
    'poetry.lock': 'poetry-lock',
    'yarn.lock': 'yarn-lock',
  },

  fileType: {
    ae: 'adobe-ae',
    ai: 'adobe-ai',
    id: 'adobe-id',
    pts: 'adobe-ps',
    xd: 'adobe-xd',

    excel: 'ms-excel',
    xls: 'ms-excel',
    xlsx: 'ms-excel',
    ppt: 'ms-powerpoint',
    pptx: 'ms-powerpoint',
    doc: 'ms-word',
    docx: 'ms-word',

    mp3: 'audio',
    wav: 'audio',
    flac: 'audio',
    aac: 'audio',
    ogg: 'audio',
    m4a: 'audio',
    wma: 'audio',
    aiff: 'audio',
    aif: 'audio',
    ac3: 'audio',
    amr: 'audio',
    ape: 'audio',
    mid: 'midi',

    mp4: 'video',
    mkv: 'video',
    webm: 'video',
    avi: 'video',
    mov: 'video',
    wmv: 'video',
    mpg: 'video',
    mpeg: 'video',
    flv: 'video',

    png: 'image',
    jpg: 'image',
    jpeg: 'image',
    webp: 'image',
    gif: 'image',

    ttf: 'font',
    otf: 'font',
    woff: 'font',
    woff2: 'font',
    eot: 'font',

    api: 'api-blueprint',
    asm: 'assembly',
    s: 'assembly',
    asmx: 'assembly',
    bat: 'batch',
    cmd: 'batch',
    sh: 'bash',
    ahk: 'autohotkey',
    bin: 'binary',
    h: 'c-header',
    hpp: 'cpp-header',
    cs: 'csharp',
    keep: 'git',
    db: 'database',
    ico: 'favicon',
    fig: 'figma',
    hbs: 'handlebars',
    tex: 'latex',
    txt: 'text',
    nuxtignore: 'nuxt-ignore',
    gitignore: 'git',
    gitattributes: 'git',
    gitmodules: 'git',
    gitkeep: 'git',
    ps: 'powershell',
    ps1: 'powershell',
    psd1: 'powershell',
    psm1: 'powershell',
    buf: 'proto',
    jsconfig: 'javascript-config',
    tsconfig: 'typescript-config',
    cjs: 'javascript',
    mjs: 'javascript',
    js: 'javascript',
    ts: 'typescript',
    md: 'markdown',
    mdx: 'markdown-mdx',
    py: 'python',
    rs: 'rust',
    yml: 'yaml',
    jsx: 'javascript-react',
    tsx: 'typescript-react',
    sym: 'symlink',
    vi: 'vim',
    wa: 'web-assembly',
  },

  folderType: {
    '.cache': 'temp',
    'src-tauri': 'tauri',
    animate: 'animation',
    animates: 'animation',
    animations: 'animation',
    apis: 'api',
    apps: 'app',
    asset: 'assets',
    audios: 'audio',
    auth: 'admin',
    backend: 'server',
    cache: 'temp',
    caches: 'temp',
    capture: 'video',
    captures: 'video',
    cmd: 'command',
    cmds: 'command',
    commands: 'command',
    composable: 'composables',
    configs: 'config',
    constants: 'constant',
    contents: 'content',
    controller: 'controllers',
    cores: 'core',
    css: 'styles',
    data: 'database',
    db: 'database',
    dbs: 'database',
    doc: 'docs',
    document: 'docs',
    documents: 'docs',
    downloads: 'download',
    frontend: 'client',
    gui: 'themes',
    icon: 'images',
    icons: 'images',
    img: 'images',
    imgs: 'images',
    js: 'node',
    layout: 'layouts',
    middlewares: 'middleware',
    model: 'packages',
    models: 'packages',
    music: 'audio',
    musics: 'audio',
    package: 'packages',
    page: 'views',
    pages: 'views',
    picture: 'images',
    pictures: 'images',
    queues: 'queue',
    route: 'routes',
    schema: 'packages',
    schemas: 'packages',
    screenshot: 'images',
    screenshots: 'images',
    script: 'scripts',
    service: 'plugins',
    services: 'plugins',
    setting: 'config',
    settings: 'config',
    share: 'connection',
    shared: 'connection',
    sharing: 'connection',
    store: 'redux',
    style: 'styles',
    svgs: 'svg',
    template: 'templates',
    test: 'tests',
    theme: 'themes',
    tmp: 'temp',
    tool: 'utils',
    tools: 'utils',
    tran: 'locales',
    trans: 'locales',
    translate: 'locales',
    translates: 'locales',
    translation: 'locales',
    translations: 'locales',
    ts: 'types',
    type: 'types',
    ui: 'themes',
    util: 'utils',
    videos: 'video',
  },
};

export const DockItems: DockItemType[] = [
  {
    type: 'component',
    name: 'yuran1811',
    icon: '',
    img: 'https://avatars.githubusercontent.com/u/76398420?v=4',
    link: '',
  },
  {
    type: 'link',
    name: 'GitHub',
    icon: 'lucide:github',
    img: '',
    link: 'https://github.com/yuran1811',
  },
  {
    type: 'link',
    name: 'LinkedIn',
    icon: 'lucide:linkedin',
    img: '',
    link: 'https://www.linkedin.com/in/yuran-legends-6252b6222/',
  },
  {
    type: 'link',
    name: 'Facebook',
    icon: 'lucide:facebook',
    img: '',
    link: 'https://www.facebook.com/YuranLegends/',
  },
  {
    type: 'link',
    name: 'Instagram',
    icon: 'lucide:instagram',
    img: '',
    link: 'https://www.instagram.com/_yuranlegends_',
  },
  {
    type: 'link',
    name: 'Discord',
    icon: 'ic:round-discord',
    img: '',
    link: 'https://discord.com/users/756862462967676980',
  },
  {
    type: 'link',
    name: 'YouTube',
    icon: 'lucide:youtube',
    img: '',
    link: 'https://www.youtube.com/channel/UCLXNBb-jZRS_3o_itGGrGRA?view_as=subscriber',
  },
];
