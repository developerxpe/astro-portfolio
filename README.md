# Astro Starter Kit: Basics

```sh
yarn create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`             | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Changes per prompt

**Works Tag Yapısı Düzeltildi:** blog.js'e works projeleri için ayrı fonksiyonlar eklendi, works.astro'da "object object" sorunu düzeltildi, tag yapısı ayrı section olarak eklendi, WorkPost.astro'da değişken isimleri netleştirildi.

**Filter Undefined Hatası Düzeltildi:** blog.js'deki getSortedProjects fonksiyonunda parametre sorunu çözüldü, Projects import'u doğru kullanıldı, async/sync fonksiyon karışıklığı düzeltildi, works.astro yeniden oluşturuldu.

**getStaticPaths Hatası Düzeltildi:** works tag sayfaları için getWorkTagsPagination fonksiyonu oluşturuldu, [slug]/[...page].astro dosyası düzeltildi, dinamik routing yapısı blog sayfalarına benzer şekilde kuruldu, CSS stilleri eklendi.

**WorkPost Component Props Düzeltildi:** WorkPost component'i props olarak projects alacak şekilde düzeltildi, tag sayfalarında page.data filtrelenmiş projeler WorkPost'a geçirildi, mevcut yapı bozulmadan backward compatibility sağlandı.

## File Analysis

**Sistem Yapısı:**
- `src/utils/blog.js` - Blog ve Works projeleri için ayrı fonksiyonlar içerir
- `src/pages/works.astro` - Works projeleri ve taglerini listeler
- `src/components/WorkPost.astro` - Proje kartlarını görüntüler  
- `src/components/sections/Work.astro` - Proje verilerini içerir
- Works ve Blog fonksiyonları birbiriyle karışmayacak şekilde ayrılmıştır
