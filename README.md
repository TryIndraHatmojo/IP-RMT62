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
  - 400/401: `{ message: string }`

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
  - 200: Proposal object
  - 404: `{ message: "Proposal not found" }`

#### PUT /proposals/:id

- Description: Update a proposal and its prompt proposal.
- Request Body: Same as POST /proposals
- Response:
  - 200: Updated Proposal object
  - 404: `{ message: "Proposal not found" }`

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
  - 201: `{ token: string, ... }` (Midtrans transaction object)
  - 400/404: `{ message: string }`

#### PATCH /users

- Description: Update user's limit usage after purchasing a package.
- Request Body:
  - `LimitPackageId` (integer, required)
- Response:
  - 200: `{ message: "Limit updated successfully", user: object }`
  - 400/404: `{ message: string }`

---

### Error Handling

- All error responses will be in the format: `{ message: string }`
- Common status codes: 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Internal Server Error)

---

### Notes

- All endpoints (except /login/google) require `Authorization: Bearer <access_token>` header.
- Proposal creation uses OpenAI to generate business proposal content based on user input.
- LimitPackage and user data must exist for transaction endpoints.
