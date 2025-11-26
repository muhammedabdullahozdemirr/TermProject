# 🔍 Single Catalog Exact Match

> PttAVM ürün kataloğundaki duplicate ürünleri tespit edip gruplandıran exact match sistemi.

---

## 🔄 Pipeline Akışı

![SC Exact Match Pipeline](docs/images/pipeline_flow.png)

---

## 📁 Proje Yapısı

```
single_catalog_exact_matching/
├── .cicd/                      # Dockerfile
├── core/
│   ├── configs/                # config.yml, project_configs.py
│   ├── process/                # main_process.py, send_to_api.py
│   ├── product_req/            # Notebooks
│   └── utils/
│       └── db_connectors/      # gcp_conn.py, postgres_conn.py
├── scripts/                    # prod-build.sh, prod-run.sh
├── main.py                     # CLI entry point (Typer)
├── sc_exactmatch_dag.py        # Airflow DAG
├── pyproject.toml
└── uv.lock
```

---

## 🧩 Ana Bileşenler

- **`main.py`** - CLI komutları (Typer): `exact-match-all-categories`, `exact-match-category-list`
- **`main_process.py`** - Tüm veri işleme süreci ve loglama
- **`project_configs.py`** - Ortam konfigürasyonu (dev/qa/prod)
- **`db_connectors/`** - PostgreSQL ve BigQuery bağlantıları

---

## ⚙️ Kurulum

```bash
# uv kurulumu (eğer yoksa)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Bağımlılıkları yükle
uv sync
```

---

## ▶️ Kullanım

```bash
# Development ortamında çalıştır
uv run main.py --env dev exact-match-category-list

# Production ortamında çalıştır
uv run main.py --env prod exact-match-all-categories
```

---

## 🔧 Ortam Ayarları

`config.yml` dosyasında 3 ortam tanımlıdır:

| Ortam | Açıklama |
|-------|----------|
| `dev` | Geliştirme ve test |
| `qa` | QA testleri |
| `prod` | Production |

---

## 🗄️ Gereksinimler

- Python 3.12+
- [uv](https://github.com/astral-sh/uv) package manager
- PostgreSQL erişimi
- GCP BigQuery erişimi

---

## 📝 Notlar

- Credential dosyaları (`.json`) `.gitignore` ile korunur
- Airflow DAG: `sc_exactmatch_dag.py` (KubernetesPodOperator)
- BigQuery tabloları: `all_matches`, `grouped_output`, `log_matches`
