tinymce.PluginManager.add("linkToCard", function (editor, url) {
  editor.ui.registry.addSplitButton("linkToCard", {
    text: "Card Link",
    onAction: function () {
      // Default action
    },
    onItemAction: function (api, value) {
      var newContent =
        '<span id="' +
        value +
        '" style="background-color: yellow;" class="linked">' +
        editor.selection.getContent() +
        "</span> "; // Add closing tag and space
      editor.insertContent(newContent);
    },
    fetch: function (callback) {
      var items = [
        //fetch  these values from a database where the options are form the given story
        { type: "choiceitem", text: "Value 1", value: "value1" },
        { type: "choiceitem", text: "Value 2", value: "value2" },
        { type: "choiceitem", text: "Value 3", value: "value3" },
      ];
      callback(items);
    },
  });
});

console.log("testPlugin.js loaded");
