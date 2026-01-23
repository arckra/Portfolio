# 🎨 Portofolio Modern - Developer & Mahasiswa Teknik Informatika

Website portofolio yang elegan dan modern untuk mahasiswa Teknik Informatika dan developer. Didesain dengan konsep minimalis namun menarik, dengan fitur dark/light mode toggle dan animasi yang smooth.

## ✨ Fitur Utama

### 🌓 Dark/Light Mode Toggle
- Switch tema otomatis dengan animasi smooth
- Tersimpan di localStorage untuk preferensi user
- Warna yang eye-friendly untuk kedua tema

### 📱 Fully Responsive Design
- Mobile-first approach
- Tampilan optimal di semua ukuran layar
- Navigasi mobile dengan hamburger menu

### 🎯 Section yang Tersedia
1. **Beranda (Home)** - Hero section dengan CTA buttons
2. **Tentang Saya (About)** - Informasi pribadi dan keahlian
3. **Resume** - Timeline pendidikan dan pengalaman
4. **Portofolio** - Showcase project dengan hover effects
5. **Testimoni** - Carousel otomatis untuk testimoni
6. **Kontak** - Form kontak dengan validasi

### 🚀 Fitur Interaktif
- Smooth scrolling antar section
- Active navigation highlighting
- Form kontak dengan validasi client-side
- Auto-play testimonial carousel
- Hover effects pada card dan buttons

## 🛠️ Teknologi yang Digunakan

- **HTML5** - Struktur semantic
- **CSS3** - Flexbox, Grid, Custom Properties
- **JavaScript ES6+** - Interaktivitas dan DOM manipulation
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter)

## 📁 Struktur File

```
portofolio/
├── index.html              # File HTML utama
├── css/
│   ├── style.css          # Style utama dengan tema
│   └── responsive.css     # Breakpoints responsive
├── js/
│   └── main.js           # Semua fungsi interaktif
└── README.md             # Dokumentasi
```

## 🎨 Desain & Warna

### Light Theme
- Background: `#ffffff` → `#f8fafc`
- Text: `#1a202c` → `#4a5568`
- Accent: `#3b82f6`
- Card: `#ffffff`

### Dark Theme
- Background: `#0f172a` → `#1e293b`
- Text: `#f1f5f9` → `#cbd5e1`
- Accent: `#60a5fa`
- Card: `#334155`

## 🔧 Cara Menggunakan

1. **Download/Clone** repository ini
2. **Edit konten** di `index.html` sesuai data Anda:
   - Nama dan deskripsi di section home
   - Informasi pendidikan dan pengalaman
   - Project portofolio
   - Informasi kontak
3. **Kustomisasi warna** di `css/style.css` jika diperlukan
4. **Buka** `index.html` di browser untuk melihat hasilnya

## 📝 Area yang Perlu Diedit

### Informasi Pribadi
```html
<!-- Di section home -->
<span class="name">Nama Anda</span>
<p class="home-description">Deskripsi tentang Anda...</p>

<!-- Di section about -->
<h3 class="about-title">Seorang Developer yang Suka Belajar</h3>
```

### Pendidikan & Pengalaman
```html
<!-- Di section resume -->
<h4>S1 Teknik Informatika</h4>
<p>Universitas [Nama Universitas]</p>
<span>IPK: 3.8/4.0</span>
```

### Project Portofolio
```html
<!-- Di section portfolio -->
<h3>E-Commerce Platform</h3>
<p>Platform e-commerce modern dengan React dan Node.js</p>
```

### Kontak
```html
<!-- Di section contact -->
<p>your.email@example.com</p>
<p>+62 812-3456-7890</p>
<p>Jakarta, Indonesia</p>
```

## 🌟 Fitur yang Bisa Dikembangkan

- [ ] Integrasi dengan backend untuk form kontak
- [ ] Blog section untuk artikel teknis
- [ ] Skill progress bars yang animasi
- [ ] Project filtering berdasarkan kategori
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] Loading animations

## 🎯 Tips Optimasi

1. **Images**: Optimalkan ukuran gambar untuk loading cepat
2. **Content**: Update konten secara berkala
3. **Performance**: Minify CSS dan JavaScript untuk production
4. **SEO**: Tambahkan meta tags yang sesuai
5. **Accessibility**: Tambahkan alt text untuk semua gambar

## 📱 Tampilan Preview

Website ini memiliki tampilan yang optimal di:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## 🔗 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📄 Lisensi

Project ini open source dan bebas digunakan untuk keperluan pribadi maupun komersial.

## 🤝 Kontribusi

Silakan fork dan buat pull request untuk perbaikan atau fitur baru.

---

**Dibuat dengan ❤️ untuk komunitas developer Indonesia**

Untuk deploy website ini secara online, gunakan fitur **Publish** yang tersedia di tab Publish.