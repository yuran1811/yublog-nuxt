---
title: Customize Terminal (Git Bash, CMD)
description: Customize your terminal with zsh, oh-my-zsh on git bash and cmd (via clink).
author: yuran1811
date: 2023-08-12T17:30:00Z
tags:
  - custom
  - terminal
image: /cover-imgs/shortcut.jpg
seo:
  title: Customize Terminal (Git Bash, CMD)
  description: Customize your terminal with zsh, oh-my-zsh on git bash and cmd (via clink).
---

## CMD

- Clink + Oh My Post

## Bash

### **ZSH**

- Check out my github repo for installation [**here**](https://github.com/yuran1811/Yuran-Workspace/tree/main/zsh_config)

#### Steps:

1. Download the latest zsh package [**here**](https://packages.msys2.org/package/zsh?repo=msys\&variant=x86_64)

Example: `zsh-5.7.1-1-x86_64.pkg.tar.xz`

Update:

The package now is compacted using `zstd`, so now we need some "special" extractor.\:brSo, in my case, I've downloaded this [**file**](https://repo.msys2.org/msys/x86_64/zsh-5.8-5-x86_64.pkg.tar.zst)
And extracted it using the [**Peazip**](https://peazip.github.io/zst-compressed-file-format.html)

2. Extract the content to your git bash installation dir:

Usually `C:\Program Files\Git`

3. Test it and config zsh:

Open git bash and type:

```bash
zsh
```

So, this step is important, it seems `zsh` will ask a few configurations, like the tab completion, history, etc.\:brPlease read the options and set that according to your use.

4. Installing oh-my-zsh, execute the following cmd on git bash

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

5. Configuring zsh as default shell

Edit the `~/.bashrc` file. (create it if it doesn't exist)

Add the following lines at the end of the file

```bash
# Launch Zsh
if [ -t 1 ]; then
exec zsh
fi
```

Close and open again the git bash.

#### Optional steps

6. Installing the Honukay theme

```bash
curl -fsSL https://raw.githubusercontent.com/oskarkrawczyk/honukai-iterm/master/honukai.zsh-theme -o ~/.oh-my-zsh/custom/themes/honukai.zsh-theme
```

7. Set it

```bash
sed -i 's/ZSH_THEME="robbyrussell"/ZSH_THEME="honukai"/g' ~/.zshrc
```
