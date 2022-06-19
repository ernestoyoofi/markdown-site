# Buat Halaman Situs Blog Maupun Dokumentasi Kamu Hanya Menggunakan Markdown File !

- Simple
- Mudah Ditulis
- Mudah Dibaca
- Cepat

# Bagaimana Cara Setupnya Dan Deploymentnya ?

## Github & Vercel

1. Pertama tama, kamu bisa [fork](https://github.com/ernestoyoofi/markdown-site/frok) repository ini ke github anda
2. Ubah konfigurasi pada halaman
``` js
// config.js

exports.conf = {
  trakteerKey: 'trstream-XXXXXXXXXXXXXXXXXXXX', // Trakteer Key For Target
  author: 'Nama Halaman Kamu', // Your Name Pages
  github: 'nama-githubkamu' // Put Username Github
}
```
2. Lalu buat project pada vercel
![images](/assets?i=create-project-vercel.png)

> Note : Halamanya Belum Lengkap, Saya Lengkapin Besok 😅