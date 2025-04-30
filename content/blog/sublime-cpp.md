---
title: Sublime Text x C++ trên Windows
description: Hướng dẫn cài đặt C++ cho Sublime Text trên Windows
author: yuran1811
date: 2023-08-04T15:33:57Z
tags:
  - cpp
  - sublime-text
  - config
image: /cover-imgs/sublime.png
lang: vi
seo:
  title: Sublime Text x C++ trên Windows
  description: Hướng dẫn cài đặt C++ cho Sublime Text trên Windows
---

- Để có thể biên dịch và chạy được các file `.cpp` với _Sublime Text_, ta cần cấu hình cho ứng dụng và thiết lập môi trường cho compiler.
- Sau đây là cách thiết lập compiler C++ cho Sublime Text **đơn giản** và **nhanh nhất**.

## Bước 1: Tải MinGW về máy tính (nếu đã có CodeBlocks thì bỏ qua bước này)

- Tải [**CodeBlocks (20.03) kèm MinGW**](https://www.fosshub.com/Code-Blocks.html?dwl=codeblocks-20.03mingw-setup.exe)
  - Sau khi tải về, mở file cài đặt lên và chọn **Next** cho đến khi cài xong.
  - Vào thư mục cài `CodeBlocks`:
    1. Mở **MinGW**.
    2. Mở **bin**.
    3. Sao chép **đường dẫn** trên thanh địa chỉ và tiến hành bước 2.
- Tải **MinGW**
  - Nguồn:
    - [**winlibs**](https://winlibs.com/) (khuyên dùng)
      - Kéo xuống phần `Release versions` và lựa chọn phiên bản phù hợp.
    - [**SourceForge**](https://sourceforge.net/projects/mingw-w64/)
  - Sau khi tải về, giải nén vào thư mục bạn muốn cài đặt (khuyên nên cài vào ổ đĩa khác với ổ C để tránh xung đột với các phần mềm khác) và
    - Vào thư mục giải nén:
      1. Mở **bin**.
      2. Sao chép **đường dẫn** trên thanh địa chỉ và tiến hành bước 2.

## Bước 2: Cài môi trường cho compiler

- Ấn tổ hợp phím `Win + E`.
- Nhấp chuột phải vào vùng trống chọn **Properties**.
- Chọn **Advanced System Settings**.
- Tìm và chọn **Environment Variables**.
- Ở phần **System variables**:
  1. Tìm **variable** có tên `Path` và double click vào dòng này
  2. Chọn **New** và dán **đường dẫn** vào
  3. Spam `OK`

### Kiểm tra

- Kiểm tra phiên bản hiện tại của `gcc/g++`:

  1. `Win + R`
  2. Gõ `cmd` rồi `Enter`
  3. Nhập lệnh dưới đây

  ```bash
  g++ --version
  ```

  4. Nếu hiện như hình thì bạn đã cài thành công
     ![](/screenshots/cpp-on-windows-check.png)

---

## Cấu hình cho Sublime Text

- Để có thể chạy được file **_.cpp_** trên **Sublime Text**, ta cần file cấu hình:
  1. Mở **Sublime Text**
  2. Ấn tổ hợp phím `Alt + T + U`
  3. Chọn **New Build System**
  4. Chép đoạn code sau vào và lưu lại với tên tùy thích

```json
// C++ Older Version
// Đường dẫn: ...\SublimeText\Data\Packages\User
{
  "encoding": "utf-8",
  "working_dir": "$file_path",
  "shell_cmd": "g++ \"${file}\"",
  "file_regex": "^(..[^:]*):([0-9]+):?([0-9]+)?:? (.*)$",
  "selector": "source.c++,source.c,source.cc",

  "variants": [
    {
      "name": "Build & Run",
      "shell_cmd": "g++ \"${file}\" && start cmd /c \"\"${file_path}\\a\" && pause && del a.exe\""
    },
    {
      "name": "Build",
      "shell_cmd": "g++ \"${file}\""
    },
    {
      "name": "Run",
      "shell_cmd": "start cmd /c \"\"${file_path}\\a\" && pause\""
    }
  ]
}
```

```json
// C++20
// Đường dẫn: ...\SublimeText\Data\Packages\User
{
  "encoding": "utf-8",
  "working_dir": "$file_path",
  "shell_cmd": "g++ -std=c++2a -fmodules-ts \"${file}\"",
  "file_regex": "^(..[^:]*):([0-9]+):?([0-9]+)?:? (.*)$",
  "selector": "source.c++,source.c,source.cc",

  "variants": [
    {
      "name": "Build & Run",
      "shell_cmd": "g++ -std=c++2a -fmodules-ts \"${file}\" && start cmd /c \"\"${file_path}\\a\" && pause && del a.exe\""
    },
    {
      "name": "Build",
      "shell_cmd": "g++ -std=c++2a -fmodules-ts \"${file}\""
    },
    {
      "name": "Run",
      "shell_cmd": "start cmd /c \"\"${file_path}\\a\" && pause\""
    },
    {
      "name": "Module Build & Run",
      "shell_cmd": "g++ -std=c++2a -fmodules-ts \"${file}\" && start cmd /c \"\"${file_path}\\a\" && pause && del a.exe\""
    },
    {
      "name": "Module Build",
      "shell_cmd": "g++ -std=c++2a -fmodules-ts \"${file}\""
    }
  ]
}
```

- Mở thử file `.cpp` bất kì hoặc tạo mới với code mẫu này

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World !";
    return 0;
}
```

- Sau đó:
  1. Ấn tổ hợp phím `Ctrl + Shift + B`
  2. Chọn dòng có tên bạn vừa đặt và có chữ **Run**
  3. Nhấn **Enter**
- Về sau chỉ cần `F7` (hoặc `Ctrl + B`) để **compile and run**, hoặc có thể đổi compile loại ngôn ngữ lập trình khác bằng cách `Ctrl + Shift + B` để chọn
- Vậy là giờ đã có thể code C++ với Sublime Text rồi !

> Nếu thấy hay hãy share cho những người khác cùng đọc nhé !

## Chúc bạn thành công !
