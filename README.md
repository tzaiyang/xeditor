# X-Editor

> 发现并试用了已有产品[obsidian](https://obsidian.md/)，已基本满足所有需求，此仓库将被归档。

X-Editor 是一款开源，插件化，跨平台，WYSIWYG的Markdown编辑器，和别的同类编辑器不同的是，**我们的目标在于：在实现最基本的GFM规范基础上，为Markdown的图画表示能力提供更多可能，同时支持一键导出兼容GFM规范的Markdown文件**。因此，能将“用，或不用更多的Markdown扩展能力”的选择权交还给用户。

## Features
  - [ ] WYSIWYG(What You See Is What You Get)
  - [ ] GFM(Github Flavor Markdown) 规范
  - [ ] 大纲
  - [ ] `LaTeX`数学公式
  - [ ] 全局搜索内容，全局搜索文件名
  - [ ] 支持`[toc]`语法
  - [ ] HTML/PDF导出
  - [ ] 兼容格式的Markdown文件导出
  - [ ] Diagram
    - [ ] [mermaid](https://mermaid-js.github.io/mermaid)
      - [ ] 支持嵌入[Font-Awesome icons](https://github.com/FortAwesome/Font-Awesome)
    - [ ] [mindmap](https://github.com/gera2ld/markmap)
      - [ ] 支持自动适配页面大小
    - [ ] [draw.io](https://github.com/jgraph/drawio)
      - [ ] 支持图形编辑
      - [ ] 支持直接[mxGraphModel](https://github.com/jgraph/mxgraph)渲染
      - [ ] 支持draw.io文件http链接链接
      - [ ] 支持draw.io本地路径链接链接
    - [ ] [graphviz](https://graphviz.org/)
    - [ ] [abcjs](https://github.com/paulrosen/abcjs)
    - [ ] [Wavedrom](https://github.com/wavedrom/wavedrom)
  - [ ] Table
      - [ ] 支持行与列的增删
      - [ ] 支持表内连接跳转
      - [ ] 可拖拽行列顺序
      - [ ] 自动对齐
      - [ ] 支持从菜单栏点击插入表格
  - [ ] 自动识别链接，高亮可跳转
  - [ ] 支持快捷键操作

## Related technologies
- [TypeScript](https://www.typescriptlang.org/)
- [Electron](https://www.electronjs.org/)

## How to contribute
1. Config git hooks in your host
```bash
git config --global init.templateDir $HOME/.git-template
# Download git hooks scripts
git clone https://github.com/tzaiyang/git-hooks $HOME/.git-template
# Check enviorment and dependencies
bash $HOME/.git-template/hooks/scripts/check-dep.sh
# Active githooks
git init
# Deactive githooks
# rm -rf .git/hooks
```
2. Run in host
```bash
# install dependencies
npm install --save-dev electron
# run xeditor
npm start
```

# References
1. https://github.com/purocean/yn
2. https://github.com/Vanessa219/vditor
3. https://github.com/88250/lute
4. https://github.com/marktext/marktext
5. https://github.com/benweet/stackedit
6. https://github.com/nhn/tui.editor
7. https://github.com/pandao/editor.md
8. https://github.com/MacDownApp/macdown
9. https://github.com/vnotex/vnote
10. https://github.com/microsoft/vscode
11. https://github.com/typora/typora-issues/issues/1138
