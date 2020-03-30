---
title: 'Mengatasi Arduino IDE crash di MacOS Catalina'
date: 2020-03-30
published: true
tags: ['arduino','tutorial']
series: true
cover_image: ./images/arduino-ide-crash-macos-catalina.png
canonical_url: true
description: "Kamu pernah mengalami crash ketika membuka aplikasi Arduino IDE versi 1.8.12 (versi terakhir saat blog ini ditulis) di macOS catalina ?"
---
Kamu pernah mengalami crash ketika membuka aplikasi Arduino IDE versi 1.8.12 (versi terakhir saat blog ini ditulis) di macOS catalina ?

Problem ini muncul ketika saya menggunaan external monitor yang terhubung pada laptop saya. Ketika membuka aplikasi Arduino IDE beberapa saat kemudian akan keluar sendiri atau crash. Setelah mencari-cari solusi, ternyata memang banyak yang mengalami hal serupa kemudian saya menemukan salah satu issue yang relevan di github https://github.com/arduino/Arduino/issues/9828.

Disitu disebutkan kalau salah satu solusi sementara yaitu downgrade versi Arduino IDE nya ke 1.8.10 dan bisa didapatkan disini https://www.arduino.cc/en/Main/OldSoftwareReleases. Mungkin kedepannya tulisan ini bisa sudah tidak relevan lagi di rilis versi selanjutnya.