# ECM252 — Projetos de 2026

O desenvolvimento das aulas foi separado em três repositórios independentes:

| Projeto | Repositório |
| --- | --- |
| Dart | [2026_maua_ecm252_dart](https://github.com/JoaoVitorSesma/2026_maua_ecm252_dart) |
| Flutter | [2026_maua_ecm252_flutter](https://github.com/JoaoVitorSesma/2026_maua_ecm252_flutter) |
| React e exercícios de Git | [2026_maua_ecm252_react](https://github.com/JoaoVitorSesma/2026_maua_ecm252_react) |

Use o repositório correspondente para continuar as aulas e publicar as próximas alterações. Cada um possui seu próprio README e mantém as pastas das aulas diretamente na raiz.

## Repositório original

Este repositório permanece disponível como referência, com as pastas `dart`, `flutter` e `react`, o histórico completo, as branches auxiliares e as tags existentes. Ele não foi arquivado. As pastas originais e os novos repositórios não são sincronizados automaticamente.

Os novos repositórios receberam o histórico relacionado a cada projeto a partir da `main`, incluindo os caminhos antigos das aulas. Autores, datas e mensagens foram preservados; os hashes dos commits mudaram com a extração.

## Organização local

No ambiente em que a separação foi realizada, os clones independentes ficam em:

```text
ecm252/
  dart/                         referência original
  flutter/                      referência original
  react/                        referência original
  repos/
    2026_maua_ecm252_dart/       clone independente
    2026_maua_ecm252_flutter/    clone independente
    2026_maua_ecm252_react/      clone independente
```

Abra diretamente o clone do projeto no editor e execute os comandos Git dentro dele. A pasta `repos/` é ignorada por este repositório original; cada clone publica no seu próprio remoto.

Dependências e arquivos locais de ambiente são preparados em cada clone. Os arquivos `.env` existentes continuam nas pastas originais e não foram publicados durante a separação.
