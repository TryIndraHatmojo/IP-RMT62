# IP-RMT62

## API Documentation

### Authentication

#### POST /login/google

- Description: Login or register user using Google OAuth token.
- Request Body:
  - `token` (string, required): Google ID token
- Response:
  - 200: `{ access_token: string }`
  - 400: `{ message: string }`

---

### Proposal

All endpoints below require authentication.

**Headers:**

```
{
  "Authorization": "Bearer <access_token>"
}
```

#### POST /proposals

- Description: Create a new proposal and prompt proposal.
- Request Body:
  - `businessInterestField` (string, required)
  - `capital` (integer, required)
  - `location` (string, required)
  - `preference` (string, required)
  - `businessGoal` (string, required)
  - `longTermVision` (string, optional)
  - `targetMarket` (string, optional)
  - `productUniqueness` (string, optional)
  - `mainCompetitors` (string, optional)
  - `marketingPlan` (string, optional)
- Response:
  - 201:
  ```json
  {
    "id": 6,
    "UserId": 3,
    "title": "FinancialEase",
    "aiOutput": "## Deskripsi\nFinancialEase adalah platform manajemen keuangan berbasis aplikasi mobile yang dirancang untuk membantu individu dan organisasi dalam mengelola keuangan secara efektif dan otomatis. Fitur utama meliputi budgeting otomatis, pengingat tagihan, dan analisis kebiasaan finansial. Didirikan di Bandung dengan modal awal Rp 150.000.000, bisnis ini bertujuan memberikan solusi keuangan yang praktis, efisien, dan dapat diakses oleh berbagai lapisan masyarakat maupun organisasi.\n\n## Strategi Pemasaran\n1. **Segmentasi Pasar**: Fokus pada mahasiswa, pekerja muda, serta UKM yang membutuhkan pengelolaan keuangan sederhana.\n2. **Branding & Digital Marketing**: Menggunakan media sosial, Google Ads, dan content marketing dengan konten edukasi keuangan.\n3. **Kerjasama & Kemitraan**: Menjalin kerja sama dengan universitas, coworking space, dan komunitas startup.\n4. **Program Referensi**: Memberikan insentif bagi pengguna yang mengajak orang lain untuk bergabung.\n5. **Webinar & Workshops**: Mengadakan seminar tentang manajemen keuangan dan penggunaan aplikasi.\n\n## Modal & Alokasi\nTotal Modal: Rp 150.000.000\n\n| Komponen                 | Alokasi (Rp) | Keterangan                                                    |\n|--------------------------|--------------|----------------------------------------------------------------|\n| Pengembangan Aplikasi   | 70.000.000   | Pengembangan fitur dan desain UI/UX                            |\n| Marketing & Promosi     | 30.000.000   | Digital marketing, event, dan aktivasi komunitas             |\n| Operasional & Administrasi | 20.000.000   | Pembuatan kantor kecil, peralatan kantor, administrasi dan legal |\n| Cadangan & Kontinjensi  | 30.000.000   | Cadangan dana untuk pengembangan lebih lanjut dan tak terduga |\n\n## SWOT Analysis\n**Kekuatan:**\n- Fitur inovatif dan otomatis yang berbeda dari kompetitor.\n- Lokasi strategis di Bandung dengan akses ke komunitas startup dan mahasiswa.\n- Modal awal cukup untuk pengembangan awal dan pemasaran.\n\n**Kelemahan:**\n- Persaingan ketat di bidang aplikasi keuangan.\n- Ketergantungan pada adopsi pengguna awal.\n- Kebutuhan terus menerus akan pengembangan fitur.\n\n**Peluang:**\n- Meningkatnya kesadaran akan pentingnya pengelolaan keuangan pribadi.\n- Eksplorasi pasar UKM yang membutuhkan platform manajemen keuangan.\n- Tren penggunaan aplikasi mobile yang terus bertumbuh.\n\n**Ancaman:**\n- Kompetitor besar dengan dana promosi besar.\n- Perubahan regulasi terkait data dan keuangan.\n- Risiko kegagalan adopsi pengguna baru.\n\n## Rencana 3, 6, 12, dan 36 Bulan\n**3 Bulan:**\n- Pengembangan Minimum Viable Product (MVP).\n- Peluncuran beta di komunitas lokal.\n- Strategi pemasaran dan promosi awal.\n- Pengumpulan feedback pengguna awal.\n\n**6 Bulan:**\n- Pengembangan fitur lengkap berdasarkan feedback.\n- Penguatan strategi pemasaran digital.\n- Mulai monetisasi melalui fitur premium.\n- Target pengguna aktif 5.000 pengguna.\n\n**12 Bulan:**\n- Ekspansi fitur seperti integrasi bank dan otomatisasi yang lebih lengkap.\n- Kolaborasi dengan institusi pendidikan dan UKM.\n- Pengembangan komunitas pengguna.\n- Pendapatan bertumbuh secara signifikan.\n- Target pengguna aktif mencapai 20.000.\n\n**36 Bulan:**\n- Ekspansi regional ke kota lain di Indonesia.\n- Diversifikasi layanan ke bidang keuangan dan investasi.\n- Adaptasi teknologi baru seperti AI untuk analisis kebiasaan.\n- Menjadi platform manajemen keuangan yang paling dikenal dan dipercaya di Indonesia.\n- Pendapatan stabil dan profitabilitas tercapai.",
    "PromptProposalId": 9,
    "updatedAt": "2025-06-24T21:27:39.981Z",
    "createdAt": "2025-06-24T21:27:39.981Z"
  }
  ```
  - 400: `{ message: string }`

#### GET /proposals

- Description: Get all proposals for the authenticated user.
- Response:
  - 200:
  ```json
  [
    {
        "id": 2,
        "UserId": 3,
        "title": "NutrifyCatering",
        "aiOutput": "## Deskripsi\nNutrifyCatering adalah layanan katering diet personalisasi berbasis konsultasi gizi yang berlokasi di Jakarta Pusat. Menyediakan paket makanan harian yang disusun secara khusus sesuai kebutuhan kesehatan atau tujuan kebugaran pelanggan, menggunakan bahan organik lokal dan didukung oleh aplikasi pelacak nutrisi dan progres kesehatan.\n\n## Strategi Pemasaran\n- Iklan bertarget di media sosial (Facebook, Instagram) dengan fokus pada segmentasi usia 20-45 tahun.\n- Seminar online gratis tentang nutrisi dan gaya hidup sehat sebagai edukasi dan penarik perhatian.\n- Kemitraan dengan dokter, klinik kesehatan, dan ahli gizi untuk rekomendasi dan kolaborasi.\n- Program loyalitas pelanggan berupa diskon langganan dan poin reward.\n- Content marketing melalui blog dan video edukasi di platform digital.\n\n## Modal & Alokasi\nTotal modal awal: Rp 100.000.000\n- Pengadaan peralatan dapur dan perlengkapan memasak: Rp 30.000.000\n- Pengadaan bahan baku awal (organik, bahan premium): Rp 20.000.000\n- Pengembangan aplikasi pelacakan dan website: Rp 15.000.000\n- Pemasaran online dan promosi awal: Rp 10.000.000\n- Sewa tempat dan perlengkapan kantor kecil: Rp 10.000.000\n- Biaya operasional awal (gaji staf, pengemasan, transport): Rp 10.000.000\n- Tidak terduga dan cadangan operasional: Rp 5.000.000\n\n## SWOT Analysis\n### Strengths\n- Layanan personalisasi tinggi dan didukung teknologi.\n- Menggunakan bahan organik lokal yang menarik pasar kesehatan.\n- Fokus pada kebutuhan individu dengan kondisi khusus dan tujuan spesifik.\n\n### Weaknesses\n- Modal awal terbatas untuk skala besar.\n- Baru masuk di pasar kompetitif sehingga perlu brand awareness tinggi.\n- Ketergantungan pada kualitas bahan bahan dan kesehatan supplier.\n\n### Opportunities\n- Tumbuhnya tren gaya hidup sehat dan diet personal.\n- Potensi kemitraan dengan klinik dan profesional kesehatan.\n- Pengembangan aplikasi yang dapat memperluas pangsa pasar.\n\n### Threats\n- Persaingan dari pemain besar seperti MyMeal, Healthymeals.id.\n- Perubahan regulasi di bidang makanan dan kesehatan.\n- Fluktuasi harga bahan organik.\n\n## Rencana 3, 6, 12, dan 36 Bulan\n### 3 Bulan\n- Menyelesaikan pengembangan layanan dan aplikasi.\n- Melakukan promosi awal dan membangun awareness.\n- Melakukan uji coba layanan dan mendapatkan feedback awal.\n- Menyusun kerjasama dan jaringan dengan profesional gizi dan kesehatan.\n\n### 6 Bulan\n- Meluncurkan program berlangganan dan paket di website.\n- Menambah variasi menu dan paket khusus sesuai feedback.\n- Meningkatkan engagement melalui media sosial dan seminar.\n- Menjalin kemitraan lebih banyak dengan klinik dan fitness center.\n\n### 12 Bulan\n- Mengembangkan platform aplikasi untuk integrasi tracking dan konsultasi.\n- Memperluas pasar ke luar Jakarta Pusat.\n- Menstabilkan pendapatan dan meningkatkan profitabilitas.\n- Mengikuti tren terbaru nutrisi dan diet.\n\n### 36 Bulan\n- Mendominasi pasar katering diet personalisasi di Indonesia.\n- Menjadi platform terintegrasi dengan layanan gizi digital yang komprehensif.\n- Ekspansi ke kota besar lain di Indonesia.\n- Mengembangkan program paket diet khusus untuk corporate wellness.\n",
        "PromptProposalId": 4,
        "createdAt": "2025-06-24T19:39:17.285Z",
        "updatedAt": "2025-06-24T19:39:17.285Z",
        "PromptProposal": {
            "id": 4,
            "businessInterestField": "katering diet personalisasi",
            "capital": 100000000,
            "location": "Jakarta Pusat",
            "preference": "layanan katering harian dengan konsultasi gizi",
            "businessGoal": "menyediakan solusi diet yang efektif dan terpersonalisasi untuk individu dengan kebutuhan khusus (misalnya, diabetes, alergi, atau program penurunan berat badan)",
            "longTermVision": "menjadi platform katering diet terkemuka yang terintegrasi dengan aplikasi pelacak nutrisi dan kesehatan di Indonesia",
            "targetMarket": "individu dengan kondisi kesehatan tertentu, atlet, dan mereka yang memiliki tujuan diet spesifik (misalnya, penurunan berat badan, penambahan massa otot) usia 20-45 tahun",
            "productUniqueness": "paket makanan harian yang disesuaikan berdasarkan konsultasi ahli gizi, penggunaan bahan organik lokal, dan pelacakan progres melalui aplikasi",
            "mainCompetitors": "MyMeal Catering, 3 Skinny Minnies, Healthymeals.id",
            "marketingPlan": "iklan bertarget di media sosial (Facebook, Instagram), seminar online tentang nutrisi dan kesehatan, kemitraan dengan dokter dan ahli gizi, serta program loyalitas pelanggan",
            "UserId": 3,
            "createdAt": "2025-06-24T19:39:17.234Z",
            "updatedAt": "2025-06-24T19:39:17.234Z"
        }
    },
    .....
  ]
  ```

#### GET /proposals/:id

- Description: Get a proposal by ID (must belong to the user).
- Response:
  - 200:

```json
{
  "id": 7,
  "UserId": 3,
  "title": "Inovasi AI Marketing UMKM",
  "aiOutput": "# Proposal Bisnis: Inovasi AI Marketing UMKM\n\n## Deskripsi Usaha\nInovasi AI Marketing UMKM adalah platform online yang memanfaatkan teknologi Artificial Intelligence (AI) untuk membantu UMKM dan pembisnis pemula di Indonesia dalam bidang pemasaran digital. Platform ini fokus pada edukasi praktis serta pemberian tools AI yang sederhana dan efektif agar mereka dapat mengoptimalkan strategi pemasaran dengan biaya minimal dan hasil maksimal. Visi jangka panjang usaha ini adalah membangun bisnis yang stabil dan berkelanjutan dengan memberikan solusi pemasaran berbasis AI yang mudah diakses dan terpercaya bagi segmen UMKM.\n\n## Strategi Pemasaran\n1. **Sosial Media:** Menggunakan platform seperti Instagram, Facebook, dan TikTok untuk membagikan konten edukasi, tutorial, dan testimoni pengguna. Konten akan fokus pada tips pemasaran, fitur AI dalam dunia marketing, dan success story UMKM yang telah terbantu.\n\n2. **YouTube:** Membuat kanal YouTube yang menyediakan video edukasi mengenai pemasaran digital berbasis AI, webinar, demo tools, dan wawancara dengan pelaku UMKM sukses.\n\n3. **Kolaborasi:** Bekerja sama dengan komunitas UMKM lokal dan platform pendukung UMKM untuk memperluas jaringan dan menjaring lebih banyak pengguna.\n\n4. **Konten Gratis Berkelas:** Menawarkan webinar dan ebook gratis untuk menarik leads dan mengedukasi pasar.\n\n## Modal & Alokasi\nTotal modal yang disiapkan: Rp 20.000.000,00\n\n- Pengembangan Produk & Website: Rp 8.000.000 (pembuatan website interaktif dan integrasi AI sederhana)\n- Produksi Konten & Pemasaran Sosial Media: Rp 5.000.000 (pembuatan video, desain grafis, iklan sosial media)\n- Biaya Operasional (internet, domain, hosting, dll): Rp 3.000.000\n- Pelatihan dan Workshop (persiapan konten edukasi): Rp 2.000.000\n- Cadangan untuk Pengembangan & Tak Terduga: Rp 2.000.000\n\n## SWOT\n\n**Strengths (Kekuatan):**\n- Fokus pada segmen UMKM yang besar dan berkembang di Indonesia.\n- Memanfaatkan AI yang sedang tren dan diminati.\n- Modal relatif cukup untuk bisnis startup digital sederhana.\n\n**Weaknesses (Kelemahan):**\n- Terbatasnya sumber daya dalam pengembangan AI yang canggih.\n- Keterbatasan dana iklan jika dibandingkan dengan kompetitor besar.\n\n**Opportunities (Peluang):**\n- Semakin meningkatnya kebutuhan digitalisasi dan pemasaran online UMKM.\n- Potensi pasar besar di Indonesia dengan jutaan UMKM.\n- Pertumbuhan penggunaan sosial media dan YouTube untuk edukasi.\n\n**Threats (Ancaman):**\n- Kompetitor yang sudah mapan dalam bidang AI marketing.\n- Perubahan cepat teknologi AI dan pemasaran digital.\n- Regulasi digital dan perlindungan data pengguna.\n\n## Rencana Bisnis\n\n### 3 Bulan Pertama\n- Finalisasi pengembangan website dan integrasi tool AI dasar.\n- Membuat akun sosial media dan kanal YouTube.\n- Mulai produksi konten edukasi dan promosi awal.\n- Mengadakan webinar gratis pertama untuk menarik pengguna.\n\n### 6 Bulan Pertama\n- Melakukan evaluasi awal hasil pemasaran dan feedback pengguna.\n- Mengoptimalkan konten dan menambah fitur AI sesuai kebutuhan UMKM.\n- Memperluas kolaborasi dengan komunitas UMKM dan inkubator bisnis.\n\n### 12 Bulan Pertama\n- Meluncurkan versi upgrade platform dengan fitur premium berbayar.\n- Mengembangkan program edukasi berkelanjutan (misal kursus online).\n- Memperluas target pasar ke kota-kota besar di Indonesia.\n- Penguatan brand di sosial media dan YouTube dengan konten berkualitas.\n\n### 36 Bulan Pertama\n- Mewujudkan visi bisnis yang stabil dengan pendapatan berkelanjutan.\n- Memperluas jangkauan ke segmen bisnis menengah kecil.\n- Mengembangkan ekosistem AI marketing yang lebih lengkap dan inovatif.\n- Menyiapkan peluang ekspansi regional di pasar ASEAN.\n\n---\n\nInovasi AI Marketing UMKM berkomitmen untuk membantu pertumbuhan usaha kecil melalui teknologi modern yang mudah digunakan. Dengan strategi dan pelaksanaan matang, bisnis ini diharapkan dapat menjadi solusi pemasaran digital terpercaya bagi jutaan UMKM di Indonesia.",
  "PromptProposalId": 10,
  "createdAt": "2025-06-25T22:32:42.792Z",
  "updatedAt": "2025-06-26T00:03:05.504Z",
  "PromptProposal": {
    "id": 10,
    "businessInterestField": "Teknologi AI di bidang marketing",
    "capital": 20000000,
    "location": "Indonesia",
    "preference": "online",
    "businessGoal": "Edukasi Membantu UMKM",
    "longTermVision": "STABIL",
    "targetMarket": "UMKM dan Pembisnis pemula",
    "productUniqueness": "",
    "mainCompetitors": "",
    "marketingPlan": "sosial media dan youtube",
    "UserId": 3,
    "createdAt": "2025-06-25T22:32:42.770Z",
    "updatedAt": "2025-06-26T00:03:05.438Z"
  }
}
```

- 404: `{ message: "Proposal not found" }`

#### PUT /proposals/:id

- Description: Update a proposal and its prompt proposal.
- Request Body:
  - `businessInterestField` (string, required)
  - `capital` (integer, required)
  - `location` (string, required)
  - `preference` (string, required)
  - `businessGoal` (string, required)
  - `longTermVision` (string, optional)
  - `targetMarket` (string, optional)
  - `productUniqueness` (string, optional)
  - `mainCompetitors` (string, optional)
  - `marketingPlan` (string, optional)
- Response:
  - 200:

```json
{
  "id": 3,
  "UserId": 3,
  "title": "AgriSmart Yogyakarta",
  "aiOutput": "## Proposal Bisnis: AgriSmart Yogyakarta\n\n### Deskripsi Usaha\nAgriSmart Yogyakarta adalah platform manajemen pertanian pintar berbasis teknologi IoT dan Artificial Intelligence yang berbasis di Yogyakarta. Layanan kami menyediakan aplikasi dan dashboard interaktif yang memantau kondisi lahan pertanian secara real-time serta memberikan rekomendasi optimasi produksi pertanian. Fokus utama platform ini adalah meningkatkan hasil panen dan efisiensi petani kecil dan menengah melalui pemantauan kelembaban dan suhu tanah, kondisi cuaca terkini, serta kebutuhan nutrisi tanaman berbasis data. Visi jangka panjang adalah menjadi solusi utama pertanian digital di Indonesia, terintegrasi dengan perangkat IoT dan marketplace hasil tani.\n\n### Keunggulan Produk/Layanan\n- Sensor IoT untuk pemantauan kelembaban dan suhu tanah secara real-time\n- Algoritma AI untuk prediksi waktu dan hasil panen\n- Dashboard analitik interaktif untuk pengelolaan dan evaluasi pertanian\n- Sistem notifikasi berbasis SMS untuk petani yang menggunakan ponsel non-smartphone\n\n### Target Pasar\n- Petani kecil dan menengah usia 30-55 tahun di daerah produktif sekitar Yogyakarta\n- Koperasi tani lokal yang ingin meningkatkan efisiensi manajemen lahan\n- Pemilik lahan yang mengelola pertanian produktif dengan pendekatan teknologi\n\n### Strategi Pemasaran\n- Mengadakan pelatihan gratis bagi petani di daerah target untuk edukasi teknologi pertanian pintar\n- Membangun kemitraan strategis dengan Dinas Pertanian Daerah Yogyakarta untuk mendapatkan dukungan dan akses jaringan petani\n- Melibatkan komunitas tani lokal dalam sosialisasi dan uji coba produk agar lebih dekat dengan pengguna akhir\n- Menampilkan demonstrasi teknologi di pameran dan festival pertanian untuk menjangkau pelanggan potensial dan membangun brand awareness\n\n### Modal dan Alokasi\nTotal modal awal: Rp 120.000.000,00\n- Pengembangan teknologi dan perangkat IoT (sensor dan AI): Rp 50.000.000\n- Pengembangan aplikasi dan dashboard: Rp 20.000.000\n- Biaya pemasaran dan pelatihan (pelatihan gratis, demo): Rp 25.000.000\n- Operasional (gaji awal tim, kantor kecil, transportasi): Rp 15.000.000\n- Cadangan dana dan administrasi: Rp 10.000.000\n\n### Analisis SWOT\n- **Strengths (Kekuatan):**\n  - Integrasi teknologi IoT dan AI yang real-time dan praktis\n  - Sistem SMS notifikasi yang menjangkau pengguna non-smartphone\n  - Dukungan komunitas lokal dan kerjasama dinas\n\n- **Weaknesses (Kelemahan):**\n  - Modal terbatas untuk ekspansi cepat\n  - Ketergantungan pada pembelajaran teknologi bagi petani tradisional\n\n- **Opportunities (Peluang):**\n  - Meningkatnya kebutuhan digitalisasi sektor pertanian Indonesia\n  - Dukungan pemerintah untuk pengembangan pertanian presisi\n  - Pasar petani kecil dan menengah yang besar dan belum banyak tersentuh teknologi\n\n- **Threats (Ancaman):**\n  - Kompetitor lama yang sudah lebih mapan seperti Habibi Garden dan TaniHub\n  - Ketahanan teknologi di daerah rural yang masih terbatas jaringan internet\n\n### Rencana Pengembangan Usaha\n- **3 Bulan ke Depan:**\n  - Finalisasi pengembangan sensor IoT dan aplikasi dashboard\n  - Mulai pilot project dengan 2-3 kelompok tani di Yogyakarta\n  - Persiapan materi pelatihan dan pendirian kemitraan awal dengan Dinas Pertanian\n\n- **6 Bulan ke Depan:**\n  - Pelaksanaan pelatihan gratis dan pengumpulan feedback pengguna awal\n  - Pengembangan fitur SMS notifikasi sebagai pelengkap aplikasi\n  - Partisipasi dalam pameran pertanian lokal untuk branding dan pengembangan jaringan\n\n- **12 Bulan ke Depan:**\n  - Ekspansi cakupan wilayah layanan ke sejumlah kabupaten di sekitarnya\n  - Optimalisasi AI untuk prediksi panen lebih akurat berdasarkan data lapangan\n  - Mulai rencana integrasi dengan marketplace hasil tani untuk memperluas layanan\n\n- **36 Bulan ke Depan:**\n  - Positioning sebagai platform pertanian digital unggulan di Jawa Tengah dan DIY\n  - Menjalin kerjasama dengan lembaga keuangan untuk pembiayaan pertanian berbasis data\n  - Scale-up besar-besaran perangkat IoT dan pengembangan big data analytics\n\nDengan modal yang realistis dan strategi yang matang, AgriSmart Yogyakarta siap menjadi solusi digital revolusioner yang memberdayakan petani kecil dan menengah di Indonesia melalui teknologi yang mudah diakses dan efektif.",
  "PromptProposalId": 6,
  "createdAt": "2025-06-24T20:42:51.242Z",
  "updatedAt": "2025-06-26T03:32:01.908Z",
  "PromptProposal": {
    "id": 6,
    "businessInterestField": "platform manajemen keuangan pribadi berbasis AI",
    "capital": 150000000,
    "location": "Bandung",
    "preference": "aplikasi mobile dengan fitur budgeting otomatis, pengingat tagihan, dan analisis kebiasaan finansial",
    "businessGoal": "membantu individu dalam mengelola keuangan pribadi secara efisien melalui teknologi AI yang menganalisis pengeluaran dan memberikan saran keuangan berbasis data",
    "longTermVision": "menjadi aplikasi manajemen keuangan paling tepercaya di Asia Tenggara dengan fitur integrasi ke rekening bank, investasi, dan asuransi",
    "targetMarket": "pekerja muda usia 22-35 tahun di kota besar yang memiliki penghasilan tetap namun kesulitan dalam mengatur keuangan pribadi",
    "productUniqueness": "fitur AI budgeting assistant, deteksi pengeluaran boros secara real-time, integrasi e-wallet & bank lokal, serta rekomendasi investasi mikro",
    "mainCompetitors": "Jenius, Finansialku, Money Lover, Toshl Finance",
    "marketingPlan": "kampanye digital di TikTok dan Instagram, kolaborasi dengan influencer finansial, konten edukasi keuangan di YouTube & blog, serta referral program berhadiah",
    "UserId": 3,
    "createdAt": "2025-06-24T20:42:51.192Z",
    "updatedAt": "2025-06-24T20:42:51.192Z"
  }
}
```

- 400/404: `{ message: "Proposal not found" }`

#### DELETE /proposals/:id

- Description: Delete a proposal by ID.
- Response:
  - 200: `{ message: "Proposal deleted successfully" }`
  - 404: `{ message: "Proposal not found" }`

---

### Transaction

All endpoints below require authentication.

**Headers:**

```
{
  "Authorization": "Bearer <access_token>"
}
```

#### POST /generate-midtrans-token/:LimitPackageId

- Description: Generate a Midtrans payment token for a limit package.
- Params:
  - `LimitPackageId` (integer, required)
- Response:
  - 201:
- 404: `{ message: "Limit Package not found" }`

```json
{
  "token": "66e4fa55-fdac-4ef9-91b5-733b97d1b862",
  "redirect_url": "https://app.sandbox.midtrans.com/snap/v2/vtweb/66e4fa55-fdac-4ef9-91b5-733b97d1b862"
}
```

#### PATCH /users

- Description: Update user's limit usage after purchasing a package.
- Request Body:
  - `LimitPackageId` (integer, required)
- Response:
  - 200:

```json
{
  "message": "Limit updated successfully",
  "user": {
    "id": 3,
    "name": "Try Indra",
    "email": "tryindra3375@gmail.com",
    "password": "izxkn4ht",
    "role": "user",
    "limitUsage": 35,
    "createdAt": "2025-06-24T13:36:22.885Z",
    "updatedAt": "2025-06-24T22:41:16.471Z"
  }
}
```

- 400/404: `{ message: string }`

#### GET /users/id

- Description: Get a user by ID.
- Request Body:
  - `LimitPackageId` (integer, required)
- Response:
  - 200: `{ message: "Limit updated successfully", user: object }`
  - 404: `{ message: "User not found" }`

#### GET /packages

- Description: Get all available limit packages.
- Response:
  - 200:

```json
[
    {
        "id": 1,
        "name": "Starter Package",
        "description": "Cocok untuk pengguna baru yang ingin mencoba membuat proposal bisnis AI dengan cepat dan mudah.",
        "limit": 10,
        "price": 7500,
        "isActive": true,
        "createdAt": "2025-06-24T00:05:40.778Z",
        "updatedAt": "2025-06-24T00:05:40.778Z"
    },
    {
        "id": 2,
        "name": "Standard Package",
        "description": "Untuk kamu yang mulai serius eksplorasi bisnis dan butuh lebih banyak variasi dan revisi proposal.",
        "limit": 20,
        "price": 15000,
        "isActive": true,
        "createdAt": "2025-06-24T00:05:40.778Z",
        "updatedAt": "2025-06-24T00:05:40.778Z"
    },
    .....
]
```

---

### Error Handling

- All error responses will be in the format: `{ message: string }`
- Common status codes: 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Internal Server Error)
- **Global Error 401 Authentication Error - Invalid Token:**
  - Response: `{ "message": "Authentication Error - Invalid Token" }`
  - This error is returned when the provided access token is missing, invalid, or expired.
- **Global Error 500 Internal Server Error:**
  - Response: `{ "message": "Internal Server Error" }`
  - This error is returned for unexpected server errors or unhandled exceptions.

---

### Notes

- All endpoints (except /login/google) require `Authorization: Bearer <access_token>` header.
- Proposal creation uses OpenAI to generate business proposal content based on user input.
- LimitPackage and user data must exist for transaction endpoints.
