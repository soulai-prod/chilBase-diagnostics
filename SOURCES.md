# Источники и система обновления данных

> Этот файл описывает откуда брать актуальные данные для аудита и как их обновлять.  
> **Последнее обновление:** 06.05.2026

---

## 1. Приоритетные источники (проверять регулярно)

### 1.1 Индустриальные отчёты и конференции

| Источник | Что даёт | Частота обновления | URL |
|----------|----------|-------------------|-----|
| **GDC State of the Industry** | Главный отчёт по трендам gamedev | Ежегодно (март) | gdconf.com |
| **Unity Gaming Report** | Adoption rates, инструменты | Ежегодно | unity.com/gaming-report |
| **Newzoo Global Games Market** | Рынок, монетизация, тренды | Ежеквартально | newzoo.com |
| **AI and Games (Tommy Thompson)** | Глубокий анализ AI в играх | Еженедельно | [aiandgames.com](https://www.aiandgames.com) |
| **gamescom dev** | Европейская конференция | Ежегодно (август) | dev.gamescom.global |

### 1.2 Telegram-каналы (русскоязычные)

| Канал | Что даёт |
|-------|----------|
| **@product_gamedev** | Product in Gamedev — аналитика, монетизация, LiveOps |
| **@gamedevjob** | Работа в геймдеве — тренды найма, AI-роли |
| **@hiaimedia** | Hi, AI — новости AI-технологий |
| **Подборки TProger** | [8 российских TG-каналов про AI](https://tproger.ru/articles/7-rossijskih-telegram-kanalov-pro-ii-i-promting) |
| **Подборки vc.ru** | [Топ-10 каналов про нейросети](https://vc.ru/ai/2309651-top-10-telegram-kanalov-o-nevrositetah-i-tehnologiyah) |
| **Подборки Proglib** | [10 чатов по gamedev](https://proglib.io/p/telegram-gamedev) |

### 1.3 Англоязычные источники

| Источник | Тип | URL |
|----------|-----|-----|
| **AI and Games Newsletter** | Еженедельный deep-dive | aiandgames.com |
| **GameDiscoverCo** | Рынок, тренды, данные | gamediscover.co |
| **Deconstructor of Fun** | Монетизация, LiveOps, F2P | deconstructoroffun.com |
| **MobileDevMemo** | Mobile UA, монетизация, data | mobilegamememo.com |
| **Discord Developer Newsletter** | SDK, интеграции, кейсы | discord.com/developers/developer-newsletter |

### 1.4 Кейсы конкретных студий (блоги)

| Студия | Что отслеживать | URL |
|--------|----------------|-----|
| **Ubisoft** | Ghostwriter, NEO NPCs | news.ubisoft.com |
| **EA** | AI playtesting, SEED research | ea.com/seed |
| **Supercell** | AI Innovation Lab | supercell.com |
| **Riot Games** | AI creative assistants | technology.riotgames.com |
| **Square Enix** | 70% QA automation goal | square-enix.com |

---

## 2. Поисковые запросы для обновления

Использовать WebSearch с этими запросами для получения свежих данных:

```
# Общий индустриальный контекст
"AI game development 2026 case study results"
"GDC 2026 AI talks summary"
"game studio AI automation ROI metrics"

# По отделам ChillBase
"AI QA game testing automation 2026 tools"
"AI concept art game development pipeline 2026"
"AI LiveOps monetization player segmentation 2026"
"AI code review game development 2026"
"AI game art validation quality control"
"procedural content generation open world 2026"

# Конкуренты / бенчмарки
"Supercell AI lab 2026 results"
"EA SEED AI research 2026"
"Ubisoft Ghostwriter AI 2026"
"Square Enix QA automation AI 2026"

# Инструменты
"Unity AI beta 2026 features"
"Unity MCP server game development"
"Unreal Engine AI plugin 2026"
"ComfyUI game art workflow"
```

---

## 3. Критерии валидации данных

Перед включением данных в отчёт, проверять:

| Критерий | Как проверить |
|----------|--------------|
| **Свежесть** | Данные не старше 12 месяцев. Для инструментов — не старше 6 месяцев. |
| **Источник** | Официальные блоги студий > индустриальные отчёты > журналистика > общие статьи |
| **Конкретность** | Есть метрики (%, часы, $)? Если только "AI поможет" без цифр — не включать. |
| **Релевантность** | Применимо к gamedev-студии ~200 чел? AAA-практики могут быть нерелевантны. |
| **Воспроизводимость** | Можно ли это внедрить без команды ML-инженеров? Если нет — пометить как "требует ресурсов". |

---

## 4. Процесс обновления

1. **Перед каждым новым артефактом** — запустить поисковые запросы из секции 2
2. **При получении нового транскрипта** — проверить упомянутые инструменты/практики на актуальность
3. **Раз в месяц** — обновить GAMEDEV_AI_BENCHMARK.md свежими данными
4. **После GDC / gamescom** — полное обновление бенчмарка
