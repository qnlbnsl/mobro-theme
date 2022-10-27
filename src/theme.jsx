import React from "react";
import mobro from "mobro";
import Text from './widgets/Text'

mobro.hooks.addWidget({
  name: "text",
  label: "Text",
  component: Text,
  icon: "widget.text",
  config: {
      text: {
          type: "input"
      }
  }
})
