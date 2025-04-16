---
title: Xóa ứng dụng hệ thống trên điện thoại (Thành công 100%)
description: Xóa ứng dụng hệ thống trên điện thoại nhanh gọn và miễn phí với tỉ
  lệ thành công 100%
author: yuran1811
date: 2023-10-12T21:21:10Z
tags:
  - android
  - tips
image: /cover-imgs/android.jpg
---

## Ứng dụng mặc định trên điện thoại

- Trên các dòng máy Android, các ứng dụng hệ thống được cài đặt sẵn và không thể xóa được theo cách thông thường. Thế nên trong bài viết này, tôi sẽ hướng dẫn chi tiết cách xóa những ứng dụng này một cách nhanh gọn và hoàn toàn miễn phí với tỉ lệ thành công là 100%

## Các bước thực hiện

### Bước 1 - Tải adb

- Link tải: [**GGDrive**](https://drive.google.com/file/d/1vOEbIMZ95zEnfJPqHSyN5RRBodfTYKDM/view?usp=sharing)

### Bước 2 - Chuẩn bị những thứ cần thiết

- Trên điện thoại mở chế độ nhà phát triển và bật những chế độ sau:
  - Gỡ lỗi USB
  - Xác thực ứng dụng bằng USB
  - Mở khóa OEM
- Tải app [**Application Inspector**](https://play.google.com/store/apps/details?id=com.ubqsoft.sec01\&hl=vi\&gl=US)

### Bước 3 - Kết nối

- Kết nối điện thoại của bạn với máy tính bằng cáp USB và cho phép truy cập vào hệ thống

### Bước 4 - Tiến hành

- Mở `cmd`
- Trong giao diện của cmd, gõ lệnh `adb devices` để kiểm tra xem điện thoại đã kết nối với máy tính hay chưa
- Gõ `adb shell` -> Enter -> gõ `pm uninstall -k --user 0 address_of_app`
  - Để lấy address vào app vừa tải -> chọn ứng dụng cần xóa -> gõ dòng `com.google.......` đối với nhg ứng dụng của google và tương tự vs những app khác

### Hoàn thành !

- Chúc bạn thành công !

> Nếu thấy bài viết hay và ý nghĩa, hãy share cho mọi người cùng đọc nhé !
