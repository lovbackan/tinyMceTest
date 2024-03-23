tinymce.PluginManager.add("highlight", function (editor, url) {
  editor.ui.registry.addButton("highlight", {
    text: "Highlight",
    onAction: function () {
      var selectedText = editor.selection.getContent();
      var newContent =
        '<span id="' +
        selectedText +
        '" style="background-color: yellow;" class="highlighted">' +
        selectedText +
        "</span> "; // Add closing tag and space
      editor.insertContent(newContent);
    },
  });
});

console.log("testPlugin.js loaded");
