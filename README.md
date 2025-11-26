# {{EMOJI}} {{PROJE_ADI}}

> {{KISA_ACIKLAMA}}

<!-- 
📝 KULLANIM:
1. {{...}} olan yerleri projene göre doldur
2. Gerekmeyen bölümleri sil
3. Mermaid diagramını projenin akışına göre düzenle
-->

---

## 🔄 Pipeline Akışı

```mermaid
flowchart LR
    A[({{VERI_KAYNAGI}})] --> B[{{ADIM_1}}]
    B --> C[{{ADIM_2}}]
    C --> D[{{ADIM_3}}]
    D --> E[({{CIKTI_HEDEF}})]
```

<!-- 
💡 MERMAID İPUÇLARI:
- Veritabanı: [(PostgreSQL)]
- İşlem: [Normalization]
- Karar: {Validation}
- Subgraph: subgraph İsim ... end
-->

---

## 📁 Proje Yapısı

```
{{PROJE_ADI}}/
├── {{KLASOR_1}}/              # {{KLASOR_1_ACIKLAMA}}
├── {{KLASOR_2}}/              # {{KLASOR_2_ACIKLAMA}}
├── main.py                    # {{MAIN_ACIKLAMA}}
├── requirements.txt
└── README.md
```

---

## 🧩 Ana Bileşenler

- **`{{DOSYA_1}}`** - {{DOSYA_1_ACIKLAMA}}
- **`{{DOSYA_2}}`** - {{DOSYA_2_ACIKLAMA}}
- **`{{DOSYA_3}}`** - {{DOSYA_3_ACIKLAMA}}

---

## ⚙️ Kurulum

```bash
# Sanal ortam oluştur
python -m venv .venv
source .venv/bin/activate  # Windows için: .venv\Scripts\activate

# Gerekli paketleri yükle
pip install -r requirements.txt
```

<!-- UV kullanılıyorsa:
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
uv sync
```
-->

---

## ▶️ Kullanım

{{KULLANIM_ACIKLAMA}}

```bash
{{KULLANIM_KOMUTU}}
```

<!-- 
ÖRNEK:
python main.py --input data/input.csv --output data/output.csv
uv run main.py --env dev process-all
-->

---

## 🗄️ Gereksinimler

- Python {{PYTHON_VERSION}}+
- {{GEREKSINIM_1}}
- {{GEREKSINIM_2}}

---

## 📊 Çıktılar

<!-- Tablo gerekiyorsa: -->
| Tablo/Dosya | Açıklama |
|-------------|----------|
| `{{CIKTI_1}}` | {{CIKTI_1_ACIKLAMA}} |
| `{{CIKTI_2}}` | {{CIKTI_2_ACIKLAMA}} |

<!-- veya basitçe: -->
<!-- Sonuçlar `{{CIKTI_KLASORU}}/` altına yazılır. -->

---

## 📝 Notlar

- {{NOT_1}}
- {{NOT_2}}
- Credential dosyaları `.gitignore` ile korunur
