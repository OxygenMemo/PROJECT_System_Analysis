jQuery("#simulation")
  .on("click", ".s-e694569e-3a69-45c2-85c3-64e0d12eb2ae .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e694569e-3a69-45c2-85c3-64e0d12eb2ae #s-Button_5": {
                      "attributes": {
                        "background-color": "#8AD9D2",
                        "background-image": "none",
                        "box-shadow": "0px 10px 13px 0px #000000",
                        "text-shadow": "none",
                        "font-size": "15.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-e694569e-3a69-45c2-85c3-64e0d12eb2ae #s-Button_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-e694569e-3a69-45c2-85c3-64e0d12eb2ae #s-Button_5 span": {
                      "attributes": {
                        "color": "#303030",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "15.0pt"
                      }
                    }
                  },{
                    "#s-e694569e-3a69-45c2-85c3-64e0d12eb2ae #s-Button_5": {
                      "attributes-ie": {
                        "-pie-background": "#8AD9D2",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e694569e-3a69-45c2-85c3-64e0d12eb2ae #s-Button_6": {
                      "attributes": {
                        "background-color": "#FAFAFA",
                        "background-image": "none",
                        "box-shadow": "0px 3px 4px 0px #000000",
                        "text-shadow": "none",
                        "font-size": "15.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-e694569e-3a69-45c2-85c3-64e0d12eb2ae #s-Button_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-e694569e-3a69-45c2-85c3-64e0d12eb2ae #s-Button_6 span": {
                      "attributes": {
                        "color": "#BCBCBC",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "15.0pt"
                      }
                    }
                  },{
                    "#s-e694569e-3a69-45c2-85c3-64e0d12eb2ae #s-Button_6": {
                      "attributes-ie": {
                        "-pie-background": "#FAFAFA",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5dcb6a67-1938-4b64-b145-51ecd54b6ec4"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e694569e-3a69-45c2-85c3-64e0d12eb2ae #s-Button_6": {
                      "attributes": {
                        "background-color": "#8AD9D2",
                        "background-image": "none",
                        "box-shadow": "0px 10px 13px 0px #000000",
                        "text-shadow": "none",
                        "font-size": "15.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-e694569e-3a69-45c2-85c3-64e0d12eb2ae #s-Button_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-e694569e-3a69-45c2-85c3-64e0d12eb2ae #s-Button_6 span": {
                      "attributes": {
                        "color": "#303030",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "15.0pt"
                      }
                    }
                  },{
                    "#s-e694569e-3a69-45c2-85c3-64e0d12eb2ae #s-Button_6": {
                      "attributes-ie": {
                        "-pie-background": "#8AD9D2",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e694569e-3a69-45c2-85c3-64e0d12eb2ae #s-Button_5": {
                      "attributes": {
                        "background-color": "#FAFAFA",
                        "background-image": "none",
                        "box-shadow": "0px 3px 4px 0px #000000",
                        "text-shadow": "none",
                        "font-size": "15.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-e694569e-3a69-45c2-85c3-64e0d12eb2ae #s-Button_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-e694569e-3a69-45c2-85c3-64e0d12eb2ae #s-Button_5 span": {
                      "attributes": {
                        "color": "#BCBCBC",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "15.0pt"
                      }
                    }
                  },{
                    "#s-e694569e-3a69-45c2-85c3-64e0d12eb2ae #s-Button_5": {
                      "attributes-ie": {
                        "-pie-background": "#FAFAFA",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1dca9830-e8d1-4dc4-b804-86f9df6d4f9c"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-arrow-back_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/29e9aabb-2242-42e7-9704-52246eb9532a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });