---
title: Windows Notes
description: Windows Notes are collection of useful tips and tricks for Windows users.
author: yuran1811
date: 2024-03-15T13:24:00Z
tags:
  - windows
image: /cover-imgs/win11-bloom-dark.jpg
seo:
  title: Windows Notes
  description: Windows Notes are collection of useful tips and tricks for Windows users.
---

## Xem lại pass Wifi

`netsh wlan show profile "_name_" key=clear`

## Ẩn thư mục hoàn toàn

- Mở powershell (shift + left click)
- Gõ `attrib +s +h "__folder_name__"` để ẩn
- Gõ `attrib -s -h "__folder_name__"` để hiện

## Kiểm tra tình trạng Pin Laptop

- Run as Administrator PowerShell
- Gõ `powercfg /batteryreport`

## Cài "Auto Shutdown" máy

- Gõ `shutdown -a` : tắt auto shutdown
- Gõ `shutdown -s -t __time__` : tắt máy theo thời gian (giây)

## Window shortcut

- Visit this [**site**](https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec) to discover more
