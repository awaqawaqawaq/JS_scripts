  `document.execCommand()` 是一个较早期用于编辑和操作网页内容的 API，尽管现在逐渐被淘汰，但它仍然可以在某些场景下使用。以下是一些常见的使用例子：
  
  ### 1. **加粗文本**
  使用 `execCommand('bold')` 可以让选中的文本加粗，类似于富文本编辑器中的加粗按钮。
  
  ```javascript
  // 选中文本
  document.execCommand('bold');
  ```
  
  当用户选中了一部分文本后，调用这个命令将使该文本变为加粗状态。
  
  ### 2. **插入文本**
  `execCommand('insertText')` 用于在当前光标位置插入文本。
  
  ```javascript
  document.execCommand('insertText', false, 'Hello, world!');
  ```
  
  这个命令会在光标处插入 `"Hello, world!"` 文本。
  
  ### 3. **撤销操作**
  `execCommand('undo')` 可以撤销最近一次的编辑操作。
  
  ```javascript
  document.execCommand('undo');
  ```
  
  类似于用户按下 `Ctrl + Z`，撤销最近的内容更改。
  
  ### 4. **创建链接**
  `execCommand('createLink')` 用于将选中的文本变成一个超链接。
  
  ```javascript
  let url = prompt('Enter the URL:');
  document.execCommand('createLink', false, url);
  ```
  
  在这个例子中，用户首先输入要链接的 URL，然后选中的文本会变成该链接。
  
  ### 5. **删除选中的内容**
  使用 `execCommand('delete')` 可以删除当前选中的内容，模拟用户按下删除键的行为。
  
  ```javascript
  document.execCommand('delete');
  ```
  
  如果有选中的文本，这个命令会将其删除。
  
  ### 6. **插入图片**
  `execCommand('insertImage')` 可以插入一张图片到当前光标位置。
  
  ```javascript
  let imgUrl = prompt('Enter the image URL:');
  document.execCommand('insertImage', false, imgUrl);
  ```
  
  用户输入图片的 URL 后，该图片会被插入到光标位置。
  
  ### 7. **复制选中的内容**
  `execCommand('copy')` 可以将选中的文本复制到剪贴板。
  
  ```javascript
  document.execCommand('copy');
  ```
  
  这个命令相当于用户按下 `Ctrl + C`，将选中的内容复制到剪贴板。
  
  ### 8. **剪切选中的内容**
  `execCommand('cut')` 用于剪切当前选中的文本。
  
  ```javascript
  document.execCommand('cut');
  ```
  
  与复制类似，但它会将选中的文本从原位置移除。
  
  ### 9. **插入有序列表**
  `execCommand('insertOrderedList')` 会插入一个有序列表（带数字的列表）。
  
  ```javascript
  document.execCommand('insertOrderedList');
  ```
  
  光标所在的行会变成一个有序列表的项目，或者在已有文本的基础上生成有序列表。
  
  ### 10. **插入无序列表**
  `execCommand('insertUnorderedList')` 用于插入无序列表（带圆点的列表）。
  
  ```javascript
  document.execCommand('insertUnorderedList');
  ```
  
  与有序列表类似，但这里生成的是带圆点的无序列表。
  
  ### 11. **删除文本格式**
  `execCommand('removeFormat')` 可以移除选中文本的格式（例如加粗、斜体、下划线等）。
  
  ```javascript
  document.execCommand('removeFormat');
  ```
  
  选中的文本将恢复为普通文本，没有任何样式。
  
  ### 12. **字体样式**
  `execCommand('fontName')` 可以更改选中文本的字体。
  
  ```javascript
  document.execCommand('fontName', false, 'Arial');
  ```
  
  这会将选中的文本设置为 `"Arial"` 字体。
  
  ### 13. **改变字体颜色**
  使用 `execCommand('foreColor')` 可以更改选中文本的颜色。
  
  ```javascript
  document.execCommand('foreColor', false, '#ff0000');
  ```
  
  这个命令将选中文本的颜色改为红色（`#ff0000`）。
  
  ### 14. **文本对齐**
  使用 `execCommand('justifyCenter')` 可以将文本居中对齐。
  
  ```javascript
  document.execCommand('justifyCenter');
  ```
  
  类似的命令有 `justifyLeft`（左对齐）、`justifyRight`（右对齐）、`justifyFull`（两端对齐）。
  
  ### 总结
  虽然 `document.execCommand()` 提供了许多功能来操控文本和富文本编辑器中的内容，但由于现代浏览器逐渐淘汰该 API，因此应当尽量使用现代替代方案，如 `Selection API` 和 `Range API` 或使用成熟的富文本编辑器库（如 TinyMCE、Quill.js）。
  